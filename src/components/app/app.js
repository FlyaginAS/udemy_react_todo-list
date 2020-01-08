import  React, {Component} from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import './app.css';
import  ItemAddForm from '../item-add-form';

export default class App extends  Component{
    maxId=100;
    state={
        todoData : [
            { label: 'Drink Coffee', important: false, id: 1 },
            { label: 'Make Awesome App', important: true, id: 2 },
            { label: 'Have a lunch', important: false, id: 3 }
        ],
    };

    deleteItem= (id)=>{
        this.setState(({todoData})=>{
            const idx=todoData.findIndex((el)=> el.id===id);
            let arrCopy=todoData.slice();
            arrCopy.splice(idx, 1);
            return {
                todoData: arrCopy,
            }
        });
    };
    addItem = (text)=>{
        const newItem = {
            label: text,
            important: false,
            id: this.maxId++,
        };
        this.setState(({todoData})=>{
            let arrCopy = todoData.slice();
            arrCopy.push(newItem);
            return {todoData: arrCopy};
        })
    };
    onToggleImportant = (id)=>{
        console.log(`Toggle important >> ${id}`);
    };
    onToggleDone = (id)=>{
        console.log(`Toggle done >> ${id}`);
    };
    render(){
        return (
            <div className="todo-app">
                <AppHeader toDo={1} done={3} />
                <div className="top-panel d-flex">
                    <SearchPanel />
                    <ItemStatusFilter />
                </div>

                <TodoList
                    todos={this.state.todoData}
                    onDeleted={this.deleteItem}
                    onToggleImportant={this.onToggleImportant}
                    onToggleDone={this.onToggleDone}/>
                <ItemAddForm onItemAdded={this.addItem}/>
            </div>
        );
    }
};
