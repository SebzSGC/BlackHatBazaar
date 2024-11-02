export interface User {
  id: string
  name: string
  email: string
  password: string
  avatar: any
  products: any[]
  cart: any[]
  orders: any[]
  favorites: any[]
  address: adress[]
  phone: string
  role: string
  token: string
}

interface adress {
  city: string
  postalCode: string
  region: string
  street: string
}
