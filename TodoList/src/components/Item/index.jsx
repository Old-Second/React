import React from 'react';

export default function Item(props) {
    const { text, id, finished, editing, show } = props;


    function handleCompleted(id) {
        return (e) => {
            props.completeList(id, e.target.checked)
        }
    }


    function handleDelete(id) {
        props.deleteList(id)
    }


    function startEdit(id) {
        props.startEditList(id)
    }

    function finishEdit(id) {
        return (e) => {
            const { keyCode, target, type } = e
            if (type === 'keyup') {
                if (keyCode === 13)
                    props.finishEditList(id, target.value)
            }
            if (type === 'blur')
                props.finishEditList(id, target.value)
        }
    }


    return (
        <ul className="todo-list">
            <li onBlur={finishEdit(id)} onKeyUp={finishEdit(id)} className={editing ? 'editing' : finished ? 'completed' : ''} style={{ display: show ? 'block' : 'none' }} >
                <div onDoubleClick={() => startEdit(id)} className='view'>
                    <input className='toggle' type='checkbox' onChange={handleCompleted(id)} checked={finished} />
                    <label>{text}</label>
                    <button onClick={() => handleDelete(id)} className='destroy'></button>
                </div>
                <input className='edit' />
            </li>
        </ul>
    )
}