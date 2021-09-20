import React from 'react'

class App extends React.Component{
  constructor(){
    super()
    this.state = {
      firstName : "",
      lastName: "",
      age : "",
      gender: "",
      destination: "",
      isVegan: false,
      isKosher: false,
      isLactoseIntolerant: false
      
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event){
    const {name, value, type, checked} = event.target
    type ==="checkbox" ?
      this.setState({
       
          [name]:checked
        
      }) :
      this.setState({
        [name]: value
      })
    console.log(name,value)
  }

  render(){
    return(
      <div>
        <form>
          <input 
            type="text"
            value={this.state.firstName}
            name = 'firstName'
            onChange={this.handleChange}
            placeholder ="First Name"
          />
          <br></br>
          <input
            type="text"
            value={this.state.lastName}
            name = 'lastName'
            onChange={this.handleChange}
            placeholder="Last Name"
          />
          <br></br>
          <input
            value={this.state.age}
            name = 'age'
            onChange={this.handleChange}
            placeholder="Age"
          />
          <br></br>
          <label>
            <input 
              type="radio"
              name="gender"
              value="Male"
              checked={this.state.gender === "Male"}
              onChange={this.handleChange}
            /> Male
          </label>
          <br></br>
          <label>
            <input 
              type="radio"
              name="gender"
              value="Female"
              checked={this.state.gender === "Female"}
              onChange={this.handleChange}
            /> Female
          </label>
          <br></br>

          <select 
            value="this.state.destination"
            name="destination"
            onChange={this.handleChange}
          >
            <option value="">Please select a destination</option>
            <option value="Germany">Germany</option>
            <option value="North Pole">North Pole</option>
            <option value="South Pole">South Pole</option>
            <option value="Iceland">Iceland</option>
          </select>
          <br></br>

          <label>
            <input
              type="checkbox"
              name="isVegan"
              onChange={this.handleChange}
              checked={this.state.isVegan}
            /> Vegan?
            <input
              type="checkbox"
              name="isKosher"
              onChange={this.handleChange}
              checked={this.state.isKosher}
            /> Kosher?
            <input
              type="checkbox"
              name="isLactoseIntolerant"
              onChange={this.handleChange}
              checked={this.state.isLactoseIntolerant}
            /> Lactose intolerant?
          </label>

          <label>Your Name: {this.state.firstName} {this.state.lastName}
          </label>
          <br></br>
          <label>Your Age: {this.state.age} 
          </label>
          <br></br>
          <p> Your Gender: {this.state.gender}</p>
          <br></br>
          <p>Your destination is {this.state.destination}</p>
          <br></br>
          <p>Your dietary restrictions:
            <br></br>Vegan: {this.state.isVegan ? "Yes": "No"}
            <br></br>Kosher: {this.state.isKosher ? "Yes": "No"}
            <br></br>Lactose intolerant: {this.state.isLactoseIntolerant ? "Yes": "No"}
          </p>
        </form>
      </div>
    )
  }
}

export default App