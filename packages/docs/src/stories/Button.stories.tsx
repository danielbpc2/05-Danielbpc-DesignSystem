import { StoryObj, Meta } from '@storybook/react'
import { Button, ButtonProps } from '@danielbpc-ui/react'
import { ArrowRight } from 'phosphor-react'
export default {
  title: 'Form/Button',
  component: Button,
  args: {
    children: 'Send',
    variant: 'primary',
    size: 'md',
    disabled: false,
  },
  argTypes: {
    onClick: {
      action: 'click',
    },
    variant: {
      options: ['primary', 'secondary', 'terciary'],
      control: 'inline-radio',
    },
    size: {
      options: ['sm', 'md'],
      control: 'inline-radio',
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
  },
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {}
export const Secondary: StoryObj<ButtonProps> = {
  args: {
    variant: 'secondary',
    children: 'Create new',
  },
}
export const Terciary: StoryObj<ButtonProps> = {
  args: {
    variant: 'terciary',
    children: 'Cancel',
  },
}
export const Small: StoryObj<ButtonProps> = {
  args: {
    size: 'sm',
  },
}
export const Disabled: StoryObj<ButtonProps> = {
  args: {
    disabled: true,
  },
}
export const WithIcon: StoryObj<ButtonProps> = {
  args: {
    children: (
      <>
        Next Step
        <ArrowRight />
      </>
    ),
  },
}
