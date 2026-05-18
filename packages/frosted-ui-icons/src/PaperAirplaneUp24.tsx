import * as React from 'react';
import { IconProps } from './types';

export const PaperAirplaneUp24 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M9.45073 2.54836C10.5212 0.479159 13.481 0.479161 14.5513 2.54836L22.6128 18.1392C24.0852 20.9867 21.063 24.059 18.1919 22.6333L12.5162 19.815C12.193 19.6546 11.8129 19.6546 11.4898 19.815L5.8062 22.6353C2.93502 24.0604 -0.0870252 20.9883 1.3853 18.1411L9.45073 2.54836ZM13.2183 3.23684C12.7069 2.24943 11.294 2.2492 10.7828 3.23684L2.71831 18.8296C1.91168 20.3891 3.56648 22.0721 5.1392 21.2915L10.8228 18.4712C10.961 18.4026 11.104 18.3473 11.2496 18.3042V12.7505C11.2496 12.3363 11.5853 12.0005 11.9996 12.0005C12.4136 12.0007 12.7496 12.3364 12.7496 12.7505V18.3013C12.8976 18.3447 13.0427 18.4015 13.1831 18.4712L18.8589 21.2896C20.4315 22.0705 22.087 20.3883 21.2808 18.8286L13.2183 3.23684Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

PaperAirplaneUp24.category = 'Communication';

export default PaperAirplaneUp24;
