import * as React from 'react';
import { IconProps } from './types';

export const Linkedin20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="Linkedin20"
      {...props}
    >
      <path
        d="M17.668 1H2.328C1.595 1 1 1.58 1 2.297V17.7C1 18.416 1.594 19 2.329 19h15.339c.734 0 1.332-.584 1.332-1.297V2.297C19 1.58 18.402 1 17.668 1zM6.34 16.339H3.668V7.746H6.34v8.593zM5.004 6.576c-.858 0-1.55-.693-1.55-1.547s.692-1.547 1.55-1.547c.855 0 1.547.693 1.547 1.547 0 .85-.692 1.547-1.547 1.547zm11.335 9.763H13.67v-4.177c0-.995-.017-2.278-1.388-2.278-1.389 0-1.6 1.086-1.6 2.208v4.247H8.017V7.746h2.56v1.175h.035c.355-.675 1.227-1.389 2.524-1.389 2.704 0 3.203 1.779 3.203 4.092v4.715z"
        fill={color}
      />
    </svg>
  );
};

Linkedin20.category = 'Social & Brands';

export default Linkedin20;
