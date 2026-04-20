import * as React from 'react';
import { IconProps } from './types';

export const ConnectionFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M19.1045 12.0846C20.2924 12.7695 20.2925 14.4838 19.1045 15.1686L11.3711 19.6246C10.5211 20.1142 9.47381 20.1137 8.62402 19.6237L0.900391 15.1686C-0.286565 14.4837 -0.287216 12.7699 0.899414 12.0846L2.9834 10.8815L7.87402 13.7028C9.18746 14.4604 10.8053 14.4606 12.1191 13.7037L17.0176 10.8815L19.1045 12.0846ZM8.62402 0.40686C9.47415 -0.0836127 10.5217 -0.0832865 11.3721 0.40686L19.1055 4.86389C20.2932 5.54889 20.2934 7.2641 19.1055 7.94885L11.3721 12.4039C10.5221 12.8936 9.47482 12.8938 8.625 12.4039L0.901367 7.94788C-0.285779 7.26304 -0.286371 5.55015 0.900391 4.86487L8.62402 0.40686Z"
        fill={color}
      />
    </svg>
  );
};

ConnectionFilled20.category = 'Interface General';

export default ConnectionFilled20;
