import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Card from './index'

export default {
  title: 'Card',
  component: Card
} as ComponentMeta<typeof Card>

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />

export const country = Template.bind({})
country.args = {
  countryName: 'Kuwait',
  population: 12345,
  region: 'Asia',
  cca3: 'KWT',
  svg: 'https://flagcdn.com/kw.svg',
  capital: ['Kuwait City']
}
