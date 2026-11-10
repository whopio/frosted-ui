import * as React from 'react';
import { IconProps } from './types';

export const HashtagFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="HashtagFilled24"
      {...props}
    >
      <path
        d="M17.604 2.611c.214-.8 1.036-1.275 1.836-1.06.8.214 1.275 1.037 1.061 1.838L19.667 6.5h2.337c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5h-3.14l-1.362 5.08h2.58c.827 0 1.5.67 1.5 1.5-.001.827-.673 1.499-1.5 1.5h-3.384l-.938 3.503c-.215.8-1.038 1.275-1.838 1.06-.8-.214-1.275-1.036-1.06-1.836l.73-2.728H7.465l-.939 3.504c-.214.8-1.037 1.275-1.838 1.06-.8-.214-1.274-1.036-1.06-1.836l.73-2.728H2c-.828 0-1.5-.672-1.5-1.5s.672-1.5 1.5-1.5h3.162l1.361-5.079h-2.6c-.828 0-1.5-.672-1.5-1.5s.672-1.5 1.5-1.5h3.405l1.042-3.89c.215-.8 1.037-1.274 1.837-1.06.8.214 1.275 1.037 1.06 1.838L10.435 6.5h6.127l1.043-3.89zm-9.335 11.97h6.127l1.36-5.08H9.63l-1.361 5.08z"
        fill={color}
      />
    </svg>
  );
};

HashtagFilled24.category = 'Interface General';

export default HashtagFilled24;
