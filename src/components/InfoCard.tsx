import React, { useState } from 'react'
import { View, Text, Image } from 'react-native'
import globalStyles from '../styles/Global'
import { Product } from '../interfaces/Product'
import PressableOpacity from './PressableOpacity'
interface InfoCardProps {
  products: Product[]
  addToCart: (product: Product) => void
  deleteFromCart: (product: Product) => void
}

const InfoCard: React.FC<InfoCardProps> = ({
  products,
  addToCart,
  deleteFromCart,
}) => {
  const [quantities, setQuantities] = useState<number[]>(products.map(() => 1))

  const increaseQuantity = (index: number) => {
    const newQuantities = [...quantities]
    newQuantities[index] += 1
    setQuantities(newQuantities)
  }

  const decreaseQuantity = (index: number) => {
    const newQuantities = [...quantities]
    if (newQuantities[index] > 1) {
      newQuantities[index] -= 1
      setQuantities(newQuantities)
    }
  }

  return (
    <>
      {products.map((product, index) => (
        <View key={product.id} style={globalStyles.modalBackground}>
          <View style={globalStyles.retroContainer}>
            <View style={globalStyles.subBarWithClose}>
              <Text style={globalStyles.subBarText}>{product.title}</Text>
              <PressableOpacity style={globalStyles.closeButton}>
                <Text style={globalStyles.closeButtonText}>X</Text>
              </PressableOpacity>
            </View>
            <View style={globalStyles.contentContainer}>
              <Image source={product.image} style={globalStyles.productImage} />
              <Text style={globalStyles.retroMessage}>
                {product.description}
              </Text>
              <Text style={globalStyles.retroPrice}>
                ${product.price.toFixed(2)}
              </Text>
              <View style={globalStyles.quantityContainer}>
                <PressableOpacity
                  onPress={() => {
                    decreaseQuantity(index)
                    deleteFromCart(product)
                  }}
                  style={globalStyles.quantityButton}
                >
                  <Text style={globalStyles.quantityButtonText}>-</Text>
                </PressableOpacity>
                <Text style={globalStyles.quantityText}>
                  {quantities[index]}
                </Text>
                <PressableOpacity
                  onPress={() => {
                    increaseQuantity(index)
                    addToCart(product)
                  }}
                  style={globalStyles.quantityButton}
                >
                  <Text style={globalStyles.quantityButtonText}>+</Text>
                </PressableOpacity>
              </View>
            </View>
          </View>
        </View>
      ))}
    </>
  )
}

export default InfoCard
