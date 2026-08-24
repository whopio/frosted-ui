import * as React from 'react';
import { IconProps } from './types';

export const BlankNotePlusFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="BlankNotePlusFilled12"
      {...props}
    >
      <path
        d="M8.25 0C10.32 0 12 1.679 12 3.75v4.148c-.098-.04-.2-.072-.304-.096-.203-.889-.996-1.553-1.947-1.553-.95 0-1.744.664-1.947 1.553-.889.204-1.552.997-1.553 1.947 0 .95.664 1.744 1.553 1.947.024.105.057.206.097.303H3.75C1.68 11.999 0 10.32 0 8.249v-4.5C.001 1.68 1.68 0 3.751 0h4.5zm1.5 7.5c.413 0 .75.335.75.75V9h.75c.413 0 .749.335.749.75 0 .413-.336.75-.75.75h-.75v.75c0 .413-.336.749-.75.749s-.75-.336-.75-.75v-.75h-.75c-.414 0-.75-.336-.75-.75S7.835 9 8.25 9H9v-.75c0-.414.336-.75.75-.75z"
        fill={color}
      />
    </svg>
  );
};

BlankNotePlusFilled12.category = 'Interface General';

export default BlankNotePlusFilled12;
