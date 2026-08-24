import * as React from 'react';
import { IconProps } from './types';

export const PaperAirplaneDownBold24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="PaperAirplaneDownBold24"
      {...props}
    >
      <path
        d="M9.232 21.315c1.164 2.248 4.38 2.247 5.543-.001l7.811-15.092c1.571-3.035-1.613-6.328-4.699-4.86l-5.493 2.613c-.245.117-.53.116-.776 0L6.117 1.36C3.03-.107-.153 3.187 1.417 6.22l7.815 15.094zm3.768-.92c-.418.808-1.573.807-1.992 0L3.194 5.301c-.69-1.333.708-2.779 2.063-2.135l5.501 2.616c.08.038.161.071.244.101v5.358c0 .552.447 1 1 1 .552 0 1-.448 1-1V5.885c.084-.03.168-.065.25-.104l5.495-2.613c1.355-.644 2.754.802 2.064 2.135l-7.812 15.092z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

PaperAirplaneDownBold24.category = 'Communication';

export default PaperAirplaneDownBold24;
