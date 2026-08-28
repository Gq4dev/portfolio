import React from 'react'
import { getImageUrl } from '../../utils/publicUrl'

// Grouped by how central each stack is to the work, not by vendor: a flat
// grid of logos gives SAPUI5 and Terraform the same weight and dilutes the
// specialist signal. Items always read as labels; a group carries a logo
// only where one brand actually covers all of it, which is why Fullstack
// and AI & Automation have none.
const skillGroups = [
  {
    group: 'SAP',
    img: 'sapui5.svg',
    items: [
      'UI5',
      'Fiori',
      'OData',
      'BTP',
      'CAP',
      'BPA',
      'Cloud Foundry',
      'Build Work Zone',
      'Build Process Automation',
      'Workflow',
      'SAP BAS',
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
      'Lambda',
      'API Gateway',
      'CloudFront',
      'DynamoDB',
      'Serverless Framework',
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

export const Skills = () =>
  skillGroups.map(({ group, img, items }) => (
    <div key={group} className="skill-group">
      <h3 className="skill-group-title">
        {group}
        {img && (
          <img
            className="skill-group-logo"
            src={getImageUrl(`images/icons/${img}`)}
            alt=""
            width={40}
            height={40}
            loading="lazy"
          />
        )}
      </h3>
      <ul className="skill-list">
        {items.map((item) => {
          const { name, img: logo } =
            typeof item === 'string' ? { name: item } : item

          return (
            <li key={name} className={`skill-item${logo ? ' skill-item--logo' : ''}`}>
              {logo && (
                <img
                  src={getImageUrl(`images/icons/${logo}`)}
                  alt=""
                  width={32}
                  height={32}
                  loading="lazy"
                />
              )}
              {name}
            </li>
          )
        })}
      </ul>
    </div>
  ))
