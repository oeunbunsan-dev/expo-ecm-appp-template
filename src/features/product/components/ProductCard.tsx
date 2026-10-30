import { Image } from "expo-image";
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { ProductType } from '../portion/ProductPortion';

interface Props {
      productObj?: ProductType;

      onProductCardTap?: (item?: any) => any;
};

const ProductCard = ({ productObj, onProductCardTap }: Props) => {

      return (
            <TouchableOpacity
                  onPress={() => onProductCardTap?.(productObj?.id)}
                  style={styles.productCartContainer}
            >
                  <View style={styles.imageWrapper}>
                        <Image
                              style={{ position: "absolute", flex: 1, width : "100%", height : "100%" }}
                              source={productObj?.images[0]}
                              contentFit="contain"
                              cachePolicy={'memory-disk'}
                              transition={150}

                        />
                  </View>

            </TouchableOpacity>
      )
};

const styles = StyleSheet.create({
      productCartContainer: {
            width: "100%",
            height: 200,
            borderRadius: 16,
            position: "relative"
      },

      imageWrapper: {
            width: "100%",
            height: 300,
            position: "relative"
      }

})

export default ProductCard