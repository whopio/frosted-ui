import * as React from 'react';
import { IconProps } from './types';

export const SparkleBoldFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="SparkleBoldFilled12"
      {...props}
    >
      <path
        d="M1.885 7.071c.34-.672 1.329-.672 1.668 0l.062.155.077.202c.207.456.6.807 1.084.959.878.274.878 1.518 0 1.793-.554.173-.988.607-1.161 1.16-.275.879-1.517.879-1.792 0-.173-.553-.607-.987-1.161-1.16-.879-.275-.879-1.519 0-1.793l.202-.077c.456-.207.808-.6.959-1.084l.062-.155zm4.211-6.068c.447-1.38 2.486-1.333 2.827.138l.257 1.118c.065.28.283.498.563.562l1.118.258c1.518.351 1.518 2.513 0 2.864l-1.118.26c-.28.064-.498.281-.563.56l-.257 1.119c-.351 1.519-2.514 1.519-2.865 0L5.8 6.764c-.064-.28-.283-.497-.562-.562L4.12 5.943C2.6 5.593 2.6 3.43 4.12 3.08l1.118-.258c.28-.064.498-.283.562-.562l.258-1.118.038-.138z"
        fill={color}
      />
    </svg>
  );
};

SparkleBoldFilled12.category = 'Interface General';

export default SparkleBoldFilled12;
