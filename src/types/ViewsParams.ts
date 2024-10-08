import { Product, Purchase } from '../interfaces/Product'
import { User } from '../interfaces/User'

export type ViewsParams = {
  Home: undefined
  Profile: User
  ProductDetail: { product: Product }
  Categories: { products: Product[] }
  ListOfProducts: { products: Product[] }
  CategoriesList: {
    products: Product[]
    imgRute: string
    randomQuotes: string[]
  }
  Login: undefined
  CreateAccount: undefined
  CartShop: undefined
  Tecnology: undefined
  Fashion: undefined
  House: undefined
  Toys: undefined
  Sport: undefined
  PurchasesList: { purchases: Purchase[] }
  ProfileInfo: undefined
  FavoriteProducts: undefined
  Support: undefined
  Checkout: undefined
  PurchaseComplete: undefined
  EditInfo: { user: User }
}
