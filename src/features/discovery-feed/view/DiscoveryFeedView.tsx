import AppHeader from '@/shared/components/common/AppHeader'
import AppLottieView from '@/shared/components/common/AppLottieView'
import TextureJournal from '../components/TextureJournal'
import CategoryPortion from '../portion/CategoryPortion'
import HeroPortion from '../portion/HeroPortion'

import { useRouter } from 'expo-router'


const DiscoveryFeedView = () => {
  const router = useRouter();
  
  return (
    <>
      <AppHeader />
      <HeroPortion />
      <CategoryPortion />
      <TextureJournal />
      <AppLottieView name="deliveryMan" />
    </>
  )
}

export default DiscoveryFeedView