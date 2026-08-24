import * as React from 'react';
import { IconProps } from './types';

export const Compass32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="Compass32"
      {...props}
    >
      <path
        d="M16 .5C24.56.5 31.5 7.44 31.5 16c0 8.56-6.94 15.5-15.5 15.5C7.44 31.5.5 24.56.5 16 .5 7.44 7.44.5 16 .5zM16 2C8.268 2 2 8.268 2 16s6.268 14 14 14 14-6.268 14-14S23.732 2 16 2zm4.322 7.42c1.41-.535 2.792.846 2.257 2.257l-2.4 6.327c-.38 1.003-1.172 1.795-2.175 2.176l-6.327 2.4c-1.41.534-2.792-.847-2.257-2.258l2.4-6.326c.38-1.003 1.173-1.796 2.176-2.177l6.326-2.4zm.533 1.402l-6.327 2.4c-.602.228-1.078.704-1.306 1.306l-2.4 6.327c-.076.201.121.398.323.322l6.327-2.4c.602-.228 1.077-.703 1.305-1.305l2.4-6.328c.076-.2-.121-.398-.322-.322z"
        fill={color}
      />
    </svg>
  );
};

Compass32.category = 'Interface General';

export default Compass32;
