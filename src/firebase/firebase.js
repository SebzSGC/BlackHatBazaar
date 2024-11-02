import app from 'firebase/compat/app'
import firebaseConfig from './config'
import 'firebase/compat/firestore'
import 'firebase/compat/storage'

class Firebase {
  constructor() {
    if (!app.apps.length) {
      app.initializeApp(firebaseConfig)
    }
    this.db = app.firestore()
    this.storage = app.storage()
  }

  getCollection(collectionName) {
    return this.db.collection(collectionName).get()
  }

  addDocument(collectionName, data) {
    return this.db.collection(collectionName).add(data)
  }

  updateCart(userId, cartItem, action = 'add') {
    const userRef = this.db.collection('usuarios').doc(userId)

    if (action === 'add') {
      return userRef.update({
        cart: app.firestore.FieldValue.arrayUnion(cartItem),
      })
    } else if (action === 'remove') {
      return userRef.update({
        cart: app.firestore.FieldValue.arrayRemove(cartItem),
      })
    } else {
      throw new Error('Acción no válida. Usa "add" o "remove".')
    }
  }

  updateFavs(userId, Item, action = 'add') {
    const userRef = this.db.collection('usuarios').doc(userId)

    if (action === 'add') {
      return userRef.update({
        favorites: app.firestore.FieldValue.arrayUnion(Item),
      })
    } else if (action === 'remove') {
      return userRef.update({
        favorites: app.firestore.FieldValue.arrayRemove(Item),
      })
    } else {
      throw new Error('Acción no válida. Usa "add" o "remove".')
    }
  }

  async getFavorites(userId) {
    const userRef = this.db.collection('usuarios').doc(userId)
    const userDoc = await userRef.get()

    if (userDoc.exists) {
      return userDoc.data().favorites || []
    } else {
      throw new Error('El usuario no existe')
    }
  }

  removeFavorite(userId, product) {
    const userRef = this.db.collection('usuarios').doc(userId)
    return userRef.update({
      favorites: app.firestore.FieldValue.arrayRemove(product),
    })
  }
}

const firebase = new Firebase()
export default firebase
