import { useState } from "react";
import { Link } from "react-router-dom";

export const Index = props => {

  // state to hold form data
  const [newForm, setNewForm] = useState({
    name: "",
    countryOfOrigin: "",
    image: ""
  });

      const handleChange = (event) => {
        const newState = {...newForm}
        newState[event.target.name] = event.target.value
        setNewForm(newState)
    }

  const handleSubmit = (event) => {
      event.preventDefault()
      props.createCheese(newForm)
      setNewForm({
        name: "",
        countryOfOrigin: "",
        image: ""
    })
  }

  const form = (
    <form onSubmit={handleSubmit}>
    <input
      type="text"
      value={newForm.name}
      name="name"
      placeholder="name"
      onChange={handleChange}
    />
    <input
      type="text"
      value={newForm.countryOfOrigin}
      name="countryOfOrigin"
      placeholder="Country of Origin"
      onChange={handleChange}
    />
    <input
      type="text"
      value={newForm.image}
      name="image"
      placeholder="Image URL"
      onChange={handleChange}
    />
        <input type="submit" value="Create Cheese" />
      </form>
  )

  if (props.cheese) {
    return (
      <section className="Index">
        {form}
        {props.cheese.map((acheese) => {
          return (
            <div key={acheese._id} className="cheese">
              <Link to={`/cheese/${acheese._id}`}>
                <h1>{acheese.name}</h1>
                <h2>{acheese.countryOfOrigin}</h2>
              </Link>
              <img src={acheese.image} alt={acheese.name} />
            </div>
          )
        })}
      </section>
    )
  } else {
    return (
      <section>
        {form}
        <h1>Loading...</h1>
      </section>
    )
  }
}
export default Index;