import * as React from 'react';
import { IconProps } from './types';

export const FountainPenBold12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 13 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="FountainPenBold12"
      {...props}
    >
      <path
        d="M6.375.926C6.968-.069 8.29-.292 9.174.404l.17.151 3.1 3.101c.874.874.691 2.337-.37 2.969l-1.458.866-1.157 3.244c-.234.656-.811 1.131-1.5 1.236l-6.714 1.017c-.34.052-.685-.061-.928-.304s-.356-.589-.304-.929l1.016-6.713.024-.128c.141-.633.598-1.153 1.213-1.373l3.242-1.157.867-1.458zm-3.229 4.6l-.5 3.295 1.16-1.159C3.897 7.005 4.46 6.5 5.143 6.5c.748 0 1.354.606 1.354 1.354 0 .68-.503 1.241-1.157 1.336l-1.162 1.164 3.294-.5L8.478 7.04l-2.52-2.519-2.812 1.004zm4.455-2.425l2.296 2.297.77-.457-2.61-2.609-.456.769z"
        fill={color}
      />
    </svg>
  );
};

FountainPenBold12.category = 'Interface General';

export default FountainPenBold12;
