import * as React from 'react';
import { IconProps } from './types';

export const RoundedArrowAngleLeft20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M12.7495 18.9983C16.2007 18.9982 18.9985 16.2004 18.9986 12.7493C18.9985 9.2981 16.2007 6.50037 12.7495 6.50024H3.54935L7.76126 2.28052C8.05382 1.98737 8.05335 1.51161 7.76028 1.21899C7.46711 0.926403 6.99137 0.926825 6.69876 1.21997L1.22024 6.71021C0.928086 7.00318 0.927689 7.47813 1.22024 7.77075L6.69974 13.2502C6.99252 13.5428 7.46744 13.5427 7.76028 13.2502C8.0531 12.9574 8.05295 12.4826 7.76028 12.1897L3.57181 8.00024H12.7495C15.3723 8.00037 17.4985 10.1265 17.4986 12.7493C17.4985 15.372 15.3723 17.4982 12.7495 17.4983H10.7495C10.3357 17.4987 9.99966 17.8344 9.99954 18.2483C9.99969 18.6621 10.3357 18.9979 10.7495 18.9983H12.7495Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

RoundedArrowAngleLeft20.category = 'Arrows';

export default RoundedArrowAngleLeft20;
