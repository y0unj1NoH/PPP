import Toast from '../../components/Toast'

export default {
  title: 'Component/Toast',
  component: Toast,
}

export const Default = () => {
  return (
    <button
      onClick={() => {
        Toast.show('안녕하세요!'), 3000
      }}
    >
      Show Toast
    </button>
  )
}
