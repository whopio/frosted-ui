import * as React from 'react';
import { IconProps } from './types';

export const ShieldHalfBoldFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="17"
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ShieldHalfBoldFilled16"
      {...props}
    >
      <path
        d="M7.25391 0.135988C7.73441 -0.0453295 8.26559 -0.0453293 8.74609 0.135988L13.6338 1.98071C14.4557 2.29092 14.9998 3.07783 15 3.9563V8.98462C15 11.1291 13.3582 12.8032 11.9531 13.8723C10.4859 14.9886 8.92895 15.7082 8.50586 15.8948C8.18119 16.0379 7.8188 16.0379 7.49414 15.8948C7.07105 15.7082 5.51409 14.9886 4.04688 13.8723C2.64177 12.8032 1 11.1291 1 8.98462V3.9563C1.00017 3.07783 1.54431 2.29092 2.36621 1.98071L7.25391 0.135988ZM8 13.9241C8.57705 13.6506 9.6959 13.0766 10.7422 12.2805C12.088 11.2565 13 10.1074 13 8.98462V3.9563C12.9998 3.90998 12.9711 3.86818 12.9277 3.85181L8.03906 2.00708C8.02646 2.00238 8.01317 2.00025 8 2.00025V13.9241Z"
        fill={color}
      />
    </svg>
  );
};

ShieldHalfBoldFilled16.category = 'Security';

export default ShieldHalfBoldFilled16;
