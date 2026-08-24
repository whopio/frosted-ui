import * as React from 'react';
import { IconProps } from './types';

export const ArrowDownAngleRightFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ArrowDownAngleRightFilled20"
      {...props}
    >
      <path
        d="M2.25 2.5C1.56 2.5 1 3.06 1 3.75v6.938C1 12.24 2.26 13.5 3.813 13.5h10.776l-1.694 1.588c-.503.472-.529 1.263-.057 1.767.472.503 1.263.529 1.767.057l4-3.75c.252-.236.395-.567.395-.912 0-.345-.143-.676-.395-.912l-4-3.75c-.504-.472-1.295-.446-1.767.058-.472.503-.446 1.294.058 1.766L14.588 11H3.812c-.172 0-.312-.14-.312-.313V3.75c0-.69-.56-1.25-1.25-1.25z"
        fill={color}
      />
    </svg>
  );
};

ArrowDownAngleRightFilled20.category = 'Arrows';

export default ArrowDownAngleRightFilled20;
