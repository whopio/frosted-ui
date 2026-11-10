import * as React from 'react';
import { IconProps } from './types';

export const PaperAirplaneRight24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="PaperAirplaneRight24"
      {...props}
    >
      <path
        d="M21.448 14.544c2.07-1.07 2.07-4.03 0-5.1L5.858 1.381C3.01-.091-.063 2.932 1.362 5.802l2.819 5.677c.16.323.16.703 0 1.026l-2.82 5.683c-1.426 2.872 1.646 5.894 4.493 4.421l15.593-8.065zm-.688-3.768c.987.512.987 1.925 0 2.436L5.167 21.276c-1.56.807-3.243-.848-2.462-2.42l2.82-5.684c.069-.138.124-.28.167-.426h5.554c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-5.55c-.044-.148-.1-.294-.17-.434L2.706 5.136c-.78-1.573.901-3.228 2.461-2.422l15.592 8.062z"
        fill={color}
      />
    </svg>
  );
};

PaperAirplaneRight24.category = 'Communication';

export default PaperAirplaneRight24;
