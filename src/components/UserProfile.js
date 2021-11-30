/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router';
import { useParams } from "react-router-dom";
import { StudentContext } from '../App';
import './UserProfile.css'

const UserProfile = (props) => {

    let context = useContext(StudentContext);

    let navigate = useNavigate();
    const params = useParams();

    // for displaying the values in card
    const [name, setName] = useState("");
    const [email, setEmail] = useState("")
    const [mobile, setMobile] = useState("")
    const [degree, setDegree] = useState("")
    const [department, setDepartment] = useState("")

    useEffect(() => {
        if (params.id) {
            getData();
        }
    }, [])

    const getData = () => {
        setName(context.data[params.id].name);
        setEmail(context.data[params.id].email);
        setMobile(context.data[params.id].mobile);
        setDegree(context.data[params.id].degree);
        setDepartment(context.data[params.id].department);

    };


    return (

        <div className='h-100 d-flex justify-content-center align-items-center flex-column'>
            <>
                <div className="card" style={{ width: 18 + 'rem' }}>
                    <img src="https://t3.ftcdn.net/jpg/01/18/01/98/360_F_118019822_6CKXP6rXmVhDOzbXZlLqEM2ya4HhYzSV.jpg" className="card-img-top" alt="profile pic" />
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <div className='d-flex flex-column justify-content-center align-items-center'>
                            <div className='d-flex justify-content-around'>
                                <p className='fw-bolder text-left w-100'>{degree ? degree + ' - ' + department : ''}</p>
                            </div>
                            <br />
                            <div className='d-flex justify-content-around'>
                                <p className='text-left'>{email}</p>
                            </div>
                            <div className='d-flex justify-content-around'>
                                <p className='text-left'>{mobile}</p>
                            </div>
                        </div>
                        <button className="btn btn-warning badge-pill" onClick={() => { navigate('/edit-user/' + params.id) }}><i className="far fa-edit"></i> Edit</button>

                    </div>
                </div>
                <button className="btn btn-secondary badge-pill my-5" onClick={() => navigate('/users')}><i className="fas fa-chevron-circle-left"></i> Back to Users List</button>
            </>

        </div>

    )
}

export default UserProfile
