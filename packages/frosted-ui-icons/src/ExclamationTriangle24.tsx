import * as React from 'react';
import { IconProps } from './types';

export const ExclamationTriangle24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ExclamationTriangle24"
      {...props}
    >
      <path
        d="M9.205 2.67c1.229-2.174 4.361-2.174 5.59 0l8.783 15.541c1.209 2.14-.336 4.789-2.794 4.79H3.216C.758 23-.787 20.35.422 18.21L9.205 2.67zm4.284.738c-.655-1.158-2.323-1.158-2.977 0l-8.784 15.54c-.645 1.14.179 2.552 1.488 2.552h17.568c1.31 0 2.132-1.412 1.489-2.552l-8.784-15.54zM12 17c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1zm0-9c.414 0 .75.336.75.75v5.5c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-5.5c0-.414.336-.75.75-.75z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

ExclamationTriangle24.category = 'Interface General';

export default ExclamationTriangle24;
