import React, { useEffect, useState } from "react";
import { useAppSelector } from './store'
export default function UserList() {
    const [users, setUsers] = useState<any[]>([]);
    const token = useAppSelector(state => state.auth.token)
    useEffect(() => {
        async function main() {
            if (token == null) {
                return;
            }
            const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/users`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            })
            const json = await res.json();

            setUsers(json)
        }
        main();
    }, [])

    return (
        <div>
            <h2>UserList</h2>
            {users.map((user, index) => (
                <div key={index}>
                    {user.username}
                </div>
            ))}
        </div>
    )
}