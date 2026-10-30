import ProductView from '@/features/product/view/ProductView'
import { AppIcons } from '@/shared/configs'
import { Text, View } from 'react-native'

const HomeView = () => {
  return (
    <View>
      <Text>HomeView</Text>
      <AppIcons.Search size={50} color='green' />

      <ProductView />

    </View>
  )
}

export default HomeView