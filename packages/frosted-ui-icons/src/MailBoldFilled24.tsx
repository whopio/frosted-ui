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
        d="M23.999 16c0 3.314-2.686 6-6 6H6c-3.314 0-6-2.686-6-6V8.549l10.731 4.635c.81.349 1.728.349 2.538 0l10.73-4.635V16zm-6-14c2.782 0 5.12 1.894 5.8 4.463-.032.01-.064.022-.096.036l-11.227 4.849c-.304.13-.648.13-.952 0L.297 6.499c-.032-.014-.065-.027-.098-.037C.88 3.894 3.22 2 6 2h11.999z"
        fill={color}
      />
    </svg>
  );
};

MailBoldFilled24.category = 'Communication';

export default MailBoldFilled24;
