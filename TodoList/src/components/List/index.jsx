import React from 'react';
import Item from '../Item';

export default function List(props) {
    const { lists, deleteList, completeList, startEditList, finishEditListtodos } = props;


    return (
        <div style={{ display: 'block' }} className="main">
            {lists.map(list => <Item key={list.id} {...list} deleteList={deleteList} completeList={completeList} startEditList={startEditList} finishEditListtodos={finishEditListtodos} />)}
        </div>
    )
}