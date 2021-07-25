import React from 'react'
import useInput from '../../customHooks/useInput'
import { useSelector, useDispatch } from 'react-redux'
import { editNote } from '../../store/actions/noteAction'
import { useHistory } from 'react-router'


const EditForm = () => {
    const note = useSelector((state) => state.note)
    const [title, bindTitle, resetTitle] = useInput(note.title);
    const [content, bindContent, resetContent] = useInput(note.content);
    const dispatch = useDispatch();
    const history = useHistory()
    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(editNote({id: note.id, title, content}))
        resetContent()
        resetTitle()
        history.push('/')
    }
    return (
        <div className="sections">
            <form onSubmit={submitHandler} className="white">
                <h5 className="grey-text text-darken-3">Edit Note</h5>

                <div className="input-field ">
                    <input id="note_title" type="text" className="validate" {...bindTitle} />
                    <label className="active" htmlFor="note_title">
                        Note Title
                    </label>
                </div>
                <div className="input-field">
                    <textarea id="note_content" className="materialize-textarea" {...bindContent}></textarea>
                    <label className='active' htmlFor="note_content">Note Content</label>
                </div>
                <button className="btn green" >
                    Update
                </button>
            </form>
        </div>
    )
}

export default EditForm
