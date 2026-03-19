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
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M23 16C23 19.3137 20.3137 22 17 22H7C3.68629 22 1 19.3137 1 16V9.07715L10.4121 13.5488C11.4166 14.0259 12.5834 14.0259 13.5879 13.5488L23 9.07715V16ZM17 2C19.597 2 21.8084 3.65011 22.6436 5.95898C22.5464 5.98285 22.4504 6.01789 22.3564 6.0625L12.3008 10.8389C12.1108 10.9291 11.8892 10.9291 11.6992 10.8389L1.64355 6.0625C1.54934 6.01775 1.45294 5.98286 1.35547 5.95898C2.19056 3.64995 4.40284 2 7 2H17Z"
        fill={color}
      />
    </svg>
  );
};

MailBoldFilled24.category = 'Communication';

export default MailBoldFilled24;
