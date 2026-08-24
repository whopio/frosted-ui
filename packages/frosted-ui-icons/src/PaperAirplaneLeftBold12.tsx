import * as React from 'react';
import { IconProps } from './types';

export const PaperAirplaneLeftBold12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 13 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="PaperAirplaneLeftBold12"
      {...props}
    >
      <path
        d="M1.326 8.67c-1.768-.905-1.768-3.433 0-4.338L9.206.298C11.345-.8 13.7 1.35 12.801 3.582l-1.17 2.902c-.003.01-.003.022 0 .032l1.17 2.905c.899 2.23-1.455 4.38-3.596 3.284l-7.88-4.034zm.988-2.41c-.196.1-.196.382 0 .482l7.88 4.035c.356.182.748-.175.599-.547L9.727 7.583H7.309c-.598 0-1.083-.485-1.083-1.083s.485-1.083 1.083-1.083h2.419l1.064-2.644c.15-.372-.243-.73-.6-.547L2.314 6.26z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

PaperAirplaneLeftBold12.category = 'Communication';

export default PaperAirplaneLeftBold12;
