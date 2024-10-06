import { View } from 'react-native'
import Header from '../components/basket/Header'
import Item from '../components/basket/Item'
import Basket from '../components/basket/Basket'
import Footer from '../components/basket/Footer'

export default function CartShop({ navigation }: any) {
  return (
    <View style={{ flex: 1 }}>
      <Header navigation={navigation} />
      <Item />
      <Basket />
      <Footer navigation={navigation} />
    </View>
  )
}
