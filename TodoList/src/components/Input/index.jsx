import React from 'react';
import { nanoid } from 'nanoid'

export default function Input(props) {
    const { lists } = props


    function handleCompleteAllList(e) {
        props.completeAllList(e.target.checked)
    }


    function handleAdd(e) {
        const { keyCode, target } = e
        if (keyCode !== 13) return
        const list =
        {
            id: nanoid(),
            text: target.value,
            finished: false,
            show: true,
            editing: false
        }
        props.addList(list)
        target.value = ''
    }


    return (
        <div className='header'>
            <h1>todos</h1>
            <input onKeyUp={handleAdd} className="new-todo" placeholder="What needs to be done?" autoFocus></input>
            <section style={{ display: lists.length ? 'block' : 'none' }} className='main'>
                <input onClick={handleCompleteAllList} id='toggle-all' className='toggle-all' type='checkbox' />
                <label htmlFor="toggle-all"></label>
            </section>
        </div>

    )
}