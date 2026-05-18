import * as React from 'react';
import { IconProps } from './types';

export const PaperAirplaneUpBold24 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M9.23192 2.68544C10.3961 0.437582 13.6111 0.438303 14.7749 2.68642L22.5864 17.7782C24.1572 20.8131 20.9732 24.1064 17.8872 22.6386L12.394 20.0253C12.1486 19.9086 11.8631 19.9087 11.6177 20.0253L6.11669 22.6405C3.03049 24.1077 -0.15362 20.8138 1.41747 17.7792L9.23192 2.68544ZM12.9995 3.60536C12.5814 2.79798 11.4265 2.79803 11.0083 3.60536L3.19383 18.6991C2.5039 20.032 3.90177 21.4781 5.25731 20.8339L10.7583 18.2186C10.8383 18.1806 10.92 18.1474 11.0024 18.1171V12.7597C11.0024 12.2074 11.4501 11.7597 12.0024 11.7597C12.5546 11.7598 13.0024 12.2074 13.0024 12.7597V18.1161C13.0868 18.147 13.1705 18.1807 13.2524 18.2196L18.7466 20.8319C20.1021 21.4767 21.501 20.0303 20.811 18.6972L12.9995 3.60536Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

PaperAirplaneUpBold24.category = 'Communication';

export default PaperAirplaneUpBold24;
