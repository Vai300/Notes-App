import React, {useState, useEffect} from 'react';
import ListItem from '../components/ListItem';
import AddButton from '../components/AddButton';

// const fetch = require('node-fetch');
// const axios = require('axios');

const NotesListPage = () => {
  
    let [notes, setNotes] = useState([]);
    useEffect(() => {
        getNotes()
    }, [])

    let getNotes = async () => {
        let response = await fetch("https://blooming-sierra-19033.herokuapp.com/api/notes/");
        let data = await response.json();
        setNotes(data);
    
        // try {
        //     const response = await axios.get("/api/notes/");
        //     let data = await response.json();
        //     setNotes(data);
        //   } catch (error) {
        //     console.error(error);
        // }
    }

    return (
    <div className='notes'>
        <div className='notes-header'>
            <h2 className='notes-title'>&#9782; Notes</h2>
            <p className='notes-count'>{notes.length}</p>
        </div>
        <div className='notes-list'>
            {notes.map((note, index) => (
                <ListItem key={index} note={note}/>
            ))}
        </div>
        <AddButton />
    </div>
  )
}

export default NotesListPage;