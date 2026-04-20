import * as React from 'react';
import { IconProps } from './types';

export const PaperAirplaneUpFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M6.1366 2.13368C6.92002 0.622103 9.0817 0.622111 9.86512 2.13368L14.7255 11.5126C15.7696 13.5276 13.6735 15.7237 11.6122 14.7743L8.75379 13.4569V8.76747C8.75377 8.35331 8.41793 8.01753 8.00379 8.01747C7.58959 8.01747 7.25381 8.35327 7.25379 8.76747V13.455L4.38856 14.7753C2.32723 15.7241 0.231063 13.5274 1.27527 11.5126L6.1366 2.13368Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

PaperAirplaneUpFilled16.category = 'Communication';

export default PaperAirplaneUpFilled16;
