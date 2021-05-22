// import React from 'react'
// import { Task } from './Task'
import Task from './Task'

/* eslint-disable import/no-anonymous-default-export */
export default {
  component: Task,
  title: 'Task'
}

const Template = taskArgs => <Task {...taskArgs} />

export const Default = Template.bind({})
Default.args = {
  task: {
      id: '1',
      title: 'Task',
      state: 'TASK_INBOX',
      updatedAt: new Date(2021, 0, 1, 9, 0),
  }, 
}

export const Archived = Template.bind({})
Archived.args = {
  task: {
    ...Default.args.task,
    state: 'TASK_ARCHIVED'
  }, 
}

export const Pinned = Template.bind({})
Pinned.args = {
  task: {
    ...Default.args.task,
    state: 'TASK_PINNED'
  }, 
}

// const Template = taskArgs => () => <Task {...taskArgs} />

// const defaultTeskArgs = {
//   id: '1',
//   title: 'Test Task',
//   state: 'TASK_INBOX',
//   updatedAt: new Date(2021, 0, 1, 9, 0),
// }

// export const Default = Template.bind({})({
//   task: {
//     ...defaultTeskArgs,
//     title: 'Test'
//   }, 
// })

// export const Archived = Template.bind({})({
//   task: {
//     ...defaultTeskArgs,
//     state: 'TASK_ARCHIVED'
//   }, 
// })

// export const Pinned = Template.bind({})({
//   task: {
//     ...defaultTeskArgs,
//     state: 'TASK_PINNED'
//   }, 
// })
