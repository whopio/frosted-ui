import * as React from 'react';
import { IconProps } from './types';

export const MailSquare20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M13.6504 1C16.6048 1.00021 18.9998 3.3952 19 6.34961V13.6504C18.9998 16.6048 16.6048 18.9998 13.6504 19H6.34961C3.3952 18.9998 1.00021 16.6048 1 13.6504V6.34961C1.00021 3.3952 3.3952 1.00021 6.34961 1H13.6504ZM11.0283 10.8916C10.3733 11.1802 9.6267 11.1802 8.97168 10.8916L2.5 8.04004V13.6504C2.50021 15.7764 4.22362 17.4998 6.34961 17.5H13.6504C15.7764 17.4998 17.4998 15.7764 17.5 13.6504V8.04004L11.0283 10.8916ZM6.34961 2.5C4.22362 2.50021 2.50021 4.22362 2.5 6.34961V6.40039L9.57617 9.51855C9.8459 9.63741 10.1531 9.6374 10.4229 9.51855L17.5 6.40039V6.34961C17.4998 4.22362 15.7764 2.50021 13.6504 2.5H6.34961Z"
        fill={color}
      />
    </svg>
  );
};

MailSquare20.category = 'Communication';

export default MailSquare20;
