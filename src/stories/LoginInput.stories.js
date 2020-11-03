import React from 'react';

import {DefaultInput, ErrorInput, RequiredInput} from './Input.stories.js';

export default {
  title: 'Login Input',
};

export const EmailInput = () => (
  <RequiredInput
    labelValue={'Email'}
    type={'text'}
    name={'email'}
  />
);

export const EmailErrorInput = () => (
  <ErrorInput
    labelValue={'Email'}
    type={'text'}
    name={'email'}
  />
);

export const UsernameInput = () => (
  <DefaultInput
    labelValue={'Username'}
    type={'text'}
    name={'username'}
  />
);

export const PasswordInput = () => (
  <DefaultInput
    labelValue={'Password'}
    type={'password'}
    name={'password'}
  />
);
