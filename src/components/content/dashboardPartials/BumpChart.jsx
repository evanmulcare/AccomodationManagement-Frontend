import React from 'react'
import { ResponsiveBump } from '@nivo/bump'
import { BumpChartData } from '../../../data/BumpChartData'

const BumpChart = () => {
  return (
    <div style={{ height: "50vh", maxWidth: "100%" }}>
      <ResponsiveBump
        data={BumpChartData}
        xPadding={0.5}
        colors={{ scheme: 'accent' }}
        lineWidth={3}
        activeLineWidth={6}
        inactiveLineWidth={3}
        startLabel={true}
        startLabelTextColor={{ from: 'color', modifiers: [] }}
        activePointSize={16}
        inactivePointSize={0}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={3}
        activePointBorderWidth={3}
        pointBorderColor={{ from: 'serie.color' }}
        enableGridY={false}
        axisTop={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: '',
          legendPosition: 'middle',
          legendOffset: 32
        }}
        axisLeft={null}
        margin={{ top: 40, right: 100, bottom: 40, left: 60 }}
        axisRight={null}
        isInteractive={true}
      />
    </div>
  );
};

export default BumpChart
