import * as React from 'react';
import { IconProps } from './types';

export const CompassFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="CompassFilled24"
      {...props}
    >
      <path
        d="M12 0.5C18.3513 0.5 23.5 5.64873 23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5ZM17.2285 8.5127C17.6284 7.45838 16.6405 6.42521 15.5889 6.7373L15.4873 6.77148L10.3252 8.72949C9.58956 9.00861 9.00861 9.58956 8.72949 10.3252L6.77148 15.4873C6.35873 16.5755 7.4245 17.6413 8.5127 17.2285L13.6748 15.2705C14.4104 14.9914 14.9914 14.4104 15.2705 13.6748L17.2285 8.5127ZM12 10.25C12.9665 10.25 13.75 11.0335 13.75 12C13.75 12.9665 12.9665 13.75 12 13.75C11.0335 13.75 10.25 12.9665 10.25 12C10.25 11.0335 11.0335 10.25 12 10.25Z"
        fill={color}
      />
    </svg>
  );
};

CompassFilled24.category = 'Interface General';

export default CompassFilled24;
