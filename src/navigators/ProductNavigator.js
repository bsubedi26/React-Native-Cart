import { StackNavigator } from 'react-navigation';

import ProductMainScreen from 'containers/products';
import ProductDetailScreen from 'containers/products/Detail';

const ProductScreen = StackNavigator({
  Products: {
    screen: ProductMainScreen,
    path: '/products',
    navigationOptions: {
      title: 'All Products',
    },
  },
  Detail: {
    screen: ProductDetailScreen,
    path: '/products/detail',
    navigationOptions: ({ navigation }) => ({
      // title: `${navigation.state.params.name}'s Profile!`,
      title: `Product Detail`,
    }),
  },
});

export default ProductScreen;
