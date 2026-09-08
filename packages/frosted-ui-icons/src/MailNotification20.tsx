import * as React from 'react';
import { IconProps } from './types';

export const MailNotification20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="MailNotification20"
      {...props}
    >
      <path
        d="M13.067 2c-.043.244-.067.494-.067.75s.024.506.067.75H5.75C3.955 3.5 2.5 4.955 2.5 6.75v.02l7.116 2.798c.247.097.521.097.768 0l6.563-2.58c.1.006.201.012.303.012.622 0 1.212-.136 1.745-.376.001.042.004.084.004.126v6.5c0 2.623-2.127 4.75-4.75 4.75H5.75C3.127 18 1 15.873 1 13.25v-6.5C1 4.127 3.127 2 5.75 2h7.317zm-2.134 8.964c-.6.235-1.266.235-1.866 0L2.5 8.383v4.867c0 1.795 1.455 3.25 3.25 3.25h8.499c1.795 0 3.25-1.455 3.25-3.25V8.383l-6.566 2.58zM17.25 0C18.769 0 20 1.231 20 2.75S18.769 5.5 17.25 5.5 14.5 4.269 14.5 2.75 15.731 0 17.25 0zm0 1.5c-.69 0-1.25.56-1.25 1.25S16.56 4 17.25 4s1.25-.56 1.25-1.25-.56-1.25-1.25-1.25z"
        fill={color}
      />
    </svg>
  );
};

MailNotification20.category = 'Communication';

export default MailNotification20;
