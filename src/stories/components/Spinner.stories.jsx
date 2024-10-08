import Spinner from '../../components/common/Spinner'

export default {
  title: 'Component/Spinner',
  component: Spinner,
  argTypes: {
    size: {
      defaultValue: 24,
      control: 'number',
    },
    color: { control: 'color' },
    loading: { control: 'boolean' },
  },
}

export const Default = (args) => <Spinner {...args} />
