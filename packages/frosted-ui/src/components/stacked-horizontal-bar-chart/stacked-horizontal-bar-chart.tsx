'use client';

import classNames from 'classnames';
import * as React from 'react';

import { colorProp } from '../../helpers';
import { Tooltip } from '../tooltip';

type StackedHorizontalBarChartData = {
  label: string | ((value: number, percent: string) => string); // label or function to generate label
  value: number; // Numeric value for the bar
  color: (typeof colorProp.values)[number]; // Color for the bar
};

interface StackedHorizontalBarChartOwnProps extends React.ComponentProps<'div'> {}

interface StackedHorizontalBarChartProps extends React.ComponentProps<'div'>, StackedHorizontalBarChartOwnProps {
  data: StackedHorizontalBarChartData[];
}

const StackedHorizontalBarChart = (props: StackedHorizontalBarChartProps) => {
  const { className, data, ...rootProps } = props;

  const sum = data.reduce((acc, dataPoint) => acc + dataPoint.value, 0);

  return (
    <div {...rootProps} className={classNames('fui-StackedHorizontalBarChart', className)}>
      {data.map((dataPoint, i) => {
        // Round to max 2 decimal places
        const percent = `${Math.round((dataPoint.value / sum) * 100 * 100) / 100}%`;
        const label = typeof dataPoint.label === 'string' ? dataPoint.label : dataPoint.label(dataPoint.value, percent);

        const ariaLabel = typeof dataPoint.label === 'string' ? `${dataPoint.label} ${percent}` : label;

        return (
          <Tooltip
            content={label}
            key={i}
            delayDuration={150}
            className="fui-StackedHorizontalBarChartTooltip"
            data-accent-color={dataPoint.color}
          >
            <div
              data-accent-color={dataPoint.color}
              aria-label={ariaLabel}
              className="fui-StackedHorizontalBarChartBar"
              style={{ width: percent }}
            />
          </Tooltip>
        );
      })}
    </div>
  );
};

StackedHorizontalBarChart.displayName = 'StackedHorizontalBarChart';

export { StackedHorizontalBarChart };
export type { StackedHorizontalBarChartProps };
