import { Text, TouchableOpacity } from 'react-native';
import { ProductType } from '../portion/ProductPortion';

interface Props {
      productObj: ProductType;
      onProductCardTap?: (item?: any) => any;
};

const ProductCard = ({ productObj, onProductCardTap }: Props) => {
      // const { id, title, description, category, price, discountPercentage, rating, stock } = productObj;
      return (
            <TouchableOpacity onPress={() => onProductCardTap?.(productObj.id)} style={{ width: "100%", height: 250, backgroundColor: "yellow", borderRadius: 16 }}>
                  <Text> ID : {productObj.id}</Text>
                  <Text> Title : {productObj.title}</Text>
                  <Text> Description : {productObj.description}</Text>
                  <Text> Category : {productObj.category}</Text>
                  <Text> price : {productObj.price}</Text>
            </TouchableOpacity>
      )
}

export default ProductCard