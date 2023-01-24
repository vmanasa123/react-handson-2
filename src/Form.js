
import './style.css'
import React, { Component } from 'react'

export default class Form extends Component {
    constructor(){
        super();
        this.state={
            
        name: "",
        department: "",
        rating: "",
        employees: [],
        show: false
        }
    }

    handleChange = (e) => {
        console.log(e.target);
        this.setState({
          [e.target.name]: e.target.value
        })
      }
      OnSubmit(event) {
        event.preventDefault();

        this.setState({ show: true });
        const Obj = {
          name: this.state.name,
          department: this.state.department,
          rating: this.state.rating
        }
    
        this.state.employees.push(Obj)
        this.setState({
          name: "",
          department: "",
          rating: "",
          show: true
    
        })
        console.log(this.state.employees)
      }

  render() {
    return (
      <div>
         <div className='container'>
                <h1> EMPLOYEE FEEDBACK FORM </h1>

            <form action=""> 

             <label className="form" for="name"> <b> Name :</b> </label>
  <input required type="text" id="name" value={this.state.name} name="name" onChange={this.handleChange} />
            <br></br>

            <label className="form" for="department"> <b> Department :</b> </label>
   <input required type="text" id="department" value={this.state.department} name="department" onChange={this.handleChange} />
            <br></br>

             <label className="form" for="rating"> <b> Rating : </b> </label>
   <input required type="number" id="rating" value={this.state.rating} name="rating" onChange={this.handleChange} /> 
             <br></br>
    
         </form>

        <button type="submit"  className="submit" onClick={this.OnSubmit.bind(this)}> Submit </button>
           </div>
          
            {this.state.show && <div className='box'>
              {this.state.employees.length > 0 && this.state.employees.map((e) => {
               return ( 
               <div className=''>
            <h2>{e.name} | {e.department} | {e.rating}</h2>
           </div>)
              })}
            </div>}
           
            
      </div>
    )
  }
}



       
    
    