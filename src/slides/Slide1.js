import React from 'react';
import { Link, Icon } from 'react-slides';

export default {
    content: (
        <div>

            <h1>Welcome</h1>

            <ul>
                <li>This is a link <Link href="http://google.com" /></li>
                <li>This is another link <Link href="http://google.com">Google.com</Link></li>
                <li>This is an icon <Icon name="camera" /></li>
            </ul>

        </div>
    ),
    notes: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    ]
};
