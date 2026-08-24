import * as React from 'react';
import { IconProps } from './types';

export const BeakerFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="BeakerFilled24"
      {...props}
    >
      <path
        d="M17.5 1c.415 0 .75.336.75.75s-.335.75-.75.75H16v6.853c0 .263.084.519.238.732l3.997 5.534.018.023 2.164 2.997c1.314 1.819.015 4.36-2.228 4.36H3.813c-2.244 0-3.542-2.541-2.229-4.36l6.18-8.554c.154-.213.236-.47.236-.732V2.5H6.5c-.414 0-.75-.336-.75-.75S6.086 1 6.5 1h11zM8.676 15.43c-.949-.17-2.034-.076-3.406.668l-2.47 3.42c-.597.826-.007 1.982 1.013 1.982h16.376c1.02 0 1.61-1.156 1.013-1.983l-2.158-2.986c-1.416.938-2.684 1.282-3.883 1.23-1.334-.06-2.484-.61-3.498-1.123-1.056-.535-1.965-1.025-2.987-1.209z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

BeakerFilled24.category = 'Objects';

export default BeakerFilled24;
