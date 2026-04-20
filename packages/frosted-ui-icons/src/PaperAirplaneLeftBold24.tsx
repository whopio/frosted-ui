import * as React from 'react';
import { IconProps } from './types';

export const PaperAirplaneLeftBold24 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M2.68697 14.7702C0.439107 13.606 0.439829 10.391 2.68794 9.22719L17.7797 1.41566C20.8147 -0.155163 24.108 3.02883 22.6401 6.11488L20.0268 11.608C19.9101 11.8535 19.9102 12.1389 20.0268 12.3844L22.642 17.8854C24.1092 20.9716 20.8153 24.1557 17.7807 22.5846L2.68697 14.7702ZM3.60689 11.0026C2.7995 11.4207 2.79955 12.5756 3.60689 12.9938L18.7006 20.8082C20.0335 21.4982 21.4797 20.1003 20.8354 18.7448L18.2202 13.2438C18.1821 13.1638 18.1489 13.082 18.1186 12.9996L12.7612 12.9996C12.2089 12.9996 11.7612 12.5519 11.7612 11.9996C11.7613 11.4474 12.209 10.9997 12.7612 10.9996L18.1176 10.9996C18.1485 10.9153 18.1822 10.8315 18.2211 10.7496L20.8335 5.25551C21.4782 3.89995 20.0318 2.50109 18.6987 3.19105L3.60689 11.0026Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

PaperAirplaneLeftBold24.category = 'Communication';

export default PaperAirplaneLeftBold24;
