import { render } from '@testing-library/react'
import { composeStories } from '@storybook/testing-react'

import * as TaskListStories from './TaskList.stories'

const { WithPinnedTasks } = composeStories(TaskListStories)

it('render pinned task at the top of the list', () => {
  const { container } = render(<WithPinnedTasks />)

  expect(
    container.querySelector('.list-item:nth-child(1) input[value="Task 5 (pinned)"]'
  )).toBeInTheDocument()

  expect(
    container.querySelector('.list-item:nth-child(2) input[value="Task 6 (pinned)"]'
  )).toBeInTheDocument()
})