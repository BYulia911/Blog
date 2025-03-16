import classes from './Home.module.css';
import React from 'react';
import { notes } from "/src/notes.js";
import Header from '/src/Components/Header/Header';
import NoteContainer from '/src/Components/NoteContainer/NoteContainer';
import Footer from '../../Components/Footer/Footer';

function Home() {
    return (
        <>
            <Header />
            <main className={classes.containerAllNotes}>
                {notes.map(note => 
                    <NoteContainer key={note.name} {...note} className={classes.note} />
                )}
            </main>
            <Footer />
        </>
    );
}

export default Home;
