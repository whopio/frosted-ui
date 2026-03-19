import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronDownFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M12.8704 7.86239C13.3607 7.37647 14.152 7.37994 14.6379 7.8702C15.1236 8.3605 15.1202 9.15187 14.6301 9.63778L9.08716 15.1329C8.4547 15.7596 7.43385 15.7544 6.80689 15.1222L1.36255 9.62997C0.876603 9.13967 0.880102 8.34837 1.37036 7.86239C1.86067 7.37647 2.65197 7.37995 3.13794 7.8702L7.95728 12.7315L12.8704 7.86239ZM12.8674 1.36629C13.3556 0.878213 14.1469 0.878242 14.635 1.36629C15.1229 1.85446 15.123 2.64581 14.635 3.13387L9.13989 8.62899C8.51019 9.25858 7.48937 9.25844 6.85962 8.62899L1.36646 3.13387C0.878436 2.64568 0.87837 1.85438 1.36646 1.36629C1.85465 0.878319 2.64597 0.878222 3.13403 1.36629L7.99927 6.23348L12.8674 1.36629Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleChevronDownFilled16.category = 'Arrows';

export default DoubleChevronDownFilled16;
