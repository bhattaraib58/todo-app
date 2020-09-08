import React from 'react';
import { Tasks } from '../tasks/tasks';
import './todoApp.css';

export class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      categoryFiltered: [],
      searchFiltered: [],
      currentTask: null,
      isSearching: false,
      searchCategory: 'all'
    };

    // later in form will be referenced
    this._inputElement = null;

    // handle scoping of this
    this.addTasks = this.addTasks.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.editTaskStatus = this.editTaskStatus.bind(this);
    this.editTask = this.editTask.bind(this);
    this.handleTaskCategoryClick = this.handleTaskCategoryClick.bind(this);
    this.searchInputData = this.searchInputData.bind(this);
    this.getTasksToDisplay = this.getTasksToDisplay.bind(this);
  }

  addTasks(taskName) {
    const tasks = this.state.tasks.slice(0);

    const task = {
      name: taskName,
      key: Date.now(),
      completed: false
    };

    this.setState(
      {
        tasks: tasks.concat(task)
      },
      this.handleTaskCategoryClick
    );
  }

  deleteTask(key) {
    const filteredTasks = this.state.tasks.filter((task) => {
      return task.key !== key;
    });

    this.setState(
      {
        tasks: filteredTasks
      },
      this.handleTaskCategoryClick
    );
  }

  editTaskStatus(key) {
    const tasks = this.state.tasks.map((task) => {
      if (task.key === key) {
        task.completed = !task.completed;
      }

      return task;
    });

    this.setState(
      {
        tasks: tasks
      },
      this.handleTaskCategoryClick
    );
  }

  editTask(key) {
    const currentTask = this.state.tasks.find((task) => {
      return task.key === key;
    });

    this.setState({
      currentTask: currentTask
    });

    this._inputElement.value = currentTask.name;
  }

  addEditedTask(taskName) {
    const updatedTask = {
      name: taskName,
      key: this.state.currentTask.key,
      completed: this.state.currentTask.completed
    };

    const filteredTasks = this.state.tasks.map((task) => {
      if (task.key === updatedTask.key) {
        return updatedTask;
      } else {
        return task;
      }
    });

    this.setState(
      {
        currentTask: null,
        tasks: filteredTasks
      },
      this.handleTaskCategoryClick
    );
  }

  searchInputData() {
    const regex = new RegExp(this.props.inputSearchData, 'i');
    const searchFiltered = this.state.categoryFiltered.filter((task) => {
      return regex.test(task.name);
    });
    const isSearching = this.props.inputSearchData.length > 0 ? true : false;

    this.setState({
      searchFiltered: searchFiltered,
      isSearching: isSearching
    });
  }

  handleTaskCategoryClick(completedStatus) {
    let searchCategory = null;

    if (completedStatus === undefined) {
      searchCategory = 'all';
    }
    if (completedStatus === false) {
      searchCategory = 'pending';
    }
    if (completedStatus === true) {
      searchCategory = 'completed';
    }

    const categoryFiltered = this.state.tasks.filter((task) => {
      if (completedStatus === undefined) {
        return task;
      }

      return completedStatus === task.completed;
    });

    this.setState(
      {
        categoryFiltered: categoryFiltered,
        searchCategory: searchCategory
      },
      this.searchInputData
    );
  }

  getTasksToDisplay() {
    if (this.state.isSearching) {
      return this.state.searchFiltered;
    }

    return this.state.categoryFiltered;
  }

  handleSubmit(event) {
    // prevent reloading
    event.preventDefault();

    // only take input if there is no whitespace
    if (/\S/.test(this._inputElement.value)) {
      if (this.state.currentTask) {
        this.addEditedTask(this._inputElement.value);
      } else {
        this.addTasks(this._inputElement.value);
      }
      this._inputElement.value = '';
    }
  }

  render() {
    return (
      <>
        <div className="page-content task-content">
          <form onSubmit={this.handleSubmit} className="clearfix">
            <input
              type="text"
              placeholder={this.state.currentTask ? 'Update Task' : 'Enter Task'}
              ref={(a) => (this._inputElement = a)}
            />
            <button type="submit">
              {this.state.currentTask ? (
                <i className="fa fa-pencil" aria-hidden="true"></i>
              ) : (
                <i className="fa fa-plus-circle" aria-hidden="true"></i>
              )}
            </button>
          </form>

          <div className="task-tab clearfix">
            <button
              className={this.state.searchCategory.startsWith('all') ? 'active' : null}
              onClick={() => this.handleTaskCategoryClick()}
            >
              All Tasks
            </button>
            <button
              className={this.state.searchCategory.startsWith('pending') ? 'active' : null}
              onClick={() => this.handleTaskCategoryClick(false)}
            >
              Pending
            </button>
            <button
              className={this.state.searchCategory.startsWith('completed') ? 'active' : null}
              onClick={() => this.handleTaskCategoryClick(true)}
            >
              Completed
            </button>
          </div>

          <Tasks
            tasks={this.getTasksToDisplay()}
            editTaskStatus={this.editTaskStatus}
            deleteTask={this.deleteTask}
            editTask={this.editTask}
          />
        </div>
      </>
    );
  }
}
