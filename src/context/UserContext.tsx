import React, { createContext, useState, useContext } from 'react'
import { User } from '../interfaces/User'
import testUser from '../utils/user'

interface UserContextType {
  user: User
  updateUser: (updatedUser: User) => void
}

const UserContext = createContext<UserContextType | undefined>(undefined)

export const useUser = () => {
  const context = useContext(UserContext)
  if (!context) {
    throw new Error('useUser must be used within a UserProvider')
  }
  return context
}

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User>(testUser)

  const updateUser = (updatedUser: User) => {
    setUser(updatedUser)
  }

  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {children}
    </UserContext.Provider>
  )
}
