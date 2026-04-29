import * as React from 'react';
import { IconProps } from './types';

export const PaperAirplaneUpRight32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M26.9257 0.501104C29.7436 -0.396626 32.4005 2.26022 31.5025 5.07796L24.0482 28.4643C22.7932 32.4004 17.2277 32.4132 15.9545 28.4829L13.2041 19.9914C13.0216 19.4281 12.5796 18.9863 12.0163 18.8037L3.51242 16.0464C-0.416736 14.7719 -0.402451 9.20781 3.53313 7.95335L26.9257 0.501104ZM30.0731 4.62221C30.6011 2.96486 29.0389 1.40258 27.3814 1.93051L3.98888 9.38275C1.44215 10.1945 1.43262 13.795 3.97507 14.6198L12.479 17.3771C12.7418 17.4623 12.9899 17.5792 13.2193 17.7223L18.9396 12.0019C19.2325 11.7091 19.7074 11.7091 20.0003 12.0019C20.2932 12.2948 20.2932 12.7697 20.0003 13.0626L14.282 18.7809C14.4272 19.0122 14.5447 19.2632 14.6307 19.5288L17.3811 28.0203C18.205 30.5635 21.8066 30.5554 22.6188 28.0085L30.0731 4.62221Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

PaperAirplaneUpRight32.category = 'Communication';

export default PaperAirplaneUpRight32;
