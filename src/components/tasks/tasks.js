import React from 'react';
import './tasks.css';

export class Tasks extends React.Component {

    constructor(props) {
        super(props);
        this.createList = this.createList.bind(this);
        this.deleteTask = this.deleteTask.bind(this);
    }

    deleteTask(key) {
        //calls parent delete function
        this.props.deleteTask(key);
    }

    editTask(key) {
        this.props.editTask(key);
    }

    editTaskStatus(key) {
        this.props.editTaskStatus(key);
    }

    createList(item) {
        let date = new Date(item.key).toLocaleString();
        return (
            <li key={item.key}
                className="clearfix">
                <span className="task-status"
                    onClick={() => { this.editTaskStatus(item.key); }}>
                    {
                        item.completed ?
                            <i className="fa fa-check-circle" aria-hidden="true"></i> :
                            <i className="fa fa-circle-thin" aria-hidden="true"></i>
                    }
                </span>
                <div className="task">
                    <h2 className={item.completed ? 'task-completed' : null}>{item.name}</h2>
                    <span>Date Added: {date}</span>
                </div>
                <button
                    className="remove-task"
                    onClick={() => {
                        if (window.confirm('Are you sure you wish to delete this item?')) {
                            this.deleteTask(item.key);
                        }
                    }
                    }>
                    <i className="fa fa-trash"></i>
                </button>
                <button
                    className="edit-task"
                    onClick={() => { this.editTask(item.key); }}>
                    <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
                </button>
            </li>
        );
    }

    render() {
        let tasksEntries = this.props.tasks;
        let taskItems = tasksEntries.map(this.createList);

        let output;
        if (taskItems.length > 0)
            output = <ul className="tasks">
                {taskItems}
            </ul>;
        else {
            output = <div className="empty-list">There is No Task In List</div>;
        }

        return (
           output
        );
    }
}