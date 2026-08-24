import * as React from 'react';
import { IconProps } from './types';

export const MegaphoneBoldFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="MegaphoneBoldFilled20"
      {...props}
    >
      <path
        d="M12.418 1.17C14.191.607 16 1.93 16 3.791v1.611c0 .138.094.258.227.297.226.067.471.158.72.282.493.246 1.017.632 1.415 1.23.403.604.636 1.364.636 2.289s-.233 1.685-.636 2.29c-.398.597-.922.983-1.416 1.23-.247.123-.492.213-.719.28-.132.039-.227.159-.227.297v1.59c0 1.87-1.827 3.195-3.604 2.614l-2.002-.654c-.194-.064-.394.08-.394.285v.068c0 .828-.672 1.5-1.5 1.5S7 18.328 7 17.5v-1.245c0-.015-.002-.03-.004-.044.001-.023.004-.046.004-.07V2.89l5.418-1.72zM4 15.058l-.587-.192C1.973 14.396 1 13.053 1 11.54V7.356C1 5.83 1.988 4.48 3.441 4.02L4 3.842v11.216z"
        fill={color}
      />
    </svg>
  );
};

MegaphoneBoldFilled20.category = 'Objects';

export default MegaphoneBoldFilled20;
