import React from "react";

export type RatingValueType = 0 | 1 | 2 | 3 | 4| 5

type RatingPropsType = {
    value: RatingValueType
    onClick: (value: RatingValueType)=> void

}

export function Rating({value, onClick}:RatingPropsType) {
    console.log('Render Rating')

    return (
        <div>
            <div>
                <Star selected={(value > 1)} onClick={onClick} value={1}/>
                <Star selected={(value > 2)} onClick={onClick} value={2}/>
                <Star selected={(value > 3)} onClick={onClick} value={3}/>
                <Star selected={(value > 4)} onClick={onClick} value={4}/>
                <Star selected={(value > 5)} onClick={onClick} value={5}/>
            </div>
        </div>
    )
}

type StarPropsType = {
    selected: boolean
    onClick: (value: RatingValueType)=> void
    value: RatingValueType
}

let Star = ({selected, onClick, value}:StarPropsType) => {
    console.log('Render Star')

    return <span onClick={() => onClick(value)}>
        {selected ? <b> star </b> : 'star '}
    </span>

}