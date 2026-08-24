import * as React from 'react';
import { IconProps } from './types';

export const PaperAirplaneUp16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="PaperAirplaneUp16"
      {...props}
    >
      <path
        d="M6.137 2.134c.783-1.512 2.945-1.512 3.728 0l4.86 9.379c1.045 2.015-1.051 4.21-3.113 3.261L8.195 13.2c-.122-.056-.264-.056-.387 0l-3.42 1.575c-2.06.95-4.157-1.248-3.113-3.262l4.862-9.38zm2.397.69c-.224-.432-.842-.432-1.065 0l-4.862 9.379c-.387.747.39 1.56 1.155 1.209l3.42-1.574c.023-.011.048-.02.072-.03v-3.04c0-.415.336-.75.75-.75s.75.335.75.75v3.041l.07.029 3.416 1.574c.764.351 1.541-.463 1.154-1.21l-4.86-9.378z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

PaperAirplaneUp16.category = 'Communication';

export default PaperAirplaneUp16;
