import React from 'react';
import text from '../Text';

import {Props} from './Homepage'

const Courses = (props: Props) => {
    return(
        <section>
            <h1>{text[props.language].courses.title}</h1>
            {text[props.language].courses.courses.map((course, key) => <div key={key}>
                <h2>{course.title}</h2>
                <p>{course.description}</p>
            </div>)}
        </section>
    )
}

export default Courses;