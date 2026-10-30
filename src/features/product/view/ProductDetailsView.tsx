import { Text, View } from 'react-native';

interface Props {
      id : number | string;
}

const ProductDetailsView = ({ id } : Props) => {
  return (
    <View>
      <Text>ProductDetailsView : {id}</Text>
    </View>
  )
}

export default ProductDetailsView