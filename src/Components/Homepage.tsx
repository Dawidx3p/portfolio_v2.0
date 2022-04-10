import React, { useState } from 'react';
import text from '../Text';
import Courses from './Courses';
import Footer from './Footer';
import Projects from './Projects';

export type Language = 'en'|'pl';
export type Props = {
    language: Language
}

const Homepage = () => {
    const [language, setLanguage] = useState<Language>('pl')
    return (
        <>
            <header>
                <section>
                    <button className={language==='pl' ? 'active' : ''} onClick={() => setLanguage('pl')}>PL</button>
                    <button className={language==='en' ? 'active' : ''} onClick={() => setLanguage('en')}>EN</button>
                    <h1>DAWID DĘBIEC</h1>
                    <p>{text[language].header.presentation}</p>
                    <p>{text[language].header.shortIntro}</p>
                    <a className='header-link' href="/" onClick={(e) => {
                        e.preventDefault();
                        document.querySelector('main')?.scrollIntoView({behavior: 'smooth'})
                    }}>Zobacz Więcej</a>
                </section>
            </header>
            <main>
                <Courses language={language}/>
                <Projects language={language}/>
                <section className='about'>
                <h2>{text[language].about.title}</h2>
                <p>{text[language].about.description}</p>
                </section>
            </main>
            <Footer language={language}/>
        </>
    )
}

export default Homepage;