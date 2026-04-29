import * as React from 'react';
import { IconProps } from './types';

export const XMarkSmallBold12 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M7.54297 3.04254C7.93344 2.6524 8.56659 2.65235 8.95703 3.04254C9.34732 3.43297 9.34721 4.0661 8.95703 4.4566L7.41309 5.99957L8.95703 7.54352C9.34715 7.93405 9.34737 8.56718 8.95703 8.95758C8.56662 9.34774 7.93344 9.34764 7.54297 8.95758L5.99902 7.41461L4.45703 8.9566C4.06651 9.34713 3.43252 9.34713 3.04199 8.9566C2.65212 8.56609 2.65185 7.93288 3.04199 7.54254L4.58496 5.99957L3.04199 4.45758C2.65181 4.06727 2.65218 3.43406 3.04199 3.04352C3.43252 2.65299 4.06651 2.65299 4.45703 3.04352L5.99902 4.58551L7.54297 3.04254Z"
        fill={color}
      />
    </svg>
  );
};

XMarkSmallBold12.category = 'Interface General';

export default XMarkSmallBold12;
