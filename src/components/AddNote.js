import React, { useContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import noteContext from '../context/noteContext'

const AddNote = (props) => {
    const navigate = useNavigate();
    useEffect(() => {
        if (localStorage.getItem('token')) {
            // getUser();
        } else {
            navigate('/login');
        }
        // eslint-disable-next-line
    }, [])
    const context = useContext(noteContext);
    const { addNote } = context;

    const [note, setNote] = useState({ title: "", description: "", tag: "" })


    const handleClick = (e) => {
        e.preventDefault();
        addNote(note.title, note.description, note.tag);
        setNote({ title: "", description: "", tag: "" })
        props.showAlert("Added successfully", "success")
    }

    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }

    // const [user, setUser] = useState([]);

    // const getUser = async () => {
    //     // API Call 
    //     const response = await fetch('http://localhost:5000/api/auth/getuser', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //             "auth-token": localStorage.getItem('token')
    //         }
    //     });
    //     const json = await response.json()
    //     setUser(json);
    // }

    return (
        <div className="container my-3">
            <h2>Add a Note</h2>
            <form className="my-3">
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" className="form-control" id="title" name="title" aria-describedby="emailHelp" value={note.title} onChange={onChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <input type="text" className="form-control" id="description" name="description" value={note.description} onChange={onChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="tag" className="form-label">Tag</label>
                    <input type="text" className="form-control" id="tag" name="tag" value={note.tag} onChange={onChange} />
                </div>
                <button disabled={note.title.length < 3 || note.description.length < 5} type="submit" className="btn btn-primary" onClick={handleClick}>Add Note</button>
            </form>
        </div>
    )
}

export default AddNote
