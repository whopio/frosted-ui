import * as React from 'react';
import { IconProps } from './types';

export const TelegramFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="TelegramFilled12"
      {...props}
    >
      <path
        d="M10.493 1.87c.076-.001.246.017.357.106.092.076.118.177.131.249.011.07.027.234.015.36-.139 1.452-.74 4.975-1.044 6.6-.128.688-.383.918-.63.94-.534.05-.94-.351-1.458-.69-.81-.529-1.267-.859-2.054-1.375-.91-.598-.32-.926.198-1.462.138-.143 2.49-2.274 2.536-2.47.006-.024.012-.115-.043-.162-.053-.048-.131-.032-.189-.019-.082.019-1.376.871-3.885 2.559-.367.251-.7.374-.999.368-.328-.007-.961-.186-1.431-.338-.576-.187-1.035-.286-.995-.603.02-.166.25-.335.685-.507C4.372 4.26 6.162 3.49 7.057 3.12c2.558-1.06 3.089-1.244 3.436-1.25z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

TelegramFilled12.category = 'Social & Brands';

export default TelegramFilled12;
