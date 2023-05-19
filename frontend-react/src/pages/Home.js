import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link, useParams} from "react-router-dom";

function Home() {
    const [users, setUsers] = useState([])
    const {id} = useParams();
    useEffect(()=>{
        loadUser()
    },[])

    const loadUser = async () => {
        const result = await axios.get("http://localhost:8080/users");
        setUsers(result.data)
    }

    const deleteUser = async (id)=> {
        await axios.delete(`http://localhost:8080/user/${id}`);
        loadUser();
    }
    return (
        <div className="container">
            <div className="py-4">
                <table className="table shadow">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Username</th>
                        <th scope="col">Email</th>
                        <th scope="col">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {users.map((user,index) => {
                        return(
                            <tr key={user.id}>
                                <th scope="row">{index+1}</th>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>
                                    <Link className="btn btn-primary mx-2" to={`/view-user/${user.id}`}>View</Link>
                                    <Link className="btn btn-outline-primary mx-2" to={`/edit-user/${user.id}`}>Edit</Link>
                                    <button className="btn btn-danger mx-2" onClick={()=>deleteUser(user.id)}>Delete</button>
                                </td>
                            </tr>
                        )}
                    )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Home;