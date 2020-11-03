import React from 'react';

import {DefaultInput, ErrorInput, RequiredInput} from './Input.stories.js';

export default {
  title: 'Landing/Login Input',
};

export const EmailInput = (props) => (
  <RequiredInput
    labelValue={'Email'}
    type={'text'}
    name={'email'}
    value={props.value}
    onChange={props.onChange}
  />
);

export const EmailErrorInput = (props) => (
  <ErrorInput
    labelValue={'Email'}
    type={'text'}
    name={'email'}
    value={props.value}
    onChange={props.onChange}
  />
);

export const UsernameInput = (props) => (
  <DefaultInput
    labelValue={'Username'}
    type={'text'}
    name={'username'}
    value={props.value}
    onChange={props.onChange}
  />
);

export const PasswordInput = (props) => (
  <DefaultInput
    labelValue={'Password'}
    type={'password'}
    name={'password'}
    value={props.value}
    onChange={props.onChange}
  />
);
