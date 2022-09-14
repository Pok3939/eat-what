import React, { useEffect, useState } from 'react';
import { Dropdown } from 'semantic-ui-react';
import { dishReducer } from './dishes/reducer';


export default function DropdownExampleClearable() {
    // const options = [

    //     { id: 1, dishes: 'chinese' },
    //     { id: 2, text: 'chinese', value: 8 },
    //     { id: 3, text: 'Choice 3', value: 3 },
    // ]
    const [dishes, setDishes] = useState<any[]>([]);
    useEffect(() => {
        async function main() {
            const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/dishes`, {
                credentials: 'include'
            })
            const jsons = await res.json();
            setDishes(jsons)
        }
        main();
    }, [])
    console.log('dishes:', dishes)
    // const styleLink = document.createElement("link");
    // styleLink.rel = "stylesheet";
    // styleLink.href = "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
    // document.head.appendChild(styleLink);
    return (

        <div>
            <link href="https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css" rel="stylesheet"></link>
            <Dropdown clearable options={dishes} selection />
        </div>

    )
}