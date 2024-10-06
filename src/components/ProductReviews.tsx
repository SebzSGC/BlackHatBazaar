import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import globalStyles from '../styles/Global'
import reviews from '../utils/reviews'

const ProductReviews = () => {
  return (
    <View style={styles.container}>
      {reviews.length === 0 ? (
        <Text style={[globalStyles.retroTitle, styles.noReviewText]}>
          No hay reseñas aún.
        </Text>
      ) : (
        reviews.map((review, index) => (
          <View key={index} style={styles.reviewContainer}>
            <Text style={[globalStyles.retroTitle, styles.username]}>
              {review.username}
            </Text>
            <View style={styles.starsContainer}>
              {Array.from({ length: 5 }).map((_, i) => (
                <Text
                  key={i}
                  style={[
                    styles.star,
                    { color: i < review.rating ? '#FFD700' : '#ccc' },
                  ]}
                >
                  ★
                </Text>
              ))}
            </View>
            <Text style={styles.comment}>{review.comment}</Text>
          </View>
        ))
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    padding: 16,
    backgroundColor: '#202020',
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#FFF',
  },
  reviewContainer: {
    marginBottom: 20,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  noReviewText: {
    fontSize: 16,
    color: '#FFF',
    textAlign: 'center',
  },
  username: {
    color: '#FFF',
  },
  starsContainer: {
    flexDirection: 'row',
    marginVertical: 5,
  },
  star: {
    fontSize: 18,
    marginRight: 5,
  },
  comment: {
    fontSize: 14,
    color: '#CCC',
    marginTop: 5,
  },
})

export default ProductReviews
