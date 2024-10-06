import { Double } from 'react-native/Libraries/Types/CodegenTypes'

export interface Product {
  price: Double
  description: string
  stock: string
  category: string
  image: any
  id: string
  title: string
  amountTaken: number
  userId: string
  onSale: boolean
  oldPrice?: Double
}

export interface Purchase {
  id: Product['id']
  product: Product
  quantity: number
  totalPrice: number
  date: string
}
