import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { enableScreens } from 'react-native-screens'
import { ViewsParams } from './src/types/ViewsParams'

enableScreens()

const Stack = createStackNavigator<ViewsParams>()

import Login from './src/screens/Login'
import Register from './src/screens/Register'
import Home from './src/screens/Home'
import RetroProfile from './src/screens/RetroProfile'
import ProductDetail from './src/screens/ProductDetail'
import Categories from './src/components/Categories'
import CartShop from './src/screens/CartShop'
import Ofert from './src/components/Ofert'

function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="CreateAccount"
            component={Register}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Profile"
            component={RetroProfile}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ProductDetail"
            component={ProductDetail}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Categories"
            component={Categories}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="CartShop"
            component={CartShop}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Ofert"
            component={Ofert}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  )
}

export default App
