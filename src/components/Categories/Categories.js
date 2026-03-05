import React, { useState, useEffect } from 'react'
import { CategoryCard } from '../CategoryCard/CategoryCard'
import { getDataUrl } from '../../utils/publicUrl'

export const Categories = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    fetch(getDataUrl('data/categories.json'))
      .then((response) => response.json())
      .then((data) => setCategories(data))
      .catch((err) => console.error('Error al cargar categorías:', err))
  }, [])

  return (
    <section className="categories-container" id="portfolio">
      <h2 className="categories-title">Portfolio</h2>
      <div className="categories">
        {categories.map((cat) => (
          <CategoryCard key={cat.category} props={cat} />
        ))}
      </div>
    </section>
  )
}
