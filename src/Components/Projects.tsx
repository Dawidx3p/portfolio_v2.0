import React from 'react';
import text from '../Text';
import { Props } from './Homepage';

const Projects = (props:Props) => {
    return(
        <section>
            <h1>{props.language==='en' ? 'Projects': 'Projekty'}</h1>
            {text[props.language].projects.map((project, key) => <div key={key} className="project">
                <b>{project.name}</b><br/>
                <ul>
                    {project.technologies.map((technology, key) => <li key={key}>{technology}</li>)}
                </ul>
                {project.links.map(( link, key) => <a target="_blank" rel="noopener noreferrer external" href={link.url} key={key}>{link.name}</a>)}
            </div>)}
            <a target="_blank" rel="noopener noreferrer external" href="https://github.com/Dawidx3p">{props.language==='pl' ? 'Mój Github' :'My GitHub'}</a>
        </section>
    )
}

export default Projects;