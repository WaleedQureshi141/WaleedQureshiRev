import React, {useEffect, useState} from "react";
import { viewAllUsers } from "../services/ViewAllUsers";

function ViewAllUsersComp()
{
    const [users, setUsers] = useState([]);

    useEffect(() => {
        viewAllUsers().then((response) => {
            setUsers(response.data);
        }).catch(error => {
            console.error(error);
        })
    }, []);

    return (
        <div className="container">
            <h1 className="text-center">LIST OF USERS</h1>
            <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th>USER ID</th>
                        <th>FIRSTNAME</th>
                        <th>LASTNAME</th>
                        <th>USERNAME</th>
                        <th>ROLE</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map(user =>
                            <tr key={user.userId}>
                                <td>{user.userId}</td>
                                <td>{user.firstName}</td>
                                <td>{user.lastName}</td>
                                <td>{user.username}</td>
                                <td>{user.role}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );

}

export default ViewAllUsersComp