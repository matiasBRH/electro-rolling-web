import React from 'react'
import {useParams} from 'react-router-dom'

const CategoryScreen = () => {
  const {category}=useParams()
  return (
    <div>CategoryScreen</div>
  )
}

export default CategoryScreen