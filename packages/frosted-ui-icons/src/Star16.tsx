import * as React from 'react';
import { IconProps } from './types';

export const Star16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="17"
      height="16"
      viewBox="0 0 17 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="Star16"
      {...props}
    >
      <path
        d="M6.923 1.116c.515-.744 1.647-.744 2.162 0l.1.17L10.9 4.76l3.957.505c1.069.136 1.57 1.464.727 2.236l-2.878 2.64.722 3.764c.215 1.124-.985 1.87-1.908 1.386l-3.516-1.844-3.516 1.844c-.923.483-2.123-.262-1.908-1.386l.72-3.765L.425 7.5c-.842-.772-.341-2.1.727-2.236l3.956-.505 1.715-3.472.101-.171zm-.517 4.402c-.197.399-.582.663-1.013.718l-3.625.462L4.4 9.113l.114.119c.247.293.356.684.282 1.071l-.668 3.48 3.258-1.707c.337-.177.734-.2 1.086-.067l.148.067 3.257 1.708-.667-3.48c-.085-.444.07-.891.396-1.191l2.632-2.415-3.624-.462c-.43-.055-.816-.32-1.013-.718L8.004 2.281 6.406 5.518z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

Star16.category = 'Interface General';

export default Star16;
