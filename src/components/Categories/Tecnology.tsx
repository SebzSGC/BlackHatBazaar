import { View, Text, StyleSheet } from 'react-native'
import globalStyles from '../../styles/Global'
import ListOfCategories from '../ListOfCategories'
import Products from '../../utils/products'
import { ComponentCategoryProps } from '../../interfaces/CategoriesList'

const Tecnology = ({ navigation }: ComponentCategoryProps) => {
  return (
    <View style={styles.container}>
      <Text style={[globalStyles.retroHeader, styles.title]}>Tecnologia</Text>
      <ListOfCategories
        navigation={navigation}
        Products={Products}
        imgRute="tecnology"
        randomQuotes={[
          '¡Increíble!',
          '¡Asombroso!',
          '¡No lo puedo creer!',
          '¡Lo necesito!',
        ]}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    marginTop: 20,
  },
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    paddingTop: 10,
  },
})

export default Tecnology
