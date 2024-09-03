import React from 'react'
import {
  Text,
  View,
  FlatList,
  Image,
  StyleSheet,
  ListRenderItem,
} from 'react-native'
import RetroButton from '../RetroButton'
import globalStyles from '../../styles/Global'
import { Product } from '../../interfaces/Product'
import products from '../../utils/products'

const Item = () => {
  const renderItem: ListRenderItem<Product> = ({ item, index }) => {
    return (
      <View
        style={
          index + 1 === products.length
            ? styles.lastItemStyle
            : styles.containerStyle
        }
      >
        <Image source={item.image} style={styles.imageStyle} />

        <View style={{ flex: 2, justifyContent: 'center' }}>
          <Text style={[globalStyles.retroMessage, { textAlign: 'left' }]}>
            {item.title}
          </Text>
          <View style={styles.priceStyle}>
            <Text
              style={[
                globalStyles.retroMessage,
                { textAlign: 'left', marginVertical: 0 },
              ]}
            >
              ${item.price}
            </Text>
          </View>
        </View>

        <View style={styles.counterStyle}>
          <RetroButton
            title="-"
            styleText={{
              fontFamily: 'Jersey10-Regular',
              fontSize: 20,
              marginLeft: 2,
            }}
            style={{
              borderRadius: 80,
              backgroundColor: '#bbb',
            }}
          />
          <Text style={{ fontFamily: 'HACKED' }}>{item.amountTaken}</Text>
          <RetroButton
            title="+"
            styleText={{
              fontFamily: 'Jersey10-Regular',
              fontSize: 20,
              marginLeft: 2,
            }}
            style={{
              borderRadius: 80,
              backgroundColor: '#bbb',
            }}
          />
        </View>
      </View>
    )
  }

  return (
    <View style={{ flex: 4, backgroundColor: '#DCDCDC' }}>
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  )
}
const styles = StyleSheet.create({
  containerStyle: {
    flexDirection: 'row',
    flex: 1,
    borderBottomWidth: 1,
    borderColor: '#e2e2e2',
    padding: 10,
    paddingLeft: 15,
    backgroundColor: '#F5F5F5',
  },
  lastItemStyle: {
    flexDirection: 'row',
    flex: 1,
    padding: 10,
    paddingLeft: 15,
    backgroundColor: '#F5F5F5',
  },
  imageStyle: {
    width: 50,
    height: 50,
    marginRight: 20,
  },
  priceStyle: {
    backgroundColor: '#ddd',
    width: 40,
    alignItems: 'center',
    marginTop: 3,
    borderRadius: 3,
  },
  counterStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
})

export default Item
