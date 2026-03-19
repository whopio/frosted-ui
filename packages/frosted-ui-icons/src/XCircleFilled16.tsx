import * as React from 'react';
import { IconProps } from './types';

export const XCircleFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M8 1C11.866 1 15 4.13401 15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1ZM10.4219 5.51562C10.1291 5.22287 9.65425 5.22314 9.36133 5.51562L7.96875 6.9082L6.57617 5.51562C6.28325 5.22314 5.80838 5.22287 5.51562 5.51562C5.22287 5.80838 5.22314 6.28325 5.51562 6.57617L6.9082 7.96875L5.51562 9.36133C5.22314 9.65425 5.22287 10.1291 5.51562 10.4219C5.80838 10.7146 6.28325 10.7144 6.57617 10.4219L7.96875 9.0293L9.36133 10.4219C9.65425 10.7144 10.1291 10.7146 10.4219 10.4219C10.7146 10.1291 10.7144 9.65425 10.4219 9.36133L9.0293 7.96875L10.4219 6.57617C10.7144 6.28325 10.7146 5.80838 10.4219 5.51562Z"
        fill={color}
      />
    </svg>
  );
};

XCircleFilled16.category = 'Product Icons';

export default XCircleFilled16;
