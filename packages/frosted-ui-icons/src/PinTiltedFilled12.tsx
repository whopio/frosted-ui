import * as React from 'react';
import { IconProps } from './types';

export const PinTiltedFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M6.37806 1.36815C7.06147 0.684736 8.17023 0.684737 8.85364 1.36815L10.6212 3.13573C11.3045 3.81915 11.3046 4.92697 10.6212 5.61034L8.91126 7.3203C8.85381 7.3779 8.81283 7.45036 8.7931 7.52929L8.24134 9.73534C7.91143 11.055 6.26765 11.5106 5.30579 10.5488L3.90345 9.1455L2.31263 10.7373C2.0198 11.0299 1.54492 11.0299 1.25208 10.7373C0.959187 10.4444 0.959187 9.96866 1.25208 9.67577L2.8429 8.08495L1.44056 6.68261C0.478827 5.72079 0.933556 4.07706 2.25306 3.74706L4.45911 3.1953C4.53812 3.17555 4.61144 3.13468 4.66907 3.07714L6.37806 1.36815Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

PinTiltedFilled12.category = 'Interface General';

export default PinTiltedFilled12;
