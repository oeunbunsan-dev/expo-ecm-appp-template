import { Slot } from 'expo-router'
import { View } from 'react-native'

const AuthLayout = () => {
  return (
    <View style={{ backgroundColor: 'green' }}>
      <Slot />
    </View>
  )
}

export default AuthLayout