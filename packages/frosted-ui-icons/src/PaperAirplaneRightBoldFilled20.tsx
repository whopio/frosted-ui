import * as React from 'react';
import { IconProps } from './types';

export const PaperAirplaneRightBoldFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M17.5234 12.4291C19.4923 11.4087 19.4921 8.5922 17.5234 7.57167L5.54004 1.36073C2.92024 0.0030098 0.0639687 2.72776 1.29688 5.40858L2.94727 8.9955L9.2666 8.9955C9.81889 8.9955 10.2666 9.44321 10.2666 9.9955C10.2665 10.5477 9.81884 10.9955 9.2666 10.9955L2.9502 10.9955L1.2959 14.5932C0.0636711 17.2739 2.91951 19.9977 5.53906 18.64L17.5234 12.4291Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

PaperAirplaneRightBoldFilled20.category = 'Communication';

export default PaperAirplaneRightBoldFilled20;
