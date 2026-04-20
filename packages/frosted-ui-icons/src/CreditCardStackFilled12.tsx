import * as React from 'react';
import { IconProps } from './types';

export const CreditCardStackFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M12 8.75049C11.9997 9.9929 10.9925 11.0005 9.75 11.0005H4.25C3.00752 11.0005 2.00026 9.9929 2 8.75049V6.50049H12V8.75049ZM4.25 8.00049C3.83579 8.00049 3.5 8.33627 3.5 8.75049C3.50026 9.16448 3.83595 9.50049 4.25 9.50049H5.96387C6.37792 9.50049 6.7136 9.16448 6.71387 8.75049C6.71387 8.33627 6.37808 8.00049 5.96387 8.00049H4.25ZM8.25 0.999512C8.94818 0.999512 9.54926 1.41011 9.83008 2.00146C9.80346 2.00082 9.77677 2.00049 9.75 2.00049H4.25C2.45507 2.00049 1 3.45556 1 5.25049V8.75049C1 8.77709 1.00034 8.80411 1.00098 8.83057C0.409764 8.54981 0.000190934 7.94846 0 7.25049V3.75049C0 2.23171 1.23122 0.999512 2.75 0.999512H8.25ZM9.75 3.00049C10.9081 3.00049 11.8609 3.87555 11.9854 5.00049H2.01465C2.13906 3.87555 3.0919 3.00049 4.25 3.00049H9.75Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

CreditCardStackFilled12.category = 'Money & Shopping';

export default CreditCardStackFilled12;
