import * as React from 'react';
import { IconProps } from './types';

export const MailBoldFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="MailBoldFilled24"
      {...props}
    >
      <path
        d="M10.731 13.184c.81.349 1.728.349 2.538 0l9.73-4.203V16c0 3.314-2.686 6-6 6H7c-3.314 0-6-2.686-6-6V8.98l9.731 4.204zM17 2c2.92 0 5.352 2.087 5.889 4.85l-10.412 4.498c-.304.13-.648.13-.952 0L1.111 6.85C1.648 4.087 4.08 2 7 2h9.999z"
        fill={color}
      />
    </svg>
  );
};

MailBoldFilled24.category = 'Communication';

export default MailBoldFilled24;
