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
    value={props.value}
    onChange={props.onChange}
  />
)

export const ErrorInput = (props) => (
  <Input
    error={"true"}
    labelValue={props.labelValue}
    type={props.type}
    name={props.name}
    value={props.value}
    onChange={props.onChange}
  />
)

export const RequiredInput = (props) => (
  <Input
    labelValue={'*'+ props.labelValue}
    type={props.type}
    name={props.name}
    value={props.value}
    onChange={props.onChange}
  />
)
