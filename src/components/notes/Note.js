import React from 'react'
import { deleteNote } from '../../store/actions/noteAction'
import { useDispatch } from 'react-redux'
const Note = ({note}) => {
    const dispatch = useDispatch();
    const deleteHandler = () => {
        dispatch(deleteNote(note))
    }
    return (
        <div className="note white">
            <div className=" right-align">
                <i className="material-icons red-text" style={{cursor:'pointer'}}>favorite</i>
                <i className="material-icons " style={{cursor:'pointer'}} onClick={deleteHandler}>delete</i>
            </div>
            <h5 className="black-text center-align">{note.title}</h5>
            <p className="truncate center-align">{note.content}</p>
            <p className="grey-text center-align"> 2 days ago</p>
            <div className="right-align">
                <i className="material-icons black-text" style={{cursor:'pointer'}}>edit</i>
            </div>
        </div>
    )
}

export default Note
