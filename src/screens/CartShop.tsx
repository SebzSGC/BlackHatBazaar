import { View } from 'react-native'
import Header from '../components/basket/Header'
import Item from '../components/basket/Item'
import Basket from '../components/basket/Basket'
import Footer from '../components/basket/Footer'
import { NavigationProp } from '@react-navigation/native'

type Props = {
  navigation: NavigationProp<any>
}

export default function CartShop({ navigation }: any) {
  return (
    <View style={{ flex: 1 }}>
      <Header navigation={navigation} />
      <Item />
      <Basket />
      <Footer />
    </View>
  )
}
