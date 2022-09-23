import { useEffect, useState } from "react";
import { CheckboxGroup, Checkbox, Provider, defaultTheme, Flex } from '@adobe/react-spectrum'
import Button from 'react-bootstrap/Button';
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
                        <Flex direction="row">
                            <Checkbox value={restaurants[0].id.toString()}>{restaurants[0].text}</Checkbox>
                            <Checkbox value={restaurants[1].id.toString()}>{restaurants[1].text}</Checkbox>
                            <Checkbox value={restaurants[2].id.toString()}>{restaurants[2].text}</Checkbox>
                            <Checkbox value={restaurants[3].id.toString()}>{restaurants[3].text}</Checkbox>
                            <Checkbox value={restaurants[4].id.toString()}>{restaurants[4].text}</Checkbox>
                            <Checkbox value={restaurants[5].id.toString()}>{restaurants[5].text}</Checkbox>
                            <Checkbox value={restaurants[6].id.toString()}>{restaurants[6].text}</Checkbox>
                            <Checkbox value={restaurants[7].id.toString()}>{restaurants[7].text}</Checkbox>
                            <Checkbox value={restaurants[8].id.toString()}>{restaurants[8].text}</Checkbox>
                        </Flex>

                    </CheckboxGroup>

                    <div>You have selected: {selected.join(', ')}</div>
                </div>

            }
        </Provider>
            <div className='tickBoxButton'>
                <Button onClick={() => {
                    localStorage.setItem('tickedValue', selected)
                }
                }>

                </Button>
            </div>
        </>
    )

}



