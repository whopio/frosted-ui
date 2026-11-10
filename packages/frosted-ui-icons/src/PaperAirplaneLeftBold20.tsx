import * as React from 'react';
import { IconProps } from './types';

export const PaperAirplaneLeftBold20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="PaperAirplaneLeftBold20"
      {...props}
    >
      <path
        d="M2.478 12.43c-1.97-1.02-1.97-3.837 0-4.858l11.983-6.21c2.62-1.358 5.476 1.366 4.243 4.047L16.7 9.767c-.068.147-.068.318 0 .466l2.005 4.36c1.233 2.682-1.623 5.405-4.243 4.048L2.478 12.43zm.92-3.082c-.53.274-.53 1.03 0 1.305l11.985 6.212c.93.482 1.942-.484 1.505-1.435l-2.005-4.363-.031-.07h-4.119c-.552-.001-1-.449-1-1 0-.553.448-1 1-1h4.121l.029-.066 2.004-4.358c.437-.95-.576-1.917-1.505-1.435L3.397 9.348z"
        fill={color}
      />
    </svg>
  );
};

PaperAirplaneLeftBold20.category = 'Communication';

export default PaperAirplaneLeftBold20;
