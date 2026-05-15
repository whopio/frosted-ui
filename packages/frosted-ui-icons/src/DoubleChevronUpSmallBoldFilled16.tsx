import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronUpSmallBoldFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M10.323 8.05579C10.9088 8.6415 11.8584 8.64148 12.4441 8.05579C13.0296 7.46999 13.0298 6.52037 12.4441 5.93469L9.29668 2.78723C8.58081 2.07157 7.41982 2.07166 6.7039 2.78723L3.55644 5.93469C2.97072 6.52042 2.97083 7.46998 3.55644 8.05579C4.14222 8.64156 5.09174 8.64156 5.67753 8.05579L7.9998 5.73352L10.323 8.05579ZM10.323 13.3058C10.9088 13.8915 11.8584 13.8915 12.4441 13.3058C13.0296 12.72 13.0298 11.7704 12.4441 11.1847L9.29668 8.03723C8.5808 7.32157 7.41983 7.32166 6.7039 8.03723L3.55644 11.1847C2.97071 11.7704 2.97083 12.72 3.55644 13.3058C4.14222 13.8916 5.09174 13.8916 5.67753 13.3058L7.9998 10.9835L10.323 13.3058Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleChevronUpSmallBoldFilled16.category = 'Arrows';

export default DoubleChevronUpSmallBoldFilled16;
