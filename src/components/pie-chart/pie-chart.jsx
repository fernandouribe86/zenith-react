import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, ResponsiveContainer, Cell, Legend } from 'recharts';

import { useEffect, useState } from 'react';

import './pie-chart.scss';

// const data = [
  // { name: 'HTML', value: 400 },
  // { name: 'CSS', value: 300 },
  // { name: 'SCSS', value: 300 },
  // { name: 'JavaScript', value: 200 },
  // { name: 'TypeScript', value: 100 },
// ];

// const [data, setData] = useState([{ name: 'HTML', value: 400 },
// { name: 'CSS', value: 300 },
// { name: 'SCSS', value: 300 },
// { name: 'JavaScript', value: 200 },
// { name: 'TypeScript', value: 100 },]);
    // useEffect(() => {
    //   const getData = () => {
    //     const value = ['HTML', 'CCS', 'SCSS', 'JavaScript', 'TypeScript'];
    //     const data = this.data;
    //   };
    // });

const renderActiveShape = (props) => {

  const RADIAN = Math.PI / 180;
  const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent, value } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? 'start' : 'end';

  return (
    <g>

      {/* Wedge Label when Hovered */}
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill} className="pieText">
        {payload.name}
      </text>

      {/* Pie Wedge */}
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />

      {/* Section Stroke outside of pie */}
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />

     {/* Line from chart to Percentagel */} 
      <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />

    {/*Circle next to the Percentage */}
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />

      {/* Percent Labels l */}
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#FFE6DA" className="pieText">
        {`${(percent * 100).toFixed(2)}%`}
      </text>

    </g>
  );
};

export default class PortfolioPieChart extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/pie-chart-with-customized-active-shape-y93si';

  state = {
    activeIndex: 0,
    data: [
      { name: 'HTML', value: 400 },
    { name: 'CSS', value: 300 },
    { name: 'SCSS', value: 300 },
    { name: 'JavaScript', value: 200 },
    { name: 'TypeScript', value: 100 }
  ],
  };

  onPieEnter = (_, index) => {
    this.setState({
      activeIndex: index,
    });
  };

  render() {

    const colors = ['#91100c', '#B83D00', '#FF6508', '#FF853D', '#FFA067'];

    return (
        <PieChart width={410} height={300} id="pieChart">
          <Pie
            activeIndex={this.state.activeIndex}
            activeShape={renderActiveShape}
            data={this.props.data}
            cx="50%"
            cy="50%"
            innerRadius={50}
            outerRadius={80}
            stroke="none"
            fill="#91100c"
            dataKey="value"
            onMouseEnter={this.onPieEnter}>
          {this.props.data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />))}
              </Pie>
        </PieChart>
    );
  }
}
