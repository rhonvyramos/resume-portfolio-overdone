import React from 'react';
import { CSSTransition } from 'react-transition-group';
import './index.css';

const FadeIn = ({ children, inProp }) => (
  <CSSTransition
    in={inProp}
    appear
    timeout={1000}
    classNames="fade"
  >
    {children}
  </CSSTransition>
);

export default FadeIn;