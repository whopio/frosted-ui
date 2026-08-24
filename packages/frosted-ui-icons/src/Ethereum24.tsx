import * as React from 'react';
import { IconProps } from './types';

export const Ethereum24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="Ethereum24"
      {...props}
    >
      <path
        d="M18.398 12.597c.31-.165.693-.093.922.174.228.266.24.657.03.938L12.6 22.7c-.142.189-.364.3-.6.3s-.458-.111-.6-.3L4.65 13.71c-.21-.281-.198-.671.03-.938.23-.267.613-.34.923-.174L12 16.005l6.398-3.408zm-6.045 4.92c-.22.118-.485.118-.705 0l-3.772-2.01L12 21.002l4.123-5.493-3.77 2.01zM12 1c.23 0 .449.106.591.288l6.75 8.63c.14.18.191.414.14.635-.052.22-.202.406-.407.505l-6.75 3.236c-.205.098-.443.098-.648 0l-6.75-3.236c-.205-.099-.354-.284-.406-.505-.052-.221 0-.455.14-.634l6.75-8.63c.142-.183.36-.289.59-.289zm-5.585 9.11L12 12.786l5.584-2.678L12 2.968l-5.585 7.141z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

Ethereum24.category = 'Interface General';

export default Ethereum24;
