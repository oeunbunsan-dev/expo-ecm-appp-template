import { assetManager } from '@/shared/configs/asset'
import { Image, Text, View } from 'react-native'

const HomePortion = () => {
  return (
    <View>
      <Image source={{ uri : assetManager.images.overlayBg }}  />
      <Text>HomePortion</Text>
    </View>
  )
}

export default HomePortion