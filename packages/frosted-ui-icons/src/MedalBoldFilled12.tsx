import * as React from 'react';
import { IconProps } from './types';

export const MedalBoldFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="13"
      viewBox="0 0 12 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="MedalBoldFilled12"
      {...props}
    >
      <path
        d="M10.26 10.62c.212.797-.497 1.534-1.302 1.356L6 11.316l-2.957.66c-.805.178-1.513-.559-1.303-1.356l.39-1.474c1.027.919 2.383 1.478 3.869 1.478 1.487 0 2.843-.56 3.871-1.478l.39 1.474zM6 0c2.657 0 4.812 2.154 4.813 4.812 0 2.657-2.155 4.812-4.813 4.812-2.657 0-4.811-2.155-4.811-4.812C1.188 2.154 3.341 0 5.998 0zm1.953 3.438c-.393-.387-1.027-.382-1.415.011l-1.03 1.044-.06-.058c-.396-.385-1.029-.377-1.414.02-.384.395-.376 1.028.02 1.413l.774.753c.394.383 1.024.376 1.41-.016l1.726-1.751c.387-.394.382-1.028-.01-1.416z"
        fill={color}
      />
    </svg>
  );
};

MedalBoldFilled12.category = 'Interface General';

export default MedalBoldFilled12;
