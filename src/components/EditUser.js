/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router';
import { useParams } from "react-router-dom";
import { StudentContext } from '../App';

const EditUser = (props) => {

    let context = useContext(StudentContext);

    let navigate = useNavigate();
    const params = useParams();


    useEffect(() => {
        if (params.id) {
            getData();
        }
    }, [])

    // state mangmt. for the editing values and to be submitted

    const [userName, setUserName] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("")
    const [mobile, setMobile] = useState("")
    const [degree, setDegree] = useState("")
    const [department, setDepartment] = useState("")

    // loading the values for the data to be edited using fetch
    const getData = () => {
        setUserName(context.data[params.id].name);
        setName(context.data[params.id].name);
        setEmail(context.data[params.id].email);
        setMobile(context.data[params.id].mobile);
        setDegree(context.data[params.id].degree);
        setDepartment(context.data[params.id].department);

    };

    // saving edited data 
    let handleSave = (event) => {
        context.data[params.id] = { name, email, mobile, degree, department }
        navigate("/users");
    }


    let handleCancel = () => {
        navigate('/users')
    }


    return (
        <div className='container my-3'>
            <form className='w-75'>
                <h1>Edit User - {userName}</h1>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Name</label>
                    <input type="text" value={name || ''} className="form-control" onChange={(e) => setName(e.target.value)} placeholder="Name" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" value={email || ''} className="form-control" onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Mobile</label>
                    <input type="text" value={mobile || ''} className="form-control" onChange={(e) => setMobile(e.target.value)} placeholder="Mobile" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Degree</label>
                    <input type="text" value={degree || ''} className="form-control" onChange={(e) => setDegree(e.target.value)} placeholder="Degree" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Department</label>
                    <input type="text" value={department || ''} className="form-control" onChange={(e) => setDepartment(e.target.value)} placeholder="Department" />
                </div>
                <div className='d-flex justify-content-between'>
                    <button type="submit" className="btn btn-primary" onClick={handleSave}>Submit</button>
                    <button type="submit" className="btn btn-danger" onClick={handleCancel} >Cancel</button>
                </div>
            </form>

        </div>
    )
}

export default EditUser
