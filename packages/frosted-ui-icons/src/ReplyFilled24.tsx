import * as React from 'react';
import { IconProps } from './types';

export const ReplyFilled24 = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-fui-icon="true"
        {...props}
        ref={forwardedRef}
      >
        <path
          d="M11.9994 4.37062C11.9994 3.28924 10.7194 2.71805 9.91456 3.44031L1.41316 11.0698C0.859675 11.5665 0.859677 12.4337 1.41316 12.9304L9.91456 20.5598C10.7194 21.2821 11.9994 20.7109 11.9994 19.6295V16.255C15.7429 16.305 17.7018 16.7368 18.8804 17.403C20.0752 18.0783 20.5519 19.0318 21.3047 20.5376L21.3286 20.5855C21.4842 20.8966 21.8332 21.0599 22.1718 20.98C22.5103 20.9001 22.7494 20.5979 22.7494 20.2501C22.7494 15.9847 22.1975 12.795 20.3787 10.6964C18.642 8.69245 15.9063 7.85116 11.9994 7.75873V4.37062Z"
          fill={color}
        />
      </svg>
    );
  },
);

export default ReplyFilled24;
