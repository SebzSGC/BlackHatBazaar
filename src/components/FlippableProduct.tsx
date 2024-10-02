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
import { useFlipAnimation } from '../hooks/useFlipAnimation'
import RetroButton from './RetroButton'

interface ProductProps {
  product: Product
  onPress: () => void
  width: number
}

const FlippableProduct = ({ product, onPress, width }: ProductProps) => {
  const { frontAnimatedStyle, backAnimatedStyle, handleFlip } =
    useFlipAnimation()

  const [randomContent, setRandomContent] = useState<string>('')

  const randomItems = [
    '💡 Fun Fact: Did you know this product is eco-friendly?',
    '✨ Limited Edition!',
    '🎉 Special Offer Just for You!',
    '📦 Fast shipping available!',
    '🛠 Built with precision and care.',
    '🔥 Top seller this month!',
    '🌟 Highly recommended by experts!',
  ]

  const handleFlipWithContent = () => {
    const randomIndex = Math.floor(Math.random() * randomItems.length)
    setRandomContent(randomItems[randomIndex])
    handleFlip()
  }

  return (
    <TouchableOpacity onPress={handleFlipWithContent}>
      <Animated.View
        style={[styles.productCard, { width }, frontAnimatedStyle]}
      >
        {product.onSale && (
          <View style={styles.saleBadge}>
            <Text style={styles.saleBadgeText}>¡Oferta!</Text>
          </View>
        )}
        <Image source={product.image} style={styles.productImage} />
        <Text style={globalStyles.retroTitle}>{product.title}</Text>

        {product.onSale ? (
          <View style={styles.priceContainer}>
            <Text style={styles.oldPrice}>$42</Text>
            <Text style={styles.newPrice}>${product.price}</Text>
          </View>
        ) : (
          <Text style={globalStyles.retroHeader}>${product.price}</Text>
        )}

        <RetroButton title="Comprar ahora" onPress={onPress} />
      </Animated.View>

      <Animated.View
        style={[
          styles.productCard,
          { width },
          styles.cardBack,
          backAnimatedStyle,
        ]}
      >
        <Animated.View style={styles.randomContentContainer}>
          <Text style={[globalStyles.retroTitle, styles.randomContentText]}>
            {randomContent}
          </Text>
        </Animated.View>
      </Animated.View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  productCard: {
    backgroundColor: '#E6E6E6',
    borderRadius: 10,
    borderColor: '#000',
    borderWidth: 2,
    padding: 15,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backfaceVisibility: 'hidden',
    marginHorizontal: 5,
  },
  cardBack: {
    backgroundColor: '#FF4500',
    position: 'absolute',
    top: 0,
    borderRadius: 10,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  productImage: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  saleBadge: {
    position: 'absolute',
    top: -10,
    left: -2,
    backgroundColor: '#FF4500',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#FFF',
    zIndex: 1,
  },
  saleBadgeText: {
    color: '#FFF',
    fontFamily: 'HACKED',
    fontSize: 12,
    textTransform: 'uppercase',
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  oldPrice: {
    fontFamily: 'HACKED',
    fontSize: 18,
    textDecorationLine: 'line-through',
    marginRight: 10,
  },
  newPrice: {
    fontFamily: 'HACKED',
    color: '#FF4500',
    fontSize: 24,
  },
  randomContentContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    transform: [{ scale: 1 }],
    opacity: 1,
  },
  randomContentText: {
    fontSize: 20,
    color: '#FFF',
    textAlign: 'center',
    marginVertical: 10,
    padding: 20,
    fontFamily: 'Jersey10-Regular',
  },
})

export default FlippableProduct
