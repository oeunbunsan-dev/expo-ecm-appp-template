import { Text, View } from 'react-native';

const FrameDialog = () => {
  const { visible, closeDialog, children } = useDialog();
  return (
    <View>
      <Text>FrameDialog</Text>
    </View>
  )
}

export default FrameDialog