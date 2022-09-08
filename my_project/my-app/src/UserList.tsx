import React, { useEffect,useState } from "react";

export default function UserList() {
    const [users, setUsers] = useState<any[]>([]);
    useEffect(() => {
        async function main(){
            const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/users`, {
                credentials: 'include'
            })
            const json = await res.json();

            setUsers(json)
        }
        main();
    }, [])

    return (
        <div>
            <h2>UserList</h2>
            {users.map((user,index) => (
                <div key={index}>
                    {user.username}
                </div>
            ))}
        </div>
    )
}