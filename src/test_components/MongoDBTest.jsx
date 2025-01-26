import { useState, useEffect } from 'react';
import axios from "axios";

export default function MongoDBTest() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/users")
        .then((response) => {
            setUsers(response.data);
        })
    }, []);

    return(
        <div className="mongoDBTest">
            hello <br/>
            {users.map((user) => {
                return(
                    <>
                        {user.username} <br/>
                    </>
                )
            })}
        </div>
    );
}