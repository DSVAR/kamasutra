import { render, screen } from '@testing-library/react';
import App from './App';
import MainApp from "./App";
import React from "react";
import {unmountComponentAtNode} from "react-dom";

it('renders learn react link', () => {
  const div=document.createElement('div')
  render(<MainApp />,div);
  unmountComponentAtNode(div);
});
