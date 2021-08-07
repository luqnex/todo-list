import React, { useState } from 'react'
import './TodoList.css'

export function TodoList() {
    
    //Cria o estado para salvar o input
    const [task, setTask] = useState('')
    
    //Capturar o input do usuario
    function handleInputTask(event) {
        const inputTask = event.target.value
        
        setTask(inputTask)
    }
    
    const [itemsList, setItemsList] = useState([])
    
    //Funcao que adiciona um item na lista
    function addItem(event) {
        event.preventDefault()
        setItemsList([...itemsList, task])
        
        setTask('')
    }
    
    return (
        <div className="todo-wrapper">
            <div className="content">
                <h1>Todo List</h1>
                    <div className="list">
                        <form >
                            <input type="text" placeholder="Adicione uma tarefa" onChange={handleInputTask} value={task} />
                            <button type="submit" onClick={addItem}>Adicionar</button>
                        </form>
                
                        <ul className="todo-list" >
                            {itemsList.map(item => 
                                <li>{item}</li>
                            )}
                        </ul>
                    </div>
            </div>
        </div>
    )
}