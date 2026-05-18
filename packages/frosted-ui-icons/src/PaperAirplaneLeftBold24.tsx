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
        d="M2.68746 14.7697C0.439712 13.6054 0.440195 10.3904 2.68844 9.2267L17.7802 1.41517C20.815 -0.155531 24.1081 3.02846 22.6406 6.11439L20.0273 11.6076C19.9106 11.8529 19.9109 12.1385 20.0273 12.3839L22.6425 17.8849C24.1097 20.9711 20.8158 24.1552 17.7812 22.5841L2.68746 14.7697ZM3.60739 11.0021C2.79987 11.4201 2.80016 12.575 3.60739 12.9933L18.7011 20.8078C20.034 21.4977 21.4802 20.0998 20.8359 18.7443L18.2207 13.2433C18.1828 13.1635 18.1493 13.0822 18.1191 13.0001L12.7617 13.0001C12.2095 13.0001 11.7618 12.5523 11.7617 12.0001C11.7617 11.4479 12.2094 11.0001 12.7617 11.0001L18.1172 11.0001C18.1481 10.9155 18.1826 10.8313 18.2216 10.7492L20.8339 5.25502C21.4783 3.89958 20.0322 2.50072 18.6992 3.19057L3.60739 11.0021Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

PaperAirplaneLeftBold24.category = 'Communication';

export default PaperAirplaneLeftBold24;
