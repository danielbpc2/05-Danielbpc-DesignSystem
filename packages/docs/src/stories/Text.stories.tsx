import { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@danielbpc-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus doloribus maiores quam eaque, iusto beatae minima. Ad, animi! Nemo labore maiores iure. Sint eaque neque velit! Qui iusto delectus rerum?',
    size: 'md',
  },
  argTypes: {
    size: {
      options: [
        'xxs',
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        '2xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        '8xl',
        '9xl',
      ],
      control: 'inline-radio',
    },
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong Text',
    as: 'strong',
  },
}
