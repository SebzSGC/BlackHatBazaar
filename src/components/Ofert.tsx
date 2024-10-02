import { View, Text, StyleSheet } from 'react-native'
import globalStyles from '../styles/Global'
import ListOfCategories from './ListOfCategories'
import { ViewsParams } from '../types/ViewsParams'
import { StackNavigationProp } from '@react-navigation/stack'

type ListOfCategoriesProp =
  | StackNavigationProp<ViewsParams, 'ListOfProducts'>
  | StackNavigationProp<ViewsParams, 'Home'>

interface ProductProps {
  navigation: ListOfCategoriesProp
}

const Ofert = ({ navigation }: ProductProps) => {
  return (
    <View style={styles.container}>
      <Text style={[globalStyles.retroHeader, styles.title]}>Tecnologia</Text>
      <ListOfCategories navigation={navigation} />
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

export default Ofert
