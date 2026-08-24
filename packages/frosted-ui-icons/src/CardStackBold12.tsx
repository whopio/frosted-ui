import * as React from 'react';
import { IconProps } from './types';

export const CardStackBold12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="CardStackBold12"
      {...props}
    >
      <path
        d="M7.776.003c1.28 0 2.27 1.123 2.109 2.393l-.033.253c.858.336 1.438 1.208 1.342 2.186l-.076.764c.662.565 1.022 1.462.831 2.399l-.406 2c-.237 1.164-1.261 2.001-2.45 2.001H2.907c-1.188 0-2.213-.837-2.45-2.002L.051 7.998c-.19-.937.17-1.836.832-2.401l-.074-.762c-.097-.98.487-1.854 1.347-2.188l-.031-.251C1.964 1.126 2.954.003 4.233.003h3.543zM2.501 7c-.316 0-.553.29-.49.6l.406 1.999c.047.233.253.4.49.4h6.186c.238 0 .443-.167.49-.4l.406-2C10.052 7.29 9.816 7 9.5 7H2.501zm.423-2.498c-.074 0-.131.064-.124.138l.035.36h6.334l.035-.36c.007-.074-.051-.138-.125-.138H2.924zm1.31-2.5c-.076 0-.134.067-.125.142l.045.358h3.702l.044-.358c.01-.075-.048-.14-.124-.141H4.233z"
        fill={color}
      />
    </svg>
  );
};

CardStackBold12.category = 'Interface General';

export default CardStackBold12;
