import * as React from 'react';
import { IconProps } from './types';

export const PaperAirplaneLeftBoldFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M2.26573 10.0881C0.576826 9.21075 0.576748 6.79349 2.26573 5.91626L11.1407 1.30884C13.335 0.170013 15.748 2.4098 14.7755 4.68286L13.7833 6.99927H8.73155C8.17927 6.99927 7.73155 7.44698 7.73155 7.99927C7.73182 8.55133 8.17943 8.99927 8.73155 8.99927H13.7814L14.7765 11.3235C15.7485 13.5967 13.3349 15.8359 11.1407 14.6965L2.26573 10.0881Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

PaperAirplaneLeftBoldFilled16.category = 'Communication';

export default PaperAirplaneLeftBoldFilled16;
