import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link, useNavigate, useParams} from "react-router-dom";

function EditUser() {
    let navigate = useNavigate()

    const [user, setUser] = useState({
        name:"",
        username:"",
        email:""
    })
    const { id } = useParams();
    const{name,username,email} = user
    useEffect(()=>{
        loadUser();
    },[])
    const onInputChange = (event) => {
        setUser({
            ...user,
            [event.target.name]:event.target.value
        })
    }

    const onSubmit = async (event) => {
        event.preventDefault();
        await axios.put(`http://localhost:8080/user/${id}`, user)
        navigate("/")
    }
    const loadUser = async () => {
        const result = await axios.get(`http://localhost:8080/user/${id}`)
        setUser(result.data)
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className="text-center m-4">Edit User's Info</h2>
                    <form onSubmit={onSubmit}>
                        <div className="mb-3">
                            <label htmlFor="Name" className=" form-label">Name</label>
                            <input type="text" className="form-control" placeholder="Enter your name" name="name" value={name} onChange={onInputChange}/>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="username" className=" form-label">username</label>
                            <input type="text" className="form-control" placeholder="Enter your username" name="username" value={username} onChange={onInputChange}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className=" form-label">E-mail</label>
                            <input type="text" className="form-control" placeholder="Enter your e-mail address" name="email" value={email} onChange={onInputChange}/>
                        </div>
                        <button type="submit" className="btn btn-outline-primary">Submit</button> <Link to="/" className="btn btn-outline-danger mx-2">Cancel</Link>
                    </form>
                </div>
            </div>

        </div>
    );
}

export default EditUser;