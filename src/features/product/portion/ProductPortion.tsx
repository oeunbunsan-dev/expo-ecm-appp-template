import { useRouter } from 'expo-router';
import { View } from 'react-native';
import ProductCard from '../components/ProductCard';

export interface Dimensions {
      width: number;
      height: number;
      depth: number;
}

export interface Review {
      rating: number;
      comment: string;
      date: string;
      reviewerName: string;
      reviewerEmail: string;
}

export interface MetaData {
      createdAt: string;
      updatedAt: string;
      barcode: string;
      qrCode: string;
}

export interface ProductType {
      id: number;
      title: string;
      description: string;
      category: string;
      price: number;
      discountPercentage: number;
      rating: number;
      stock: number;
      tags: string[];
      brand: string;
      sku: string;
      weight: number;
      dimensions: Dimensions;
      warrantyInformation: string;
      shippingInformation: string;
      availabilityStatus: string;
      reviews: Review[];
      returnPolicy: string;
      minimumOrderQuantity: number;
      meta: MetaData;
      images: string[];
      thumbnail: string;
}


interface Props {
      products: ProductType[];
}

const ProductPortion = ({ products }: Props) => {

      if (!products || products.length === 0) return null;

      const router = useRouter();

      // Redirect to the product details screen.
      const onRedirect = async (id: number) => {
            // We get the id from the ProductCard children component.
            router.push(`/product/${id}`);
      };

      return (
            <View style={{ flex: 1 }}>
                  {
                        products.map((prod) => {
                              return (
                                    <ProductCard
                                          key={prod.id}
                                          productObj={prod}
                                          onProductCardTap={onRedirect}
                                    />
                              );
                        })
                  }
            </View>
      );
};

export default ProductPortion;
