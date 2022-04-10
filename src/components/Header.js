import React from 'react'
import { useSwrQuery } from '../hooks/useSwrQuery'

export const Header = () => {
  const [data, isLoading, error] = useSwrQuery('https://api.github.com/users/supreetsingh247')

  return data && <div>Name: {data.name}</div>
}

export default Header
