/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext } from 'react'
import { useNavigate } from 'react-router';
import { StudentContext } from '../App';
const AllUsers = (props) => {


    let context = useContext(StudentContext);

    let navigate = useNavigate();

    let handleDelete = (i) => {
        console.log(context.data.indexOf(context.data[i]));
        context.data.splice(i, 1);
        navigate('/users');
    }

    return <div className='container-fluid my-3'>

        <table className="table table-striped text-center">
            <thead className="thead-dark">
                <tr>
                    <th>id</th>
                    <th>Name</th>
                    <th>Graduate</th>
                    <th>Department</th>
                    <th>Mobile</th>
                    <th>Email</th>
                    <th>Options</th>
                </tr>
            </thead>
            <tbody>
                {
                    context.data.map((e, i) => {
                        return <tr key={i + 1}>
                            <td>{i + 1}</td>
                            <td>{e.name}</td>
                            <td>{e.degree}</td>
                            <td>{e.department}</td>
                            <td>{e.mobile}</td>
                            <td>{e.email}</td>
                            <td>
                                <button className='btn btn-info mr-2' onClick={() => { navigate('/profile/' + i) }}><i className="fas fa-list"></i></button>
                                <button className='btn btn-warning mr-2' onClick={() => { navigate('/edit-user/' + i) }}><i className="far fa-edit"></i></button>
                                <button className='btn btn-danger' onClick={() => handleDelete(i)}><i className="fas fa-trash-alt"></i></button>
                            </td>
                        </tr>
                    })
                }

            </tbody>
        </table>
    </div>
}

export default AllUsers

/* <button className='btn btn-info mr-2 my-2' onClick={() => { navigate('/profile/' + e.id) }}><i className="fas fa-list"></i> View</button>
        <button className='btn btn-warning mr-2 my-2' onClick={() => { navigate('/edit-user/' + e.id) }}><i className="far fa-edit"></i> Edit</button>
        <button className='btn btn-danger' onClick={() => handleDelete(e.id)}><i className="fas fa-trash-alt"></i> Delete</button> */