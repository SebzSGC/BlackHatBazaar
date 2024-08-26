import { Product } from '../interfaces/Product'
import { User } from '../interfaces/User'

export type ViewsParams = {
  Home: User
  Profile: User
  ProductDetail: User & Product
  categories: Product[]
}
