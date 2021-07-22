import React from "react";
import useInput from '../../customHooks/useInput'
const Form = () => {
    const [title, bindTitle, resetTitle] = useInput();
    const [content, bindContent, resetContent] = useInput();
    const submitHandler = (e) => {
        e.preventDefault();
        console.log(`title, content`, { title, content })
        resetContent()
        resetTitle()
    }
    return (
        <div className="sections">
            <form onSubmit={submitHandler} className="white">
                <h5 className="grey-text text-darken-3">New Note</h5>

                <div className="input-field ">
                    <input id="note_title" type="text" className="validate" {...bindTitle} />
                    <label className="active" htmlFor="note_title">
                        Note Title
                    </label>
                </div>
                <div className="input-field">
                    <textarea id="note_content" className="materialize-textarea" {...bindContent}></textarea>
                    <label htmlFor="note_content">Note Content</label>
                </div>
                <button className="btn green" >
                    Add
                </button>
            </form>
        </div>
    );
};

export default Form;
