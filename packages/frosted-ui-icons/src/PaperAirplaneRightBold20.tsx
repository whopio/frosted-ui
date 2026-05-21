import * as React from 'react';
import { IconProps } from './types';

export const PaperAirplaneRightBold20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M17.5244 12.4297C19.4932 11.4093 19.4932 8.59277 17.5244 7.57232L5.54097 1.36138C2.92117 0.00365639 0.0648975 2.72841 1.29781 5.40923L3.30171 9.76665C3.36963 9.91446 3.36966 10.0847 3.30171 10.2325L1.29683 14.5938C0.064373 17.2746 2.92037 19.9984 5.53999 18.6407L17.5244 12.4297ZM16.6044 9.34771C17.1333 9.62205 17.1332 10.3789 16.6044 10.6534L4.6191 16.8653C3.68968 17.3469 2.67712 16.3809 3.11421 15.4297L5.1191 11.0674C5.12994 11.0438 5.14025 11.02 5.15035 10.9961H9.26851C9.82058 10.9959 10.2685 10.5483 10.2685 9.99614C10.2684 9.44407 9.82054 8.9964 9.26851 8.99614H5.14742C5.13811 8.97431 5.12904 8.95234 5.1191 8.93071L3.11519 4.57329C2.67781 3.62212 3.69054 2.65604 4.62007 3.13774L16.6044 9.34771Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

PaperAirplaneRightBold20.category = 'Communication';

export default PaperAirplaneRightBold20;
