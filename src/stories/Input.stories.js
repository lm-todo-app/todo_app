import React from 'react';

import Input from '../components/Input.js';

export default {
  title: 'Input',
};

export const DefaultInput = (props) => (
  <Input
    labelValue={props.labelValue}
    type={props.type}
    name={props.name}
  />
)

export const ErrorInput = (props) => (
  <Input
    labelValue={props.labelValue}
    type={props.type}
    name={props.name}
    error={"true"}
  />
)

export const RequiredInput = (props) => (
  <Input
    labelValue={'*'+ props.labelValue}
    type={props.type}
    name={props.name}
  />
)
