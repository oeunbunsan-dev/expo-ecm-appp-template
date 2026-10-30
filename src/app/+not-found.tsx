import { ThemedText } from '@/shared/components/common/ThemedText'
import { assetManager } from '@/shared/configs'
import { Image } from "expo-image"
import { View } from 'react-native'

const NotFound = () => {
  return (
    <View>
      <Image
        source={assetManager.images.error404}
        style={{
          width: 200,
          height: 200,
          borderRadius: 25,
        }}
        contentFit="cover"
        cachePolicy="memory-disk"
        transition={150}
      />

      <ThemedText variant="title">{"Not Found"}</ThemedText>
    </View>
  )
}

export default NotFound