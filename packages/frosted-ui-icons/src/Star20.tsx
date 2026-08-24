import * as React from 'react';
import { IconProps } from './types';

export const Star20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="21"
      height="20"
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="Star20"
      {...props}
    >
      <path
        d="M8.677 1.372c.517-1.07 2.017-1.102 2.596-.1l.054.1 2.238 4.624 5.156.669c1.216.158 1.73 1.659.817 2.513l-3.764 3.52.946 5.027c.23 1.228-1.074 2.125-2.142 1.555l-4.576-2.447-4.576 2.447c-1.068.57-2.372-.327-2.142-1.555l.944-5.027-3.762-3.52c-.914-.854-.4-2.355.816-2.513l5.155-.67 2.24-4.623zM7.78 6.666c-.216.447-.646.751-1.135.815l-5.091.661 3.715 3.476h.001c.363.34.53.842.438 1.333l-.937 4.977 4.535-2.424.167-.076c.397-.152.845-.127 1.225.076l4.533 2.424-.935-4.977c-.092-.492.075-.994.438-1.333l3.715-3.476-5.09-.661c-.49-.064-.919-.369-1.136-.815l-2.221-4.588L7.78 6.666z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

Star20.category = 'Interface General';

export default Star20;
