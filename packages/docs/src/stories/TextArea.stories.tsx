import { StoryObj, Meta } from '@storybook/react'
import { Box, Text, TextArea, TextAreaProps } from '@danielbpc-ui/react'

export default {
  title: 'Form/TextArea',
  component: TextArea,
  args: {},
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
        >
          <Text size="sm">Leave your feedback</Text>
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<TextAreaProps>

export const Primary: StoryObj<TextAreaProps> = {
  args: {
    placeholder: 'Add a comment',
  },
}
export const Disabled: StoryObj<TextAreaProps> = {
  args: {
    disabled: true,
  },
}
