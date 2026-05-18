import * as React from 'react';
import { IconProps } from './types';

export const PineTreeFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M11.323 0.282395C11.6929 -0.0940372 12.3057 -0.0942258 12.6755 0.282395L12.7507 0.368332L19.7937 9.47185C20.2764 10.0961 19.8309 11.0029 19.0417 11.0031H16.5466L21.822 18.507C22.2644 19.1364 21.8139 20.0029 21.0447 20.0031H12.7488V23.2541C12.7488 23.6683 12.413 24.0041 11.9988 24.0041C11.5848 24.0038 11.2488 23.6681 11.2488 23.2541V20.0031H2.95579C2.18624 20.0031 1.73578 19.1364 2.17844 18.507L7.45774 11.0031H4.95774C4.16839 11.0031 3.72285 10.0962 4.20579 9.47185L11.2478 0.368332L11.323 0.282395Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

PineTreeFilled24.category = 'Nature & Weather';

export default PineTreeFilled24;
