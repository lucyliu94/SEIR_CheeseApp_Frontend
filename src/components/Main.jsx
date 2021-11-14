import { useEffect, useState } from "react"
import {Route, Routes} from "react-router-dom"
import Index from "../pages/Index"
import Show from "../pages/Show"



export const Main = () => {
    const [cheese, setCheese] = useState(null);
    // your deployed heroku URL 
    const URL = "https://ll-cheese-backend.herokuapp.com/cheese/"
    // function to get updated list of cheese
    const getCheese = async () => {
        const response = await fetch(URL)
        const data = await response.json()
        setCheese(data)
    }


    const createCheese = async (acheese) => {
        await fetch(URL, {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(acheese)
        })
        getCheese()
    }


    const updateCheese =  async (acheese, id) =>  {
        await fetch(URL + id, {
            method: "put", 
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(acheese)
        })
        getCheese()
    }

    const deleteCheese = async (id) => {
        await fetch (URL + id, {
            method: "delete"
        })
        getCheese()
    }

    useEffect( () => {
        getCheese()
    }, [])


    return <main>
    <Routes>
      <Route path="/" element={
      <Index cheese={cheese} createCheese={createCheese}/>
      } />
      <Route path="/cheese/:id" element={
      <Show cheese={cheese} updateCheese={updateCheese} deleteCheese={deleteCheese}/>} />
    </Routes>
  </main>
}

export default Main