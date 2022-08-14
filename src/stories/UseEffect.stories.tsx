import React, {useEffect, useState} from 'react'

export default {
    title: 'UseEffect demo'
}

export const SimpleExample = () => {
    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1)
    console.log('SimpleExample')

    useEffect(()=>{
        console.log('UseEffect called on every redraw')
        document.title = counter.toString()
    }) // будет срабатывать каждый раз когда компонента будет перерисовываться

    useEffect(()=>{
        console.log('Use effect will be called once when mounting the component(componentDidMount)')
        document.title = counter.toString()
    }, []) // вызовется при монтирований компоненты 1 раз

    useEffect(()=>{
        console.log('Use effect will be called when the value changes')
        document.title = counter.toString()
    }, [counter])

    return <>
        hello, {counter}
        <button onClick={()=>setCounter(counter + 1)}>Counter</button>
        <button onClick={()=>setFake(fake + 1)}>Counter</button>
        {counter}
    </>
}

export const SetTimeOutExample = () => {
    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1)
    console.log('SetTimeOutExample')

    // useEffect(()=>{
    //     console.log('Use effect will be called when the value changes')
    //     document.title = counter.toString()
    // })
    useEffect(()=>{
        // setTimeout(()=>{
        //     document.title = counter.toString()
        // }, 1000)
        setInterval(()=>{
            setCounter(state =>state + 1)
        }, 1000)
    }, [])



    return <>
        counter: {counter}, fake: {fake}
    </>
}