import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router';
import { StudentContext } from '../App';

const AddUser = () => {

    let navigate = useNavigate();

    let context = useContext(StudentContext);

    // state mangmt for the new values
    const [name, setName] = useState("");
    const [email, setEmail] = useState("")
    const [mobile, setMobile] = useState("")
    const [degree, setDegree] = useState("")
    const [department, setDepartment] = useState("")

    let handleSave = () => {
        context.data.push({ name, email, mobile, degree, department })
        navigate("/users");
    }

    return (
        <div className='container my-3'>
            <h1>Add user</h1>
            <div>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input id='name' name='name' type="text" onChange={(e) => setName(e.target.value)} value={name} className="form-control" />
                </div>

                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input id='email' name='email' type="email" onChange={(e) => setEmail(e.target.value)} value={email} className="form-control" />
                </div>

                <div className="mb-3">
                    <label htmlFor="mobile" className="form-label">Mobile</label>
                    <input id='mobile' name='mobile' type="number" onChange={(e) => setMobile(e.target.value)} value={mobile} className="form-control" />

                </div>
                <div className="mb-3">
                    <label htmlFor="degree" className="form-label">Degree</label>
                    <input id='degree' name='degree' type="text" onChange={(e) => setDegree(e.target.value)} value={degree} className="form-control" />
                </div>

                <div className="mb-3">
                    <label htmlFor="department" className="form-label">Department</label>
                    <input id='department' name='department' type="text" onChange={(e) => setDepartment(e.target.value)} value={department} className="form-control" />
                </div>

                <button type="submit" onClick={handleSave} className="btn btn-primary" >Submit</button>
            </div>
        </div>
    )
}

export default AddUser

