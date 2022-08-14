import React from 'react';
import './App.css';
import UnControlledAccordion from './components/UnControlledAccordion/UnControlledAccordion'
import {UnConrolledRating} from './components/UnControlledRating/UnConrolledRating';
import {Rating, RatingValueType} from './components/Rating/Rating'
import {useState} from "react";
import {UnControlledOnnOff} from './components/UnControlledOnnOff/UnControlledOnnOff';
import {Accordion} from './components/Accordion/Accordion';
import {OnnOff} from "./components/onnOff/OnnOff";
import {Select} from './components/Select/Select';

function App(props: any) {
    console.log('Render App')

    let [ratingValue, setRatingValue] = useState<RatingValueType>(4)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    let [onnOffCollapsed, setOnnOffCollapsed] = useState<boolean>(false)
    let [switchOn, setSwitchOn] = useState<boolean>(false)
    const itemsSelect = [
        {value: '1', title: 'Minsk'},
        {value: '2', title: 'Moscow'},
        {value: '3', title: 'Kiev'},
    ]
    const [value, setValue] = useState('2')

    return (
        <div className='app'>
            <h1>Select</h1>
            <Select onChange={setValue}
                    value={value}
                    items={itemsSelect}
            />

            <h1>UnConrolledOnnOff</h1>
            <UnControlledOnnOff onChange={setSwitchOn}/>{switchOn.toString()}

            <h1>ControlledOnnOff</h1>
            <OnnOff on={onnOffCollapsed}
                    setOnnOffCollapsed={() => setOnnOffCollapsed(!onnOffCollapsed)}/>


            <h1>UnControlledRating:</h1>
            {/*<UnConrolledRating/>*/}

            <h1>ConrolledRating:</h1>
            <Rating value={ratingValue}
                    onClick={setRatingValue}/>

            <h1>UnConrolledAccordion</h1>
            <UnControlledAccordion titleValue={"Menu"}/>


            <h1>ControlledAccorrdion</h1>
            {/* <Accordion titleValue={'Menu'}
                collapsed={accordionCollapsed}
                onChange={() => setAccordionCollapsed(!accordionCollapsed)}
            /> */}


        </div>

    )
}

type PagePropsTitle = {
    title: string
}

// let PageTitle = (props: PagePropsTitle) => {
//     console.log('Render AppTitle')
//     return (
//         <h1>{props.title}</h1>
//     )
// }


export default App;
