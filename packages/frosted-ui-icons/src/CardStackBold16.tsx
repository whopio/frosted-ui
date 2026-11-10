import * as React from 'react';
import { IconProps } from './types';

export const CardStackBold16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="CardStackBold16"
      {...props}
    >
      <path
        d="M9.984.999c1.507 0 2.671 1.324 2.48 2.818l-.043.334c1.04.378 1.752 1.423 1.636 2.595l-.098.983c.786.68 1.208 1.755.98 2.873l-.41 2.002c-.287 1.396-1.514 2.399-2.94 2.399H4.414c-1.425 0-2.653-1.003-2.938-2.399l-.41-2.002c-.23-1.12.196-2.197.984-2.876l-.097-.98c-.116-1.17.593-2.216 1.633-2.595l-.042-.334C3.352 2.323 4.516 1 6.023 1h3.961zM4.004 9c-.633 0-1.107.58-.98 1.2l.41 2.003c.095.465.504.8.98.8h7.176c.475 0 .884-.335.98-.8l.409-2.003c.126-.62-.347-1.2-.98-1.2H4.004zm.436-3c-.295 0-.526.255-.498.549L3.986 7h8.035l.045-.451c.03-.294-.202-.549-.497-.549H4.44zm1.582-3c-.3 0-.534.265-.496.563L5.582 4h4.843l.055-.437C10.52 3.265 10.286 3 9.984 3H6.022z"
        fill={color}
      />
    </svg>
  );
};

CardStackBold16.category = 'Interface General';

export default CardStackBold16;
