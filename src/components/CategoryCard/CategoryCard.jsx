import React from 'react'
import Link from 'next/link'
import { getImageUrl } from '../../utils/publicUrl'

export const CategoryCard = ({ props }) => {
  const { title, category, backImage, frontImage } = props

  return (
    <Link href={`/portfolio/${category}`}>
      <article>
        <img
          src={getImageUrl(backImage)}
          alt=""
          loading="lazy"
          width={300}
          height={200}
        />
        <div className="category-title">{title}</div>
        <img
          className="remove-bg"
          src={getImageUrl(frontImage)}
          alt=""
          loading="lazy"
          width={120}
          height={120}
        />
      </article>
    </Link>
  )
}
