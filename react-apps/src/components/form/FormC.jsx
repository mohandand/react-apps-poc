import React, {useState} from 'react';
import './formc.css'
export default function FormC(){
    const [formData, setFormData] = useState({
        fullname:'',
        password:'',
        confirmPassword:'',
        gender:'',
        checkbox:''
    })

    function handleChange(e){
        const {name, value,checked ,type} = e.target;
        const val = type ==='checkbox' ? checked :value
        setFormData((prevState) => {
            return {
                ...prevState,
                [name] : val
            }
        })
    }

    function hnadleSubmitt(){
        console.log(formData);
    }

    return <div className="continer">
        <form onSubmit={hnadleSubmitt}> 
            <label>Name</label><input type="text" className="text-box" name="fullname" onChange={handleChange}/>
           <label>Password</label><input type="password" className="text-box" name="password" onChange={handleChange}/>
            <label>ConfirmPassword</label><input type="password" className="text-box" name="confirmPassword" onChange={handleChange}/>
            <label>Gender</label>
            <select type="select" name="gender" onChange={handleChange}>
            <option>Male</option>
            <option>FeMale</option>
            </select>
            <input type="checkbox" name="aggrement" onChange={handleChange}/> Aggrement
            <button type="submitt">Submitt</button>
        </form>
    </div>
}