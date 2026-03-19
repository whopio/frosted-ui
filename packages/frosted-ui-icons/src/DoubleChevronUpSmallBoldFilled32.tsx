import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronUpSmallBoldFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M21.5244 17.0876C22.1115 17.6721 23.062 17.6698 23.6465 17.0827C24.2308 16.4956 24.2286 15.5451 23.6416 14.9607L17.5283 8.8757C16.683 8.03435 15.317 8.03436 14.4717 8.8757L8.3584 14.9607C7.77137 15.5451 7.7692 16.4956 8.35352 17.0827C8.93797 17.6698 9.88849 17.672 10.4756 17.0876L16 11.5876L21.5244 17.0876ZM21.5244 23.3103C22.1115 23.8947 23.062 23.8924 23.6465 23.3054C24.2309 22.7183 24.2286 21.7678 23.6416 21.1833L17.5283 15.0984C16.683 14.2569 15.317 14.2569 14.4717 15.0984L8.3584 21.1833C7.77134 21.7678 7.76912 22.7183 8.35352 23.3054C8.93798 23.8924 9.88853 23.8946 10.4756 23.3103L16 17.8103L21.5244 23.3103Z"
        fill={color}
      />
    </svg>
  );
};

DoubleChevronUpSmallBoldFilled32.category = 'Arrows';

export default DoubleChevronUpSmallBoldFilled32;
