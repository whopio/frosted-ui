import * as React from 'react';
import { IconProps } from './types';

export const Bounties16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="Bounties16"
      {...props}
    >
      <path
        d="M7.998.465c4.16 0 7.532 3.373 7.532 7.534 0 4.16-3.372 7.533-7.532 7.533S.465 12.159.465 7.999 3.838.465 7.998.465zm0 1.25C4.528 1.715 1.715 4.53 1.715 8c0 3.47 2.813 6.283 6.283 6.283s6.282-2.813 6.282-6.283-2.812-6.284-6.282-6.284zm0 1.82c2.465 0 4.463 1.999 4.463 4.464 0 2.464-1.998 4.462-4.463 4.462S3.535 10.463 3.535 8c0-2.465 1.998-4.463 4.463-4.463zm0 1.25c-1.774 0-3.213 1.44-3.213 3.214s1.439 3.212 3.213 3.212S11.211 9.773 11.211 8c0-1.775-1.439-3.213-3.213-3.213zM8 6.784c.672 0 1.218.545 1.218 1.217S8.67 9.217 7.999 9.217c-.672 0-1.217-.545-1.217-1.217S7.327 6.783 8 6.783z"
        fill={color}
      />
    </svg>
  );
};

Bounties16.category = 'Interface General';

export default Bounties16;
