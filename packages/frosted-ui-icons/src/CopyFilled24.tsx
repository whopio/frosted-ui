import * as React from 'react';
import { IconProps } from './types';

export const CopyFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M19.6475 7C21.4975 7.00001 22.9978 8.49965 22.998 10.3496V19.6494C22.9978 21.4993 21.4975 22.999 19.6475 22.999H10.3496C8.49979 22.9988 7.00026 21.4992 7 19.6494V10.3496C7.00022 8.49977 8.49977 7.00021 10.3496 7H19.6475ZM13.6504 1C15.5002 1.00021 16.9997 2.49983 17 4.34961V5.5H10.3496C7.67134 5.50021 5.50021 7.67134 5.5 10.3496V17H4.34961C2.49964 16.9998 1 15.4994 1 13.6494V4.34961C1.00029 2.49984 2.49982 1.00021 4.34961 1H13.6504Z"
        fill={color}
      />
    </svg>
  );
};

CopyFilled24.category = 'Interface General';

export default CopyFilled24;
