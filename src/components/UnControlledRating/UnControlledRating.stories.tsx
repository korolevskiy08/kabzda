import React from 'react';
import { action } from '@storybook/addon-actions'
import { UnConrolledRating } from './UnConrolledRating';

export default {
    title: 'UnConrolledRating stories',
    component: UnConrolledRating,
}

const callback = action('Rating changed')

export const EmptyStars = () => <UnConrolledRating defaultValue={0} onChange={callback}/>
export const Rating1 = () => <UnConrolledRating defaultValue={1} onChange={callback}/>
export const Rating2 = () => <UnConrolledRating defaultValue={2} onChange={callback}/>
export const Rating3 = () => <UnConrolledRating defaultValue={3} onChange={callback}/>
export const Rating4 = () => <UnConrolledRating defaultValue={4} onChange={callback}/>
export const Rating5= () => <UnConrolledRating defaultValue={5} onChange={callback}/>
