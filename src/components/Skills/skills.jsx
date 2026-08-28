import React from 'react'
import { getImageUrl } from '../../utils/publicUrl'

// Groups with a `img` render the logo once on the group heading and list
// their items as plain labels — the SAP products share a single brand mark.
// Groups without it carry a distinct logo per item.
const skillGroups = [
  {
    group: 'SAP',
    img: 'sapui5.svg',
    items: [
      { name: 'SAPUI5' },
      { name: 'Fiori' },
      { name: 'BTP' },
      { name: 'CAP' },
      { name: 'BPA' },
    ],
  },
  {
    group: 'Frontend',
    items: [
      { name: 'Javascript', img: 'js.svg' },
      { name: 'React', img: 'react.svg' },
    ],
  },
  {
    group: 'Backend & Data',
    items: [
      { name: 'Node.js', img: 'nodejs.png' },
      { name: 'MongoDB', img: 'mongodb.svg' },
      { name: 'GraphQL', img: 'GraphQL.png' },
    ],
  },
  {
    group: 'Cloud & DevOps',
    items: [
      { name: 'Docker', img: 'docker.png' },
      { name: 'Terraform', img: 'terraform.png' },
      { name: 'AWS', img: 'aws.svg' },
    ],
  },
  {
    group: 'AI & Automation',
    items: [
      { name: 'Claude', img: 'claude.svg' },
      { name: 'n8n', img: 'n8n.svg' },
    ],
  },
]

const SkillIcon = ({ img }) => (
  <img
    className="icons-img"
    src={getImageUrl(`images/icons/${img}`)}
    alt=""
    width={40}
    height={40}
    loading="lazy"
  />
)

export const Skills = () =>
  skillGroups.map(({ group, img, items }) => (
    <div key={group} className="skill-group">
      <h3 className="skill-group-title">
        {img && <SkillIcon img={img} />}
        {group}
      </h3>
      <ul className={`skill-list${img ? ' skill-list--labels' : ''}`}>
        {items.map((item) => (
          <li key={item.name} className="skill-item">
            {item.img && <SkillIcon img={item.img} />}
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  ))
