import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Button from './index'

export default {
  title: 'Example/Button',
  component: Button
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Primary = Template.bind({})

Primary.args = {
  primary: true,
  label: 'Button',
  width: '200px',
  height: '55px'
}
