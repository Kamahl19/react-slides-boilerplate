import React from 'react';
import { render } from 'react-dom';
import { ReactSlides } from 'react-slides';
import slides from './slides';

import './styles.less';

render(
    <ReactSlides slides={slides} />,
    document.getElementById('root')
);
