import * as React from 'react';
import { IconProps } from './types';

export const XMarkBold24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M20.2935 2.2926C20.6839 1.90248 21.3171 1.90245 21.7075 2.2926C22.0978 2.68304 22.0977 3.31617 21.7075 3.70666L13.4136 11.9996L21.7075 20.2936C22.0977 20.6841 22.0978 21.3172 21.7075 21.7076C21.3171 22.0978 20.684 22.0977 20.2935 21.7076L11.9995 13.4147L3.70755 21.7067C3.31703 22.0972 2.68304 22.0972 2.29251 21.7067C1.90263 21.3162 1.90236 20.6829 2.29251 20.2926L10.5855 11.9996L2.29251 3.70764C1.90231 3.31733 1.90268 2.68412 2.29251 2.29358C2.68303 1.90306 3.31703 1.90305 3.70755 2.29358L11.9995 10.5856L20.2935 2.2926Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

XMarkBold24.category = 'Interface General';

export default XMarkBold24;
