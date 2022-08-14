import React, { ChangeEvent, useRef, useState } from 'react';
import { action } from '@storybook/addon-actions'
import './button.css';

export default {
  title: 'input'
}

export const UncontrolledInput = () => <input />

export const controlledInpet = () => <input value={'it-inkubaror'} />

export const TrackValueOfUncontrolledInput = () => {

  const [value, setValue] = useState('')

  return <><input onChange={(event) => {
    let actualVaelue = event.currentTarget.value
    setValue(actualVaelue)
  }} /> - {value} </>
}

export const GetValueOfUncontrolledInoutByButtonPress = () => {

  const [value, setValue] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

const save = () => {
  const el = inputRef.current as HTMLInputElement
  setValue(el.value)
}

  return <><input ref={inputRef} /> <button onClick={save}>save</button> - actual value: {value} </>
}

export const ControlledInput = () => {
  const [parentValue, setParentValue] = useState('')

  const changeState = (e: ChangeEvent<HTMLInputElement>) => {
    setParentValue(e.currentTarget.value)
  }

  return <input value={ parentValue } onChange={ changeState }/>  
}

export const ControlledCheckBox = () => {
  const [parentValue, setParentValue] = useState(true)

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setParentValue(e.currentTarget.checked)
  }

  return<input type={'checkbox'} checked={parentValue} onChange={onChange} /> 
}

export const ControlledSellect = () => {
  const [parentValue, setParentValue] = useState<string | undefined>(undefined)
    
    const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
      setParentValue(e.currentTarget.value)
    }

    return <select value={parentValue} onChange={onChange} >
      <option> none </option>
      <option value="1">Minsk</option>
      <option value="2">Kiev</option>
      <option value="3">Moscow</option>
    </select>
}