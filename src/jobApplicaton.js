import React , { Component } from 'react'

class JobApplication extends Component{
    constructor(){
        super();
        this.state ={
            candName : "",
            candAge : '',
            roleApplied : "",
            errors :{
                candName : "",
                candAge : ""
            }
        
        }
    }
    
    update = ({target : {name ,value}}) =>{
        console.log(value)
        const errors = {...this.state.errors};
        if(name === "candName") {
                if (!value){
                    errors[name] = "candidate name should not be empty";
                    console.log(errors.name)
                }
                else {
                    errors[name] = ""
                }
                
            }
            if(name === "candAge") {
                if (Number(value)<18){
                    errors[name] = "candidate age must be greater than 18"
                }
                else {
                    errors[name] = ""
                }
                
            }
            
        
        this.setState({[name] : value,errors : errors});
    }
    submission =(e)=>{
        e.preventDefault();
        console.log(this.state.candName );
    }
    render(){
        return <>
        <form onSubmit={this.submission}>
            <label>Canditate Name : </label>
            <input type="text" name = "candName" onChange ={this.update} value = {this.state.candName}/>
            {this.state.errors.candName ? this.state.errors.candName : ""}
            <br>
            </br>
            <br>
            </br>
            <label>Canditate Age : </label>
            <input type="number" name = "candAge" onChange ={this.update} value = {this.state.candAge}/>
            {this.state.errors.candAge ? this.state.errors.candAge : ""}

            <br>
            </br>
            <br>
            </br>
            <label>Role applied for : </label>
            <select name = "roleApplied" value={this.state.roleApplied} onChange ={this.update}>
                <option value="python">Python developer</option>
                <option value="Java">Java developer</option>
                <option value="Mern">Mern developer</option>
            </select>
            <input type ="submit"></input>
        </form>
        </>
    }

  
}
export default JobApplication