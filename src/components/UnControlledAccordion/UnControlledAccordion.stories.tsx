import React, { useState } from 'react';
import { action } from '@storybook/addon-actions'
import UnControlledAccordion from './UnControlledAccordion';


export default {
    title: 'UnConrolledAccordion stories',
    component: UnControlledAccordion,
}

export const OnnMode = () => <UnControlledAccordion titleValue={'Menu'} /> 

export const ModeChanged = () => {
    return  <UnControlledAccordion titleValue={'Menu'} />
}