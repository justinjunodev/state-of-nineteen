import React from 'react'
import useSiteMeta from '../../hooks/useSiteMeta'

const Sidebar = () => {
  const { title, description } = useSiteMeta()
  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  )
}

export default Sidebar
