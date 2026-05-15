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
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M9.23192 21.3149C10.3962 23.5627 13.6112 23.5622 14.7749 21.3139L22.5864 6.22214C24.1571 3.18734 20.9731 -0.105677 17.8872 1.36179L12.394 3.97507C12.1487 4.09176 11.8631 4.09148 11.6177 3.97507L6.11669 1.35984C3.03049 -0.107325 -0.15362 3.18656 1.41747 6.22117L9.23192 21.3149ZM12.9995 20.395C12.5815 21.2025 11.4266 21.2022 11.0083 20.395L3.19383 5.30124C2.5039 3.96835 3.90177 2.52221 5.25731 3.16648L10.7583 5.78171C10.8381 5.81962 10.9193 5.85305 11.0015 5.88328V11.2407C11.0015 11.7929 11.4493 12.2405 12.0015 12.2407C12.5537 12.2407 13.0015 11.793 13.0015 11.2407V5.88523C13.0861 5.85427 13.1703 5.81982 13.2524 5.78074L18.7466 3.16843C20.102 2.52409 21.5009 3.97022 20.811 5.3032L12.9995 20.395Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

PaperAirplaneDownBold24.category = 'Communication';

export default PaperAirplaneDownBold24;
