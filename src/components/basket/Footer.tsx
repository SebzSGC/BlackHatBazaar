import React from 'react'
import { View, StyleSheet } from 'react-native'
import Total from './Total'
import RetroButton from '../RetroButton'
import { StackNavigationProp } from '@react-navigation/stack'
import { ViewsParams } from '../../types/ViewsParams'

type FooterProps = {
  navigation: StackNavigationProp<ViewsParams, 'Checkout'>
}

const Footer = ({ navigation }: FooterProps) => {
  return (
    <View style={styles.containerStyle}>
      <Total />
      <View style={styles.buttonContainerStyle}>
        <RetroButton
          title="Pagar"
          style={{
            width: '100%',
            height: 40,
          }}
          styleText={{ fontSize: 20 }}
          onPress={() => navigation.navigate('Checkout')}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    paddingRight: 15,
    paddingLeft: 15,
    borderTopWidth: 1,
    borderColor: '#e2e2e2',
  },
  buttonContainerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 5,
  },
  closeButtonStyle: {
    backgroundColor: '#7f8c8d',
    padding: 10,
    paddingRight: 30,
    paddingLeft: 30,
    borderRadius: 3,
  },
})

export default Footer
