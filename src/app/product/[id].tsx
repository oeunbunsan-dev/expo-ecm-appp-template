import ProductDetailsView from '@/features/product/view/ProductDetailsView';
import { useLocalSearchParams } from 'expo-router';

const ProductDetails = () => {
  const { id } : any = useLocalSearchParams();

  return <ProductDetailsView id={id} />
}

export default ProductDetails