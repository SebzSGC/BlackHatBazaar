import { Product } from '../interfaces/Product'

const products: Product[] = [
  {
    id: '1',
    title: 'Neon Hacker Hoodie',
    price: 59.99,
    description:
      'A glowing hoodie designed for the modern hacker, complete with neon accents.',
    stock: '15',
    category: 'Clothing',
    image: require('../assets/img/keybord.jpeg'),
    userId: 'user123',
    amountTaken: 1,
    onSale: false,
  },
  {
    id: '2',
    title: 'Cyberpunk LED Mask',
    price: 89.99,
    description:
      'An LED mask inspired by cyberpunk aesthetics, perfect for any futuristic party.',
    stock: '30',
    category: 'Accessories',
    image: require('../assets/img/monitor.jpeg'),
    userId: 'user456',
    amountTaken: 3,
    onSale: false,
  },
  {
    id: '3',
    title: 'Glitch Sneakers',
    price: 129.99,
    description:
      'High-tech sneakers with a glitch effect, blending style with comfort.',
    stock: '20',
    category: 'Footwear',
    image: require('../assets/img/mouse.jpeg'),
    userId: 'user789',
    amountTaken: 1,
    onSale: false,
  },
  {
    id: '4',
    title: 'Data Miner Gloves',
    price: 45.0,
    description:
      'Ergonomic gloves designed for comfort during long data mining sessions.',
    stock: '50',
    category: 'Accessories',
    image: require('../assets/img/monitor.jpeg'),
    userId: 'user123',
    amountTaken: 5,
    onSale: false,
  },
  {
    id: '5',
    title: 'Quantum Processor T-Shirt',
    price: 35.99,
    description:
      'A T-shirt featuring a graphic of a quantum processor, perfect for tech enthusiasts.',
    stock: '25',
    category: 'Clothing',
    image: require('../assets/img/keybord.jpeg'),
    userId: 'user456',
    amountTaken: 2,
    oldPrice: 45.99,
    onSale: true,
  },
]

export default products
