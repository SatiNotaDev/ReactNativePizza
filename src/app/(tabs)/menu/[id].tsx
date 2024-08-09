import { useLocalSearchParams, Stack} from 'expo-router';
import { View, Text, Image, StyleSheet} from 'react-native';
import products from '@/assets/data/products';
import { defaultPizzaImage } from 'src/components/ProductListItem';





const ProductDetailScreen = () => {
const {id} = useLocalSearchParams();

const product = products.find((p) => p.id.toString() == id);
if (!product) {
  return <Text>Products not found</Text>
}

  return (
    <View>
      <Stack.Screen options={{ title: product?.name}} />
      <Image 
      source={{ uri: product.image || defaultPizzaImage}}
      style={styles.image}
      />
      <Text>ProductDetailScreen for id:{id}</Text>
    </View>
  );
}


const  styles = StyleSheet.create ({
  container: {},
  image: {},
  price:{},
})

export default ProductDetailScreen


