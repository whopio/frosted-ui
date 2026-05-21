import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronDownBoldFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M9.36612 5.71573C9.85425 5.22779 10.6456 5.22773 11.1337 5.71573C11.6218 6.20382 11.6217 6.99513 11.1337 7.4833L7.06045 11.5565C6.47467 12.1423 5.52514 12.1423 4.93936 11.5565L0.866117 7.4833C0.37805 6.99514 0.377991 6.20385 0.866117 5.71573C1.35426 5.22778 2.14559 5.22772 2.63369 5.71573L5.99991 9.08194L9.36612 5.71573ZM9.36612 0.366117C9.85427 -0.122036 10.6455 -0.122031 11.1337 0.366117C11.6218 0.85428 11.6218 1.64557 11.1337 2.13369L7.06045 6.20694C6.4747 6.79267 5.52515 6.79261 4.93936 6.20694L0.866117 2.13369C0.377961 1.64554 0.377961 0.854272 0.866117 0.366117C1.35427 -0.122039 2.14554 -0.122039 2.63369 0.366117L5.99991 3.73233L9.36612 0.366117Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleChevronDownBoldFilled12.category = 'Arrows';

export default DoubleChevronDownBoldFilled12;
