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
                <i className="material-icons black-text" style={{cursor:'pointer'}}>edit</i>
            </div>
        </div>
    )
}

export default Note
