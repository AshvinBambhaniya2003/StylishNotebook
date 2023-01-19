import React, { useContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import noteContext from '../context/noteContext'

const AddNote = (props) => {
    const navigate = useNavigate();
    useEffect(() => {
        if (localStorage.getItem('token')) {
            getUser();
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

    const [user, setUser] = useState([]);

    const getUser = async () => {
        // API Call 
        const response = await fetch('http://localhost:5000/api/auth/getuser', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": localStorage.getItem('token')
            }
        });
        const json = await response.json()
        setUser(json);
    }

    return (
        <div className="container my-3">
            <div style={{ display: "flex", color: "white", padding: "inherit", borderRadius: "15px", justifyContent: "center" }}>
                <h2 style={{ marginTop: "2px" }}>Welcome In NoteBook Dear
                    <button style={{ background: "none", color: "white", border: "none" }} className="btn btn-light" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample" aria-expanded="false" aria-controls="collapseWidthExample">
                        <h3 id='user' >{user.name}</h3>
                    </button></h2>
                <div className="collapse collapse-horizontal" id="collapseWidthExample">
                    <div className="card card-body" style={{ width: "300px", position: "fixed" }}>
                        <div className="card" >
                            <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" className="card-img-top" alt="..." />
                            {/* <div className="card-body">
                                <h5 style={{ color: "black" }} className="card-title">Card title</h5>
                                <p style={{ color: "black" }} className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div> */}
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">Name: {user.name}</li>
                                <li className="list-group-item">email: {user.email}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <form style={{ color: "white" }} className="my-3">
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input style={{ background: "rgb(232, 240, 254)" }} type="text" className="form-control" id="title" name="title" aria-describedby="emailHelp" value={note.title} onChange={onChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <input style={{ background: "rgb(232, 240, 254)" }} type="text" className="form-control" id="description" name="description" value={note.description} onChange={onChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="tag" className="form-label">Tag</label>
                    <input style={{ background: "rgb(232, 240, 254)" }} type="text" className="form-control" id="tag" name="tag" value={note.tag} onChange={onChange} />
                </div>
                <button disabled={note.title.length < 3 || note.description.length < 5} type="submit" className="btn btn-primary" onClick={handleClick}>Add Note</button>
            </form>
        </div>
    )
}

export default AddNote
