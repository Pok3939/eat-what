import { useEffect, useState } from "react";
import { CheckboxGroup, Checkbox, Provider, defaultTheme } from '@adobe/react-spectrum'
import React from "react";



export default function Tickbox() {
    const [restaurants, setRestaurants] = useState<any>([]);
    const [selected, setSelected] = useState<any>(["1", "2", "3", "4", "5", "6", "7", "8", "9"]);
    useEffect(() => {
        async function main() {
            const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/dishes/`, {
                credentials: 'include',
            })
            const json = await res.json();
            setRestaurants(json)
        } main();


    }, [])
    return (
        <><Provider theme={defaultTheme}
            colorScheme={selected ? "light" : "dark"}
            height="100%">
            {restaurants[0] &&
                <div className='dishChoice'>
                    <CheckboxGroup
                        label="Dishes"
                        defaultValue={["1", "2"]}
                        value={selected}
                        onChange={setSelected}
                    >
                        <Checkbox value="1">{restaurants[0].text}</Checkbox>
                        <Checkbox value="2">{restaurants[1].text}</Checkbox>
                        <Checkbox value="3">{restaurants[2].text}</Checkbox>
                        <Checkbox value="4">{restaurants[3].text}</Checkbox>
                        <Checkbox value="5">{restaurants[4].text}</Checkbox>
                        <Checkbox value="6">{restaurants[5].text}</Checkbox>
                        <Checkbox value="7">{restaurants[6].text}</Checkbox>
                        <Checkbox value="8">{restaurants[7].text}</Checkbox>
                        <Checkbox value="9">{restaurants[8].text}</Checkbox>

                    </CheckboxGroup>

                    <div>You have selected: {selected.join(', ')}</div>
                </div>

            }
        </Provider>
        </>
    )

}



