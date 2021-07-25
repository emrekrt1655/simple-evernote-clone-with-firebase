import React from 'react'
import { deleteNote, toggleFav } from '../../store/actions/noteAction'
import { useDispatch } from 'react-redux'
import {Link} from 'react-router-dom'
import moment from 'moment'

const Note = ({note}) => {
    const dispatch = useDispatch();
    const deleteHandler = () => {
        dispatch(deleteNote(note))
    }
    const toggleFavHandler = () => {
        dispatch(toggleFav(note))
    }

    const editNoteHanler = () => {
        dispatch({type:'EDIT_NOTE', payload: note})
    }
    
    const favMarkup = note.favorite ? 'favorite' : 'favorite_border'
    

    return (
        <div className="note white">
            <div className=" right-align">
                <i className="material-icons red-text" style={{cursor:'pointer'}} onClick={toggleFavHandler}>{favMarkup}</i>
                <i className="material-icons " style={{cursor:'pointer'}} onClick={deleteHandler}>delete</i>
            </div>
            <Link to={'/detail/' + note.id}>
                <h5 className="black-text center-align">{note.title}</h5>
            </Link>
            <p className="truncate center-align">{note.content}</p>
            <p className="grey-text center-align"> {moment(note.createdAt.toDate()).fromNow()} </p>
            <div className="right-align">
                <Link to={`/edit_note/${note.id}`}>
                    <i className="material-icons black-text" onClick={editNoteHanler} style={{cursor:'pointer'}}>edit</i>    
                </Link>
            </div>
        </div>
    )
}

export default Note
