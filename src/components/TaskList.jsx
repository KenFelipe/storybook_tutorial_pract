import React from 'react'
import PropTypes from 'prop-types'

import Task from './Task'

export default function TaskList({ loading, tasks, onArchiveTask, onPinTask}) {
  const events = { onArchiveTask, onPinTask }
  if(loading) {
    return ( 
      <div className="list-items">
        {Array(6).fill(0).map((_, i) => (
          <div className="loading-item" key={i}>
            <span className="glow-checkbox" />
            <span className="glow-text">
              <span>Loading</span> <span>cool</span> <span>state</span>
            </span>
          </div>
        ))}
      </div>
    )
  }

  if(tasks.length === 0) {
    return (
      <div className="list-items">
        <div className="wrapper-message">
          <span className="icon-check" />
          <div className="title-message">You have no tasks</div>
          <div className="subtitle-message">Sit back and relax</div>
        </div>
      </div>
    )
  }

  const tasksOrdered = [
    ...tasks.filter(task => task.state === 'TASK_PINNED'),
    ...tasks.filter(task => task.state !== 'TASK_PINNED'),
  ]

  return (
    <div className="list-items">
      {tasksOrdered.map(task => (
        <Task 
          key={task.id}
          task={task}
          {...events}
        />
      ))}
    </div>
  )
}

TaskList.propTypes = {
 /** Checks if it's in loading state */
 loading: PropTypes.bool,
 /** The list of tasks */
 tasks: PropTypes.arrayOf(Task.propTypes.task).isRequired,
 /** Event to change the task to pinned */
 onPinTask: PropTypes.func,
 /** Event to change the task to archived */
 onArchiveTask: PropTypes.func,
};

TaskList.defaultProps = {
 loading: false,
};
