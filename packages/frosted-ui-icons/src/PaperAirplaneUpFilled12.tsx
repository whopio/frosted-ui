import * as React from 'react';
import { IconProps } from './types';

export const PaperAirplaneUpFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="13"
      height="12"
      viewBox="0 0 13 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M4.22219 1.09086C4.96531 -0.360864 7.0399 -0.361006 7.78273 1.09086L11.7573 8.85942C12.6804 10.6644 10.8204 12.6269 8.96828 11.8028L6.75344 10.8164V6.75004C6.75344 6.33587 6.41759 6.00011 6.00344 6.00004C5.58922 6.00004 5.25344 6.33583 5.25344 6.75004V10.8164L3.03274 11.8047C1.18019 12.6288 -0.679145 10.6653 0.244649 8.86039L4.22219 1.09086Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

PaperAirplaneUpFilled12.category = 'Communication';

export default PaperAirplaneUpFilled12;
