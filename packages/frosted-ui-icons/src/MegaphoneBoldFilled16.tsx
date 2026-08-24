import * as React from 'react';
import { IconProps } from './types';

export const MegaphoneBoldFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="MegaphoneBoldFilled16"
      {...props}
    >
      <path
        d="M10.104 1.024C11.546.59 12.998 1.673 13 3.179v1.506c0 .133.088.248.213.293.062.022.124.047.187.074.357.156.765.412 1.083.83.329.43.517.975.517 1.617 0 .643-.188 1.188-.517 1.619-.318.418-.726.672-1.083.829-.063.027-.125.052-.187.074-.125.045-.213.16-.213.293v1.506c0 1.507-1.453 2.587-2.896 2.154l-1.931-.58c-.086-.026-.173.04-.173.129 0 .828-.672 1.5-1.5 1.5S5 14.35 5 13.523V2.555l5.104-1.531zM3 11.844l-.04-.012C1.797 11.482 1 10.412 1 9.197V5.8c0-1.214.797-2.285 1.96-2.634L3 3.155v8.688z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

MegaphoneBoldFilled16.category = 'Objects';

export default MegaphoneBoldFilled16;
