import * as React from 'react';
import { IconProps } from './types';

export const TelephoneVertical12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="TelephoneVertical12"
      {...props}
    >
      <path
        d="M7.75 0C8.716 0 9.5.784 9.5 1.75v1.595c0 .898-.68 1.651-1.575 1.74h-.001l-.899.09C7.01 5.442 7 5.716 7 6c0 .284.01.558.025.823l.9.091c.894.09 1.575.843 1.575 1.741v1.595c0 .966-.784 1.75-1.75 1.75H6.042c-.469 0-1.072-.126-1.505-.614C3.88 10.644 3 9.066 3 6c0-3.066.88-4.644 1.537-5.386C4.97.126 5.573 0 6.042 0H7.75zM6.042 1.5c-.24 0-.344.066-.382.108C5.284 2.033 4.5 3.238 4.5 6c0 2.762.784 3.967 1.16 4.392.038.042.142.108.382.108H7.75c.138 0 .25-.112.25-.25V8.655c0-.128-.098-.236-.226-.249l-1.522-.153c-.355-.036-.635-.317-.67-.672C5.531 7.093 5.5 6.565 5.5 6s.032-1.094.081-1.582c.036-.355.317-.636.672-.672l1.521-.152.047-.009c.105-.03.179-.128.179-.24V1.75c0-.138-.112-.25-.25-.25H6.042z"
        fill={color}
      />
    </svg>
  );
};

TelephoneVertical12.category = 'Communication';

export default TelephoneVertical12;
