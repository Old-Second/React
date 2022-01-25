import React, { useState } from 'react'
import Input from './components/Input'
import List from './components/List'
import Filter from './components/Filter'
import './App.css'
import { nanoid } from 'nanoid'


export default function App() {
    const [lists, setList] = useState([
        {
            id: nanoid(),
            text: '吃饭',
            finished: true,
            show: true
        },
        {
            id: nanoid(),
            text: '睡觉',
            finished: false,
            show: true
        },
        {
            id: nanoid(),
            text: '打游戏',
            finished: true,
            show: true
        }
    ])


    function changeList(newList) {
        setList(newList)
    }


    function addList(list) {
        const newList = [...lists, list]
        changeList(newList)
    }


    function deleteList(id) {
        const newList = lists.filter(list => list.id !== id)
        changeList(newList)
    }


    function startEditList(id) {
        const newList = lists.map(list => {
            if (id === list.id) {
                list.editing = true
            }
            return list
        })
        changeList(newList)
    }

    function finishEditList(id, text) {
        const newList = lists.map(list => {
            if (list.id === id) {
                list.text = text
                list.editing = false
                return list
            } else {
                return list
            }
        })
        changeList(newList)
    }


    function completeList(id, finished) {
        const newList = lists.map(list => {
            if (list.id === id)
                return { ...list, finished }
            else
                return list
        })
        changeList(newList)
    }


    function completeAllList(finished) {
        const newList = lists.map(list => {
            return { ...list, finished }
        })
        changeList(newList)
    }


    function clearCompletedList() {
        const newList = lists.filter(list => list.finished !== true)
        changeList(newList)
    }


    function selectAll() {
        const newList = lists.map(list => {
            list.show = true
            return list
        })
        changeList(newList)
    }

    function selectCompleted() {
        const newList = lists.map(list => {
            if (list.finished === true) {
                list.show = true
                return list
            } else if (list.finished === false) {
                list.show = false
                return list
            } else {
                return list
            }
        })
        changeList(newList)
    }

    function selectActive() {
        const newList = lists.map(list => {
            if (list.finished === true) {
                list.show = false
                return list
            } else if (list.finished === false) {
                list.show = true
                return list
            } else {
                return list
            }
        })
        changeList(newList)
    }


    return (
        <div>
            <div className="todoapp">
                <Input lists={lists} addList={addList} completeAllList={completeAllList} />
                <List lists={lists} deleteList={deleteList} completeList={completeList} startEditList={startEditList} finishEditList={finishEditList} />
                <Filter lists={lists} clearCompletedList={clearCompletedList} selectAll={selectAll} selectActive={selectActive} selectCompleted={selectCompleted} />
            </div>
        </div>
    )
}
