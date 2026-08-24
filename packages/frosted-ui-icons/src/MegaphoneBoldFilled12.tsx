import * as React from 'react';
import { IconProps } from './types';

export const MegaphoneBoldFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="MegaphoneBoldFilled12"
      {...props}
    >
      <path
        d="M7.459.145C8.735-.214 9.999.745 10 2.07v.894c0 .04.027.074.065.084.059.016.136.04.225.072.175.064.414.17.658.342.513.36 1.05 1.013 1.051 2.038 0 1.025-.538 1.679-1.05 2.038-.246.172-.485.278-.66.342-.089.032-.165.056-.224.072-.038.01-.065.044-.065.083v.895c0 1.325-1.265 2.284-2.541 1.925l-1.077-.303c-.192-.054-.382.09-.382.289V11c0 .552-.448 1-1 1s-1-.448-1-1V1.117L7.459.145zM2 9.319l-.177-.048C.745 8.967 0 7.983 0 6.863V4.137c0-1.12.745-2.104 1.823-2.407L2 1.68v7.64z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

MegaphoneBoldFilled12.category = 'Objects';

export default MegaphoneBoldFilled12;
