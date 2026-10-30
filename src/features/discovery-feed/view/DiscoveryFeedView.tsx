import AppHeader from '@/shared/components/common/AppHeader'
import AppLottieView from '@/shared/components/common/AppLottieView'
import TextureJournal from '../components/TextureJournal'
import CategoryPortion from '../portion/CategoryPortion'
import HeroPortion from '../portion/HeroPortion'

import ProductView from '@/features/product/view/ProductView'
import { useRouter } from 'expo-router'
import { Text, TouchableOpacity } from 'react-native'


const DiscoveryFeedView = () => {
  const router = useRouter();


  return (
    <>
      <AppHeader />
      <HeroPortion />
      <CategoryPortion />
      <TextureJournal />
      <AppLottieView name="deliveryMan" />

      <TouchableOpacity onPress={() => {
        router.push("/scan-qr")
      }}>
        <Text>Go to Scan</Text>
      </TouchableOpacity>

      <ProductView />
    </>
  )
}

export default DiscoveryFeedView