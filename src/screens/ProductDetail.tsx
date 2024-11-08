import React, { useState, useEffect, useContext } from 'react'
import {
  View,
  Text,
  Image,
  ScrollView,
  Animated,
  StyleSheet,
  Alert,
} from 'react-native'
import RetroButton from '../components/RetroButton'
import PressableOpacity from '../components/PressableOpacity'
import Hearth from '../components/icons/Hearth'
import { RouteProp, useRoute } from '@react-navigation/native'
import { ViewsParams } from '../types/ViewsParams'
import { useFlipAnimation } from '../hooks/useFlipAnimation'
import globalStyles from '../styles/Global'
import ProductReviews from '../components/ProductReviews'
import { FirebaseContext } from '../firebase'
import { useUser } from '../context/UserContext'

const ProductDetail = () => {
  const route = useRoute<RouteProp<ViewsParams, 'ProductDetail'>>()
  const { user } = useUser()
  const { firebase } = useContext(FirebaseContext)
  const { product } = route.params

  const { frontAnimatedStyle, backAnimatedStyle, handleFlip } =
    useFlipAnimation()

  const offerAnimatedValue = new Animated.Value(1)

  const handleAddToCart = async () => {
    try {
      await firebase.updateCart(user.id, product)

      Alert.alert('Éxito', 'Producto agregado al carrito correctamente.')
    } catch (error) {
      console.error('Error al agregar el producto al carrito:', error)
      Alert.alert('Error', 'No se pudo agregar el producto al carrito.')
    }
  }

  const handleAddToFavs = async () => {
    try {
      await firebase.updateFavs(user.id, product)

      Alert.alert('Éxito', 'Producto agregado a favoritos correctamente.')
    } catch (error) {
      console.error('Error al agregar el producto a favoritos :', error)
      Alert.alert('Error', 'No se pudo agregar el producto a favoritos.')
    }
  }

  useEffect(() => {
    Animated.timing(offerAnimatedValue, {
      toValue: 1.2,
      duration: 400,
      useNativeDriver: true,
    }).start(() => {
      Animated.timing(offerAnimatedValue, {
        toValue: 1,
        duration: 400,
        useNativeDriver: true,
      }).start()
    })
  }, [handleFlip])

  const [activeTab, setActiveTab] = useState<'description' | 'reviews'>(
    'description'
  )

  return (
    <ScrollView style={styles.container}>
      <PressableOpacity onPress={handleFlip} style={styles.imageContainer}>
        {product.onSale && (
          <Animated.View
            style={[
              styles.saleBadge,
              {
                transform: [
                  { rotate: '-45deg' },
                  { scale: offerAnimatedValue },
                ],
              },
            ]}
          >
            <Text style={styles.saleBadgeText}>¡Oferta!</Text>
          </Animated.View>
        )}

        <Animated.View
          style={[
            styles.productImageContainer,
            frontAnimatedStyle,
            { borderColor: '#FFF' },
          ]}
        >
          <Image source={product.image} style={styles.productImage} />
        </Animated.View>

        <Animated.View
          style={[
            styles.productImageContainer,
            styles.backImageContainer,
            backAnimatedStyle,
          ]}
        >
          <View style={styles.ratingBackContainer}>
            <Text style={[globalStyles.retroTitle, { color: '#FFF' }]}>
              Calificaciones: 4
            </Text>
            <View style={styles.starsContainer}>
              {Array.from({ length: 5 }).map((_, index) => (
                <Text
                  key={index}
                  style={[
                    styles.star,
                    { color: index < 3 ? '#FFD700' : '#ccc' },
                  ]}
                >
                  ★
                </Text>
              ))}
            </View>
            <Text style={[globalStyles.retroTitle, { color: '#FFF' }]}>
              {' '}
              (4 Reviews)
            </Text>
          </View>
        </Animated.View>
      </PressableOpacity>

      <View style={styles.infoContainer}>
        <Text style={[globalStyles.retroHeader, { color: '#FFF' }]}>
          {product.title}
        </Text>

        {product.onSale ? (
          <View style={styles.ratingPriceContainer}>
            <Text style={styles.oldPrice}>${product.oldPrice}</Text>
            <Text style={styles.newPrice}>${product.price}</Text>
          </View>
        ) : (
          <View style={styles.ratingPriceContainer}>
            <Text>${product.price}</Text>
          </View>
        )}

        <View style={styles.tabContainer}>
          <PressableOpacity
            style={[
              styles.tabButton,
              activeTab === 'description' && styles.activeTab,
            ]}
            onPress={() => setActiveTab('description')}
          >
            <Text style={[globalStyles.retroHeader, { color: '#FFF' }]}>
              Descripcion
            </Text>
          </PressableOpacity>
          <PressableOpacity
            style={[
              styles.tabButton,
              activeTab === 'reviews' && styles.activeTab,
            ]}
            onPress={() => setActiveTab('reviews')}
          >
            <Text style={[globalStyles.retroHeader, { color: '#FFF' }]}>
              Comentarios
            </Text>
          </PressableOpacity>
        </View>

        {activeTab === 'description' ? (
          <Text style={styles.descriptionText}>{product.description}</Text>
        ) : (
          <ProductReviews />
        )}

        <View style={styles.buttonContainer}>
          <PressableOpacity
            style={styles.wishlistButton}
            onPress={() => handleAddToFavs()}
          >
            <Text>
              <Hearth />
            </Text>
          </PressableOpacity>
          <RetroButton
            title="AGREGAR AL CARRITO"
            onPress={() => handleAddToCart()}
          />
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1A1A',
    paddingTop: 16,
  },
  imageContainer: {
    alignItems: 'center',
    marginVertical: 16,
  },
  productImageContainer: {
    width: '90%',
    height: 300,
    backfaceVisibility: 'hidden',
    borderRadius: 8,
    borderWidth: 2,
    overflow: 'hidden',
    borderColor: '#FFF',
  },
  backImageContainer: {
    position: 'absolute',
    top: 0,
    backfaceVisibility: 'hidden',
    backgroundColor: '#262626',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    width: '90%',
    height: 300,
    borderColor: '#FFF',
  },
  productImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  ratingBackContainer: {
    alignItems: 'center',
  },
  starsContainer: {
    flexDirection: 'row',
  },
  star: {
    fontSize: 24,
    marginRight: 4,
  },
  infoContainer: {
    paddingHorizontal: 16,
    marginTop: 16,
    backgroundColor: '#202020',
    padding: 20,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#FFF',
  },
  ratingPriceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 8,
    alignItems: 'center',
  },
  tabContainer: {
    flexDirection: 'row',
    marginVertical: 16,
    justifyContent: 'space-around',
    borderBottomColor: '#FF66FF',
    borderBottomWidth: 1,
  },
  tabButton: {
    padding: 10,
    alignItems: 'center',
  },
  activeTab: {
    borderBottomWidth: 3,
    borderBottomColor: '#FF66FF',
  },
  descriptionText: {
    fontSize: 14,
    color: '#CCCCCC',
    lineHeight: 22,
    marginVertical: 12,
    fontFamily: 'Jersey10-Regular',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 20,
  },
  wishlistButton: {
    padding: 12,
    backgroundColor: '#333',
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#FF66FF',
  },
  saleBadge: {
    position: 'absolute',
    top: -5,
    left: -1,
    backgroundColor: '#FF4500',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    zIndex: 1,
  },
  saleBadgeText: {
    color: '#FFF',
    fontFamily: 'HACKED',
    fontSize: 16,
    textTransform: 'uppercase',
  },
  oldPrice: {
    fontFamily: 'HACKED',
    fontSize: 18,
    textDecorationLine: 'line-through',
    marginRight: 10,
    color: '#FFF',
  },
  newPrice: {
    fontFamily: 'HACKED',
    color: '#FF4500',
    fontSize: 24,
  },
})

export default ProductDetail
