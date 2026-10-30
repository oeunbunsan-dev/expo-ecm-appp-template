import { useRouter } from 'expo-router';
import { View } from 'react-native';
import ProductCard from '../components/ProductCard';

export interface Dimensions {
      width: number;
      height: number;
      depth: number;
}



export interface StoreType {
      id: string;
      name: string;
      slug: string;
      logo: string | null;
}

export interface BrandType {
      id: string;
      name: string;
      slug: string;
      logo: string | null;
}

export interface CategoryType {
      id: string;
      name: string;
      slug: string;
}

export interface InventoryType {
      quantity: number;
      reservedQuantity: number;
}

export interface ProductType {
      id: string;
      storeId: string;
      brandId: string;
      categoryId: string;
      name: string;
      slug: string;
      description: string;
      shortDescription: string;
      sku: string;
      basePrice: string;
      comparePrice: string;
      costPrice: string | null;
      isFeatured: boolean;
      isActive: boolean;
      tags: any[];
      status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED' | string;
      viewsCount: number;
      salesCount: number;
      ratingAvg: string;
      ratingCount: number;
      createdAt: string; // ISO Date String
      updatedAt: string;
      store: StoreType;
      brand: BrandType;
      category: CategoryType;
      images: any[];
      variants: any[];
      inventory: InventoryType[];
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
