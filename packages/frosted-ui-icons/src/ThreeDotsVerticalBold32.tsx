import * as React from 'react';
import { IconProps } from './types';

export const ThreeDotsVerticalBold32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M13.499 26.2412C13.4992 24.8608 14.6186 23.7414 15.999 23.7412C17.3795 23.7414 18.4988 24.8608 18.499 26.2412C18.4988 27.6216 17.3795 28.741 15.999 28.7412C14.6186 28.741 13.4992 27.6217 13.499 26.2412ZM13.499 15.998C13.4995 14.6178 14.6187 13.4982 15.999 13.498C17.3793 13.4982 18.4986 14.6178 18.499 15.998C18.499 17.3787 17.3796 18.4979 15.999 18.498C14.6185 18.4979 13.499 17.3787 13.499 15.998ZM13.499 5.75879C13.4994 4.3785 14.6187 3.25895 15.999 3.25879C17.3794 3.25896 18.4986 4.3785 18.499 5.75879C18.499 7.13939 17.3796 8.25861 15.999 8.25879C14.6185 8.25863 13.499 7.1394 13.499 5.75879Z"
        fill={color}
      />
    </svg>
  );
};

ThreeDotsVerticalBold32.category = 'Interface General';

export default ThreeDotsVerticalBold32;
