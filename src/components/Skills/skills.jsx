import React from 'react'
import { getImageUrl } from '../../utils/publicUrl'

// Grouped by how central each stack is to the work, not by vendor: a flat
// grid of logos gives SAPUI5 and Terraform the same weight and dilutes the
// specialist signal. Groups with an `img` render the logo once on the
// heading and list their items as labels.
const skillGroups = [
  {
    group: 'Core SAP',
    img: 'sapui5.svg',
    items: [
      { name: 'SAPUI5' },
      { name: 'Fiori' },
      { name: 'OData' },
      { name: 'BTP' },
      { name: 'CAP' },
      { name: 'Cloud Foundry' },
      { name: 'Build Work Zone' },
      { name: 'Build Process Automation' },
      { name: 'Workflow' },
      { name: 'ABAP for S/4HANA' },
      { name: 'SAP BAS' },
    ],
  },
  {
    group: 'Fullstack',
    items: [
      { name: 'Javascript', img: 'js.svg' },
      { name: 'React', img: 'react.svg' },
      { name: 'Node.js', img: 'nodejs.png' },
      { name: 'GraphQL', img: 'GraphQL.png' },
      { name: 'MongoDB', img: 'mongodb.svg' },
    ],
  },
  {
    group: 'Cloud',
    img: 'aws.svg',
    items: [
      { name: 'Lambda' },
      { name: 'API Gateway' },
      { name: 'CloudFront' },
      { name: 'DynamoDB' },
      { name: 'Serverless Framework' },
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
        {group}
        {img && <SkillIcon img={img} />}
      </h3>
      <ul className={`skill-list${img ? ' skill-list--labels' : ''}`}>
        {items.map((item) => (
          <li key={item.name} className="skill-item">
            {item.name}
            {item.img && <SkillIcon img={item.img} />}
          </li>
        ))}
      </ul>
    </div>
  ))
