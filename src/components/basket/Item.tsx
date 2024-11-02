import React, { useContext, useEffect, useState } from 'react'
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
import { useUser } from '../../context/UserContext'
import { FirebaseContext } from '../../firebase'

const Item = () => {
  const { firebase } = useContext(FirebaseContext)
  const { user } = useUser()
  const [CarItems, setCart] = useState<Product[]>([])

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const cart = await firebase.getCart(user.id)
        setCart(cart)
      } catch (error) {
        console.error('Error al obtener el carrito:', error)
      }
    }

    fetchFavorites()
  }, [firebase, user.id])
  const renderItem: ListRenderItem<Product> = ({ item, index }) => {
    const isOnSale = item.onSale
    const discountPercentage = isOnSale
      ? Math.round(
          (((item.oldPrice ?? item.price) - item.price) /
            (item.oldPrice ?? item.price)) *
            100
        )
      : 0

    return (
      <View
        style={[
          index + 1 === CarItems.length
            ? styles.lastItemStyle
            : styles.containerStyle,
          isOnSale && styles.onSaleStyle,
        ]}
      >
        <Image source={item.image} style={styles.imageStyle} />

        <View style={{ flex: 2, justifyContent: 'center' }}>
          <Text style={[globalStyles.retroMessage, { textAlign: 'left' }]}>
            {item.title}
          </Text>

          {isOnSale && (
            <Text style={styles.discountTag}>{discountPercentage}% OFF</Text>
          )}

          <View style={styles.priceStyle}>
            {isOnSale ? (
              <>
                <Text
                  style={[
                    globalStyles.retroMessage,
                    {
                      textAlign: 'left',
                      marginVertical: 0,
                      textDecorationLine: 'line-through',
                    },
                  ]}
                >
                  ${item.oldPrice}
                </Text>
                <Text
                  style={[
                    globalStyles.retroMessage,
                    { textAlign: 'left', marginVertical: 0, color: '#FF4500' },
                  ]}
                >
                  ${item.price}
                </Text>
              </>
            ) : (
              <Text
                style={[
                  globalStyles.retroMessage,
                  { textAlign: 'left', marginVertical: 0 },
                ]}
              >
                ${item.price}
              </Text>
            )}
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
        data={CarItems}
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
    width: 60,
    alignItems: 'center',
    marginTop: 3,
    borderRadius: 3,
    padding: 2,
  },
  counterStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  onSaleStyle: {
    backgroundColor: '#e1e1e1',
    borderColor: '#8b8b8b',
    borderWidth: 1,
  },
  discountTag: {
    fontSize: 12,
    fontFamily: 'HACKED',
    color: '#FF4500',
    marginBottom: 5,
  },
})

export default Item
