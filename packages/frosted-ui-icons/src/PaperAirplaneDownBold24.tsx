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
        d="M9.23143 21.315C10.3956 23.5628 13.6106 23.5621 14.7744 21.314L22.5859 6.22221C24.1567 3.18729 20.9728 -0.106001 17.8867 1.36186L12.3935 3.97514C12.1481 4.09184 11.8627 4.09172 11.6172 3.97514L6.1162 1.35991C3.03 -0.107256 -0.154108 3.18663 1.41698 6.22124L9.23143 21.315ZM12.999 20.3951C12.5809 21.2025 11.426 21.2024 11.0078 20.3951L3.19335 5.30131C2.50342 3.96842 3.90128 2.52228 5.25682 3.16655L10.7578 5.78178C10.8378 5.81983 10.9196 5.85303 11.0019 5.88334V11.2408C11.002 11.793 11.4497 12.2408 12.0019 12.2408C12.5541 12.2407 13.0019 11.793 13.0019 11.2408V5.88432C13.0863 5.85344 13.17 5.81976 13.2519 5.78081L18.7461 3.1685C20.1016 2.52377 21.5005 3.97017 20.8105 5.30327L12.999 20.3951Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

PaperAirplaneDownBold24.category = 'Communication';

export default PaperAirplaneDownBold24;
