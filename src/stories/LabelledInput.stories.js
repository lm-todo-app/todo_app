import React from 'react';

import LabelledInput from '../components/Input.js';

export default {
  title: 'Labelled Input',
};

export const Email = () => (
  <LabelledInput labelValue={'Email'} type={'text'} />
);

export const Username = () => (
  <LabelledInput labelValue={'Username'}  type={'text'} />
);

export const Password = () => (
  <LabelledInput labelValue={'Password'}  type={'password'} />
);
