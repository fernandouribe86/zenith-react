/* eslint-disable max-classes-per-file */
import React, { PureComponent } from 'react';
import { Treemap, ResponsiveContainer, Tooltip } from 'recharts';

import './tree-map.scss';

const data = [
  {
    name: 'CREATIVE',
    children: [
      { name: 'Musician', size: 1500 },
      { name: 'Graphic Designer', size: 2000 },
      { name: 'Lateral Thinker', size: 3500 },
      { name: 'Problem Solver', size: 10000 },
      { name: 'Innovative', size: 25000 },
    ],
  },
  {
    name: 'SERVANT LEADER',
    children: [
      { name: 'Lead from the Front', size: 5000 },
      { name: 'Team Player', size: 6000 },
      { name: 'Active Listener', size: 4500 },
      { name: 'Collaborative', size: 8000 },
      { name: 'Talent Development', size: 8000 },
      { name: 'Prioritizes Diversity', size: 11000 },
      { name: 'Seeks Win-Win-Win', size: 5000 },
      { name: 'Goal-Oriented', size: 12000 },
    ],
  },
  {
    name: 'RESILIENT',
        children: [
          { name: 'Gritty', size: 15000 },
          { name: 'Self-Starter', size: 8000 },
          { name: 'Disciplined', size: 9317 },
          { name: 'Consistent', size: 7000 },
          { name: 'Dependable', size: 8000 },
          { name: 'Insistent', size: 6000 },
        ],
  },
  {
    name: 'SCHOLAR',
    children: [
      { name: 'Academic', size: 7313 },
      { name: 'Thirsty for Knowledge', size: 6880 },
      { name: 'Inquisitive', size: 10000 },
      { name: 'Always Learning', size: 8000 },
    ],
  },
  {
    name: 'EXPERIENCED',
    children: [
      { name: 'Automotive', size: 22000 },
      { name: 'Financial Planner', size: 10000 },
      { name: 'VP of Operations', size: 8000 },
      { name: 'Graphic Designer', size: 6000 },
      { name: 'Web Developer', size: 2000 },
    ],
  },
];

const COLORS = ['#420200', '#91100c', '#953200', '#FF6508', '#FF853D', '#FFA067'];

class SkillsMap extends PureComponent {
  render() {
    const { root, depth, x, y, width, height, index, payload, colors, rank, name } = this.props;

    return (
      <g>
        {/* GRIDLINES */}
        <rect
          x={x}
          y={y}
          width={width}
          height={height}
          style={{
            fill: depth < 2 ? colors[Math.floor((index / root.children.length) * 6)] : 'none',
            stroke: 'var(--zgold)',
            strokeWidth: 3 / (depth + 1e-10),
            strokeOpacity: .5 / (depth + 1e-10),
          }}
        />
        {depth === 1 ? (
          <text x={x + width / 2} y={y + height / 2 + 7} 
          textAnchor="middle" 
          fill="#FFE6DA" 
          fontSize={11} 
          id="gridName-label">
            {name}
          </text>
        ) : null}
        
        {/* Removed Box Label */}
        {/* {depth === 1 ? (
          <text x={x + 4} y={y + 18} fill="#000" fontSize={16} fillOpacity={0.9}>
            {index + 1}
          </text>
        ) : null} */}

      </g>
    );
  }
}

function CustomTooltip({ active}){
  if (active){
    return(
      <div id="tooltip">
        <h4 className="tooltipHeader">Test</h4>
      </div>
    )
  }
}

export default class SkillsTree extends PureComponent {

  
  render() {

    
    return (
      <ResponsiveContainer width="100%" height="100%">
        <Treemap
          width={300}
          height={200}
          data={data}
          dataKey="size"
          id="treeMap"
          ratio={4 / 3}
          fill="#8884d8"
          content={<SkillsMap colors={COLORS} />}>
            <Tooltip 
             id="tooltip"
            content={<CustomTooltip />}
            />
          </Treemap>
      </ResponsiveContainer>
    );
  }
}
