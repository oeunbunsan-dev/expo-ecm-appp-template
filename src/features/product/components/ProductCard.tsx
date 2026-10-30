import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { ProductType } from '../portion/ProductPortion';

interface Props {
      productObj: ProductType;
      onProductCardTap?: (item?: any) => any;
};

const ProductCard = ({ productObj, onProductCardTap }: Props) => {
      const { id, name, description, category, basePrice } = productObj;

      return (
            <TouchableOpacity
                  onPress={() => onProductCardTap?.(productObj.id)}
                  style={styles.productCartContainer}
            >
                  <Text> Description : {description}</Text>
            </TouchableOpacity>
      )
};

const styles = StyleSheet.create({
      productCartContainer: {
            width: "100%",
            height: 200,
            backgroundColor: 'red',
            borderRadius: 16
      }
})

export default ProductCard