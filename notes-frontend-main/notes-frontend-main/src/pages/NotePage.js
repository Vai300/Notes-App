import { useParams, Link } from "react-router-dom";
import React, {useState, useEffect} from 'react';
import {ReactComponent as ArrowLeft} from '../assets/arrow-left.svg';
// const axios = require('axios').default;

// const fetch = require('node-fetch');


const NotePage = ({history}) => {
    let params = useParams();
    let noteId = params.id;

    let [note, setNote] = useState(null);

    useEffect(() =>{
        getNote();
        // eslint-disable-next-line
    },[noteId])

    let getNote = async () => {
        if(noteId === 'new') return;
        let response = await fetch(`https://blooming-sierra-19033.herokuapp.com/api/notes/${noteId}`);
        let data = await response.json();
        setNote(data);

        // axios.get(`/api/notes/${noteId}`)
        // .then(function (response) {
        //     let data = response.json();
        //     setNote(data);
        // })
        // .catch(function (error) {
        //     console.log(error);
        // })

        // const response = await axios.get(`/api/notes/${noteId}`);
        // let data = await response.json();
        // setNote(data);
    }

    let createNote = async () => {
        fetch(`https://blooming-sierra-19033.herokuapp.com/api/notes/create/`,
        {
            method : "POST",
            headers: {
                'Content-type' : 'application/json'
            },
            body:JSON.stringify(note)
        });
    }

    let updateNote = async () => {
        fetch(`https://blooming-sierra-19033.herokuapp.com/api/notes/${noteId}/update/`,
        {
            method : "PUT",
            headers: {
                'Content-type' : 'application/json'
            },
            body:JSON.stringify(note)
        });
    }

    let deleteNote = async () => {
        fetch(`https://blooming-sierra-19033.herokuapp.com/api/notes/${noteId}/delete/`,
        {
            method : "DELETE",
            headers: {
                'Content-type' : 'application/json'
        }} 
        );
    }

    function handleSubmit(){
        if(noteId !== 'new' && !note.body){
            deleteNote();
        } else if(noteId !== 'new'){
            updateNote();
        }
    }

    function handleChange(event){
        const updatedText = event.target.value;
        setNote({
            ...note,
            "body": updatedText
        })
    }

    return (
        <div className="note">
            <div className="note-header">
                <h3>
                    <Link to='/'>
                        <ArrowLeft onClick={handleSubmit}/>
                    </Link>     
                </h3>
                <Link to='/'>
                    {noteId !== 'new' ? (
                        <button onClick={deleteNote}>Delete</button>
                    ) : (
                        <button onClick={createNote}>Done</button>
                    )}
                </Link>
            </div>
            <textarea onChange={handleChange} defaultValue={note?.body}></textarea>
        </div>
    )
}

export default NotePage