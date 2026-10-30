import { productService } from '@/shared/apis/services/product.service';
import ErrorDialog from '@/shared/components/common/dialog/ErrorDialog';
import { useDialog } from '@/shared/contexts/DialogContext';
import { useLoading } from '@/shared/contexts/LoadingContext';
import { useEffect, useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import ProductPortion from '../portion/ProductPortion';

const ProductView = () => {
      const [products, setProducts] : any = useState(null);

      const { openDialog } = useDialog();
      const { startLoading, dismissLoading } = useLoading();

      useEffect(() => {
            handleFetchProducts();
      }, []);

      const handleFetchProducts = async () => {
            try {
                  startLoading();
                  const res = await productService.getAllProducts();

                  setProducts(res?.data);
                  
            } catch (error: any) {
                  const errorMessage = error?.message;
                  openDialog(<ErrorDialog message={errorMessage} />);
            } finally {
                  dismissLoading();
            }
      };

      return (
            <ScrollView
                  style={styles.container}
                  contentContainerStyle={styles.scrollContent}
            >
                  <ProductPortion products={products} />
            </ScrollView>
      );
};

const styles = StyleSheet.create({
      container: {
            flex: 1,
      },
      scrollContent: {
            flexGrow: 1,
      },
      emptyText: {
            textAlign: 'center',
            marginTop: 20,
            color: '#888',
      },
});

export default ProductView;
