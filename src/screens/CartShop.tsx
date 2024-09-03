import { Image, ImageBackground, View } from 'react-native'
import Header from '../components/basket/Header'
import Item from '../components/basket/Item'
import Basket from '../components/basket/Basket'
import Footer from '../components/basket/Footer'

export default function CartShop() {
  return (
    <View style={{ flex: 1 }}>
      <Header />
      <Item />
      <Basket />
      <Footer />
    </View>
  )
}
