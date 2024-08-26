import { Product } from '../interfaces/Product'
import { User } from '../interfaces/User'

export type ViewsParams = {
  Home: undefined
  Profile: User
  ProductDetail: User & Product
  Categories: Product[]
}
