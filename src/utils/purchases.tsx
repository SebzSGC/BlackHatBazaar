import { Purchase } from '../interfaces/Product'
import products from './products'
const purchases: Purchase[] = [
  {
    id: products[0].id,
    product: products[0],
    quantity: 2,
    totalPrice: products[0].price * 2,
    date: '2024-10-01',
  },
  {
    id: products[1].id,
    product: products[1],
    quantity: 1,
    totalPrice: products[1].price,
    date: '2024-10-02',
  },
  {
    id: products[2].id,
    product: products[2],
    quantity: 3,
    totalPrice: products[2].price * 3,
    date: '2024-10-03',
  },
  {
    id: products[3].id,
    product: products[3],
    quantity: 4,
    totalPrice: products[3].price * 4,
    date: '2024-10-04',
  },
  {
    id: products[4].id,
    product: products[4],
    quantity: 1,
    totalPrice: products[4].price,
    date: '2024-10-05',
  },
]

export default purchases
