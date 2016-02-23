import React from 'react';
import { Code, GoTo, Markdown } from 'react-slides';

const md = '# This is a header\n\nAnd this is a paragraph';

const code = `const a = 5;
const b = 10;

const c = {
    x: a,
    y: b
};

const d = [c, c];

const { x, y } = c;

const f = () => d;

console.log(a, b, c, d, f());`;

export default {
    content: (
        <div>

            <Markdown source={md} />

            <Code value={code} />

            <GoTo slide={0} />

        </div>
    ),
    notes: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    ]
};
