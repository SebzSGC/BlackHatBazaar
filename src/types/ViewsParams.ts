import { Product } from '../interfaces/Product'
import { User } from '../interfaces/User'

export type ViewsParams = {
  Home: undefined
  Profile: User
  ProductDetail: { product: Product }
  Categories: Product[]
  ListOfProducts: Product[]
  Login: undefined
  CreateAccount: undefined
}
