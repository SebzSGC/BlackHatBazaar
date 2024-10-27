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
import Tecnology from './src/components/Categories/Tecnology'
import Fashion from './src/components/Categories/Fashion'
import House from './src/components/Categories/House'
import Sport from './src/components/Categories/Sport'
import Toys from './src/components/Categories/Toys'
import PurchasesList from './src/components/Profileitems/PurchasesList'
import ProfileInfo from './src/components/Profileitems/ProfileInfo'
import FavoriteProducts from './src/components/Profileitems/FavoriteProducts'
import Support from './src/components/Profileitems/Support'
import Checkout from './src/components/basket/Checkout'
import PurchaseComplete from './src/components/Loading/PurchaseComplete'
import EditInfo from './src/components/Profileitems/EditInfo'
import { UserProvider } from './src/context/UserContext'
import { FirebaseContext, firebase } from './src/firebase'

function App() {
  return (
    <FirebaseContext.Provider value={{ firebase }}>
      <UserProvider>
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
                name="Tecnology"
                component={Tecnology}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Fashion"
                component={Fashion}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="House"
                component={House}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Toys"
                component={Toys}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Sport"
                component={Sport}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="PurchasesList"
                component={PurchasesList}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="ProfileInfo"
                component={ProfileInfo}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="FavoriteProducts"
                component={FavoriteProducts}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Support"
                component={Support}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Checkout"
                component={Checkout}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="PurchaseComplete"
                component={PurchaseComplete}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="EditInfo"
                component={EditInfo}
                options={{ headerShown: false }}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </GestureHandlerRootView>
      </UserProvider>
    </FirebaseContext.Provider>
  )
}

export default App
