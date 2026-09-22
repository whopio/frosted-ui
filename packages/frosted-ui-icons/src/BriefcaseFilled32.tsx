import * as React from 'react';
import { IconProps } from './types';

export const BriefcaseFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="BriefcaseFilled32"
      {...props}
    >
      <path
        d="M31.001 23.928c0 3.906-3.166 7.072-7.072 7.072H8.072C4.166 31 1 27.834 1 23.928v-5.032c.965.995 2.315 1.614 3.81 1.614h22.38c1.496 0 2.846-.62 3.811-1.615v5.033zM19.237 1C21.591 1 23.5 2.909 23.5 5.263V8h.429C27.835 8 31 11.166 31 15.072v.109L31 15.2c0 2.103-1.706 3.809-3.81 3.809H4.81c-2.039 0-3.703-1.601-3.805-3.615L1 15.2v-.128C1 11.166 4.166 8 8.072 8H8.5V5.263C8.5 2.909 10.409 1 12.763 1h6.474zm-6.474 1.5C11.237 2.5 10 3.737 10 5.263V8h12V5.263C22 3.737 20.763 2.5 19.237 2.5h-6.474z"
        fill={color}
      />
    </svg>
  );
};

BriefcaseFilled32.category = 'Objects';

export default BriefcaseFilled32;
