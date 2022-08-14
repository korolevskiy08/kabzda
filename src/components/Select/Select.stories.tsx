import React, {useState} from 'react';
import {Select} from "./Select";
import {action} from "@storybook/addon-actions";

export default {
    title: 'select',
    component: Select,
}

export const BaseExample = () =>{
    const [value, setValue] = useState('2')
    return <>
        <Select onChange={setValue}
                value={value}
                items={[
                    {value: '1', title: 'Minsk'},
                    {value: '2', title: 'Moscow'},
                    {value: '3', title: 'Kiev'},
                ]}/>

    </>
}


export const WithoutValue = () =>
    <>
        <Select onChange={action('Value changed')}
                value={'2'}
                items={[
                    {value: '1', title: 'Minsk'},
                    {value: '2', title: 'Moscow'},
                    {value: '3', title: 'Kiev'},
                ]}/>

    </>


