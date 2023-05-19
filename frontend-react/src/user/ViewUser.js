import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import axios from "axios";

function ViewUser() {
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

    const loadUser = async () => {
        const result = await axios.get(`http://localhost:8080/user/${id}`)
        setUser(result.data)
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className="text-center m-4"> User's Detail</h2>
                    <div className="card">
                        <div className="card-header">
                            Details of User with id: {user.id}
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                    <b>Name: </b>{user.name}
                                </li>

                                <li className="list-group-item">
                                    <b>Username: </b>{user.username}
                                </li>

                                <li className="list-group-item">
                                    <b>E-mail: </b>{user.email}
                                </li>
                            </ul>
                        </div>
                        <Link className="btn btn-primary my-2" to="/">
                            Return
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ViewUser;