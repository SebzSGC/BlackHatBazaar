import React from 'react'
import {
  View,
  Text,
  Image,
  ScrollView,
  Animated,
  StyleSheet,
} from 'react-native'
import RetroButton from '../components/RetroButton'
import PressableOpacity from '../components/PressableOpacity'
import Hearth from '../components/icons/Hearth'
import { RouteProp, useRoute } from '@react-navigation/native'
import { ViewsParams } from '../types/ViewsParams'
import { useFlipAnimation } from '../hooks/useFlipAnimation'
import globalStyles from '../styles/Global'

const ProductDetail = () => {
  const route = useRoute<RouteProp<ViewsParams, 'ProductDetail'>>()
  const { product } = route.params

  const { frontAnimatedStyle, backAnimatedStyle, handleFlip } =
    useFlipAnimation()

  return (
    <ScrollView style={styles.container}>
      {/* Imagen del Producto con Animación */}
      <PressableOpacity onPress={handleFlip} style={styles.imageContainer}>
        <Animated.View
          style={[styles.productImageContainer, frontAnimatedStyle]}
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
              Rating: 4
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
              (4 Reviews)
            </Text>
          </View>
        </Animated.View>
      </PressableOpacity>

      {/* Información del Producto */}
      <View style={styles.infoContainer}>
        <Text style={[globalStyles.retroHeader, { color: '#FFF' }]}>
          {product.title}
        </Text>
        <Text
          style={[
            globalStyles.retroHeader,
            { textAlign: 'left', color: '#FFF' },
          ]}
        >
          {product.title}
        </Text>

        {/* Calificación y Precio */}
        <View style={styles.ratingPriceContainer}>
          <Text style={styles.priceText}>${product.price}</Text>
        </View>

        {/* Selección de Talla */}
        <Text
          style={[
            globalStyles.retroHeader,
            { color: '#FFF', textAlign: 'left' },
          ]}
        >
          Select Size (Age Group)
        </Text>
        <View style={styles.sizeOptionsContainer}>
          <PressableOpacity style={styles.sizeOption}>
            <Text style={globalStyles.retroMessage}>New Born</Text>
          </PressableOpacity>
          <PressableOpacity style={styles.sizeOption}>
            <Text style={globalStyles.retroMessage}>Tiny Baby</Text>
          </PressableOpacity>
          <PressableOpacity style={styles.sizeOption}>
            <Text style={globalStyles.retroMessage}>0-3 M</Text>
          </PressableOpacity>
        </View>

        {/* Descripción y Reseñas */}
        <View style={styles.tabContainer}>
          <PressableOpacity style={styles.tabButton}>
            <Text style={[globalStyles.retroHeader, { color: '#FFF' }]}>
              Description
            </Text>
          </PressableOpacity>
          <PressableOpacity style={styles.tabButton}>
            <Text style={[globalStyles.retroHeader, { color: '#FFF' }]}>
              Reviews
            </Text>
          </PressableOpacity>
        </View>
        <Text style={styles.descriptionText}>{product.description}</Text>

        {/* Botones */}
        <View style={styles.buttonContainer}>
          <PressableOpacity style={styles.wishlistButton}>
            <Text>
              <Hearth />
            </Text>
          </PressableOpacity>
          <RetroButton
            title="ADD TO CART"
            onPress={() => console.log('Add to cart')}
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
  ratingBackText: {
    fontSize: 20,
    color: '#FFF',
    marginBottom: 8,
    fontFamily: 'HACKED',
  },
  starsContainer: {
    flexDirection: 'row',
  },
  star: {
    fontSize: 24,
    marginRight: 4,
  },
  reviewsText: {
    fontSize: 14,
    color: '#FFF',
    marginTop: 8,
    fontFamily: 'HACKED',
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
  priceText: {
    fontSize: 22,
    color: '#FFF',
    fontFamily: 'HACKED',
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
  },
  sizeOptionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 12,
  },
  sizeOption: {
    padding: 10,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#FFF',
    backgroundColor: '#333',
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
})

export default ProductDetail
