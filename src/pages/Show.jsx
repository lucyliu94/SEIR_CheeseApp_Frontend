import { useParams, useNavigate } from "react-router-dom"
import {useState, useEffect} from "react"

export const Show = (props) => {
    //grab the navigate function
    const navigate = useNavigate()
    // get the params object
    const params = useParams()
    //grab the id from params
    const id = params.id
    //grab people from props
    const cheese = props.cheese
    const acheese = cheese.find((c) => c._id === id)
    // create state for form 
    const [editForm, setEditForm] = useState({})
  useEffect(() => {
    if(props.cheese){
        const acheese = cheese.find((c) => c._id === id);
        setEditForm(acheese)
    }
}, [props.cheese])
    

if (props.cheese) {
    const acheese = cheese.find((c) => c._id === id);
    
    // handleChange function for form
    const handleChange = (event) => {
        // create a copy of the state
        const newState = {...editForm}
        // update the newState
        newState[event.target.name] = event.target.value
        // update the state
        setEditForm(newState)
    }

    // handleSubmit for form
    const handleSubmit = (event) => {
        // prevent the refresh
        event.preventDefault()
        // pass the form data to updateCheese
        props.updateCheese(editForm, acheese._id)
        // redirect people back to index
        navigate("/")
    }

    const removeCheese = () => {
        props.deleteCheese(acheese._id)
        navigate("/")
    }

const form = <form onSubmit={handleSubmit}>

    <input 
    type="text"
    value={editForm.name}
    name="name"
    placeholder="name"
    onChange={handleChange}
    />
    <input
    type="text"
    value={editForm.countryOfOrigin}
    name="country of origin"
    placeholder="Country of Origin"
    onChange={handleChange}
    />
    <input
    type="text"
    value={editForm.image}
    name="image"
    placeholder="Image URL"
    onChange={handleChange}
    />
    <input type = "submit" value="Update Cheese"/>

</form>

    return (
      <div className="cheese">
        <h1>{acheese.name}</h1>
        <h2>{acheese.countryOfOrigin}</h2>
        <img src={acheese.image} alt={acheese.name} />
        {form}
        <button onClick={removeCheese}>REMOVE CHEESE</button>
      </div>
    );
  } else {
        return <h1> No Cheese Here! </h1>
    }
    
    

}

export default Show

