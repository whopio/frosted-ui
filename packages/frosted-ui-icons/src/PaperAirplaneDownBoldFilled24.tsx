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
        d="M9.23091 21.3149C10.395 23.5629 13.61 23.562 14.7739 21.314L22.5854 6.22218C24.1562 3.18726 20.9722 -0.106037 17.8862 1.36182L13.0014 3.68604V11.2407C13.0014 11.793 12.5537 12.2407 12.0014 12.2407C11.4492 12.2406 11.0014 11.793 11.0014 11.2407V3.68311L6.11567 1.35987C3.02957 -0.106993 -0.154556 3.18669 1.41646 6.2212L9.23091 21.3149Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

PaperAirplaneDownBoldFilled24.category = 'Communication';

export default PaperAirplaneDownBoldFilled24;
