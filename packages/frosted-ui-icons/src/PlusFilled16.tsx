import * as React from 'react';
import { IconProps } from './types';

export const PlusFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M8 0.650391C8.60751 0.650391 9.09961 1.14249 9.09961 1.75V6.90039H14.25C14.8575 6.90039 15.3496 7.39249 15.3496 8C15.3496 8.60751 14.8575 9.09961 14.25 9.09961H9.09961V14.25C9.09961 14.8575 8.60751 15.3496 8 15.3496C7.39249 15.3496 6.90039 14.8575 6.90039 14.25V9.09961H1.75C1.14249 9.09961 0.650391 8.60751 0.650391 8C0.650391 7.39249 1.14249 6.90039 1.75 6.90039H6.90039V1.75C6.90039 1.14249 7.39249 0.650391 8 0.650391Z"
        fill={color}
      />
    </svg>
  );
};

PlusFilled16.category = 'Interface General';

export default PlusFilled16;
