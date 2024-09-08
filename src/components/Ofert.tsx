import React, { useState } from 'react'
import {
  View,
  Text,
  Image,
  StyleSheet,
  Animated,
  TouchableOpacity,
} from 'react-native'
import { Product } from '../interfaces/Product'
import globalStyles from '../styles/Global'
import RetroButton from '../components/RetroButton'
import products from '../utils/products'

interface ProductProps {
  product: Product
}

const Ofert = ({ product }: ProductProps) => {
  product = products[0]
  const [flipped, setFlipped] = useState(false)
  const [flipAnimation] = useState(new Animated.Value(0))

  const handleFlip = () => {
    Animated.timing(flipAnimation, {
      toValue: flipped ? 0 : 1,
      duration: 500,
      useNativeDriver: true,
    }).start(() => {
      setFlipped(!flipped)
    })
  }

  const frontInterpolate = flipAnimation.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: ['0deg', '90deg', '180deg'],
  })

  const backInterpolate = flipAnimation.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: ['180deg', '270deg', '360deg'],
  })

  const frontAnimatedStyle = {
    transform: [{ rotateY: frontInterpolate }],
  }

  const backAnimatedStyle = {
    transform: [{ rotateY: backInterpolate }],
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleFlip} style={styles.flipCardContainer}>
        {/* Parte frontal */}
        <Animated.View style={[styles.card, frontAnimatedStyle]}>
          <Image source={product.image} style={styles.productImage} />
          <Text style={styles.cardText}>{product.title}</Text>
        </Animated.View>

        {/* Parte trasera */}
        <Animated.View
          style={[styles.card, styles.cardBack, backAnimatedStyle]}
        >
          <Text style={[globalStyles.retroTitle, styles.cardText]}>
            Detalles del producto
          </Text>
          <Text style={styles.detailText}>
            <Text style={[globalStyles.retroTitle, { color: '#fff' }]}>
              Categoría: {product.category}
            </Text>
          </Text>
          <Text style={styles.detailText}>
            <Text style={[globalStyles.retroTitle, { color: '#fff' }]}>
              Stock disponible: {product.stock}
            </Text>
          </Text>
          <Text style={styles.priceText}>Precio: ${product.price}</Text>
        </Animated.View>
      </TouchableOpacity>

      <RetroButton title="Comprar" onPress={() => {}} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0d0d0d',
  },
  flipCardContainer: {
    width: 250,
    height: 350,
    marginBottom: 20,
  },
  card: {
    width: '100%',
    height: '100%',
    backgroundColor: '#4169E1',
    alignItems: 'center',
    justifyContent: 'center',
    backfaceVisibility: 'hidden',
    borderRadius: 10,
    overflow: 'hidden',
  },
  cardBack: {
    backgroundColor: '#FF4500',
    position: 'absolute',
    top: 0,
  },
  cardText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginVertical: 10,
  },
  productImage: {
    width: 150,
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
  detailText: {
    fontSize: 16,
    color: '#fff',
    marginVertical: 5,
  },
  priceText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    marginVertical: 10,
  },
})

export default Ofert
