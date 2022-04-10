import React from 'react';
import text from '../Text';

import { Props } from './Homepage';

const Footer = (props: Props) => {
    return (
        <footer>
            <h1>{text[props.language].footer.title}</h1>
            {text[props.language].footer.links.map((link, key) => <a key={key} target="_blank" rel="noopener noreferrer external" href={link.url}>{link.name}</a>)}
        </footer>
    )
}

export default Footer;