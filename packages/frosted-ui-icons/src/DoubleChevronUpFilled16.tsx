import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronUpFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M12.8704 8.7375C13.3607 9.22341 14.152 9.21994 14.6379 8.72968C15.1236 8.23939 15.1202 7.44801 14.6301 6.9621L9.08716 1.46699C8.4547 0.840267 7.43385 0.84553 6.80689 1.47773L1.36255 6.96992C0.876603 7.46022 0.880102 8.25151 1.37036 8.7375C1.86067 9.22341 2.65197 9.21993 3.13794 8.72968L7.95728 3.86835L12.8704 8.7375ZM12.8674 15.2336C13.3556 15.7217 14.1469 15.7216 14.635 15.2336C15.1229 14.7454 15.123 13.9541 14.635 13.466L9.13989 7.97089C8.51019 7.34131 7.48937 7.34144 6.85962 7.97089L1.36646 13.466C0.878436 13.9542 0.87837 14.7455 1.36646 15.2336C1.85465 15.7216 2.64597 15.7217 3.13403 15.2336L7.99927 10.3664L12.8674 15.2336Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleChevronUpFilled16.category = 'Arrows';

export default DoubleChevronUpFilled16;
