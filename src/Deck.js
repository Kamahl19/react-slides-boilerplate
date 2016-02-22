import React, { Component } from 'react';
import { ReactSlides } from 'react-slides';
import slides from './slides';

export default class Deck extends Component {
    render() {
        return (
            <ReactSlides slides={slides} />
        );
    }
}
