import React, {useState, KeyboardEvent, useEffect} from 'react';
import classes from './Select.module.css'

type ItemType = {
    title: string
    value: any
}

type SelectPropsType = {
    value: any
    onChange: (value: any) => void
    items: ItemType[]
}

export const Select = (props: SelectPropsType) => {

    const [active, setActive] = useState(false)
    const [hoveredElement, setHoveredElement] = useState(props.value)


    useEffect(()=>{
        setHoveredElement(props.value)
    }, [props.value])

    const toggleItems = () => setActive(!active)
    const onItemClick = (value: any) => {
        props.onChange(value);
        toggleItems()
    }

    const selectedItems = props.items.find(i => i.value === props.value)
    const hovoredItem = props.items.find(i => i.value === hoveredElement)


    const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
        if(e.key === 'ArrowDown' || e.key === 'ArrowUp'){
            for (let i = 0; i < props.items.length; i++) {
                if(props.items[i].value === hoveredElement){
                    const pretendentElement = e.key === 'ArrowDown' 
                    ? props.items[i+1]
                    : props.items[i-1]

                    if(pretendentElement) {
                        props.onChange(pretendentElement.value)
                        break;
                    }
                } 
            }
        } 
        if (e.key === 'Enter' || e.key === 'Escape'){
            setActive(false)
        }
    }
    return (
        <>
            <div className={classes.select}
                 onKeyUp={onKeyUp} tabIndex={0}>
                <span className={classes.main} onClick={toggleItems}>
                    {selectedItems && selectedItems.title}
                </span>
                {
                    active &&
                    <div className={classes.items}>
                        {props.items.map(i => <div
                            onMouseEnter={() => setHoveredElement(i.value)}
                            className={classes.item + ' ' + (hovoredItem === i ? classes.selected : '')}
                            key={i.value}
                            onClick={() => {
                                onItemClick(i.value)
                            }}
                        >{i.title}
                        </div>)}
                    </div>
                }
            </div>
        </>

    );
};

