import * as React from 'react';
import { IconProps } from './types';

export const QuoteLeft12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="QuoteLeft12"
      {...props}
    >
      <path
        d="M3.852 2.56c.174-.112.406-.063.518.11.113.175.064.407-.11.52-.805.523-1.45.978-1.888 1.581-.154.213-.285.449-.387.718.362-.243.8-.385 1.27-.385 1.23 0 2.244.975 2.244 2.198C5.5 8.524 4.486 9.5 3.255 9.5c-1.227 0-2.239-.97-2.245-2.188-.069-1.302.214-2.234.756-2.981.53-.73 1.289-1.252 2.086-1.77zm5.5 0c.174-.112.406-.063.518.11.113.175.064.407-.11.52-.805.523-1.45.978-1.888 1.581-.154.213-.285.449-.387.718.362-.243.8-.385 1.27-.385 1.23 0 2.244.975 2.244 2.198C11 8.524 9.986 9.5 8.755 9.5c-1.227 0-2.24-.97-2.245-2.188-.069-1.302.214-2.234.756-2.981.53-.73 1.289-1.252 2.086-1.77z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

QuoteLeft12.category = 'Interface General';

export default QuoteLeft12;
