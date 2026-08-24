import * as React from 'react';
import { IconProps } from './types';

export const Compass24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="Compass24"
      {...props}
    >
      <path
        d="M12 .5C18.351.5 23.5 5.649 23.5 12S18.351 23.5 12 23.5.5 18.351.5 12 5.649.5 12 .5zM12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm2.864 5.008c1.33-.504 2.632.798 2.128 2.128l-1.722 4.539c-.279.735-.86 1.316-1.595 1.595l-4.54 1.722c-1.33.504-2.631-.798-2.127-2.128l1.721-4.539c.28-.735.86-1.316 1.596-1.596l4.54-1.721zm.531 1.402l-4.538 1.722c-.334.127-.598.391-.725.725l-1.722 4.54c-.045.12.074.239.194.193l4.539-1.722c.334-.127.598-.391.725-.725l1.722-4.539c.046-.12-.074-.24-.194-.194z"
        fill={color}
      />
    </svg>
  );
};

Compass24.category = 'Interface General';

export default Compass24;
