import React from 'react'
import { getImageUrl } from '../../utils/publicUrl'

const skills = [
  { name: 'Javascript', img: 'js.svg' },
  { name: 'SAPUI 5', img: 'sapui5.svg' },
  { name: 'React', img: 'react.svg' },
  { name: 'Node Js', img: 'nodejs.png' },
  { name: 'MongoDB', img: 'mongodb.svg' },
  { name: 'GraphQL', img: 'GraphQL.png' },
  { name: 'Docker', img: 'docker.png' },
  { name: 'Terraform', img: 'terraform.png' },
]

export const Skills = () => {
  return skills.map((skill) => (
    <h3 key={skill.name} className="info-subtitle">
      <img
        className="icons-img"
        src={getImageUrl(`images/icons/${skill.img}`)}
        alt=""
        width={40}
        height={40}
        loading="lazy"
      />
      {skill.name}
    </h3>
  ))
}
