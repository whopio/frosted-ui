import * as React from 'react';
import { IconProps } from './types';

export const PaperAirplaneDownBoldFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M9.23192 21.3149C10.3961 23.5628 13.6111 23.5622 14.7749 21.3139L22.5864 6.22214C24.1572 3.18723 20.9732 -0.106045 17.8872 1.36179L13.0024 3.68601V11.2407C13.0024 11.7929 12.5546 12.2405 12.0024 12.2407C11.4501 12.2407 11.0024 11.793 11.0024 11.2407V3.68308L6.11669 1.35984C3.03049 -0.107325 -0.15362 3.18656 1.41747 6.22117L9.23192 21.3149Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

PaperAirplaneDownBoldFilled24.category = 'Communication';

export default PaperAirplaneDownBoldFilled24;
