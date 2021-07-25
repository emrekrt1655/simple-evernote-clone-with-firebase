import React from 'react'
import { useParams } from 'react-router'
import { useSelector } from 'react-redux'
import { useFirestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase'
import moment from 'moment'
const NotesDetail = (props) => {
    const { id } = useParams()
    useFirestoreConnect(([{ collection: 'notes', doc: id }]));
    const note = useSelector(({ firestore: { data } }) => data.notes && data.notes[id])

    const Markup = !isLoaded(note) ? (<div className="container section">
        <div className="card z-depth-0">
            <div className="card-content">
                <span className="card-title"> Notes are Loading... </span>
            </div>
            <div className="card-action grey lighten-4 grey-text">
            </div>
        </div>
    </div>) : isEmpty(note) ? (<div className="container section">
        <div className="card z-depth-0">
            <div className="card-content">
                <span className="card-title"> There is no content </span>

            </div>
            <div className="card-action grey lighten-4 grey-text">
            </div>
        </div>
    </div>) : (<div className="container section">
        <div className="card z-depth-0">
            <div className="card-content">
                <span className="card-title"> {note?.title} </span>
                <p>{note?.content}</p>
            </div>
            <div className="card-action grey lighten-4 grey-text">
                <div>
                    {moment(note?.createdAt.toDate()).calendar()}
                </div>
            </div>
        </div>
    </div>)



    return Markup
}

export default NotesDetail
