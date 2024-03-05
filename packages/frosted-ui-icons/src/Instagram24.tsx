import * as React from 'react';
import { IconProps } from './types';

export const Instagram24 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M12 8.00781C14.4609 8.00781 16.4922 10.0391 16.4922 12.5C16.4922 15 14.4609 16.9922 12 16.9922C9.5 16.9922 7.50781 15 7.50781 12.5C7.50781 10.0391 9.5 8.00781 12 8.00781ZM12 15.4297C13.6016 15.4297 14.8906 14.1406 14.8906 12.5C14.8906 10.8984 13.6016 9.60938 12 9.60938C10.3594 9.60938 9.07031 10.8984 9.07031 12.5C9.07031 14.1406 10.3984 15.4297 12 15.4297ZM17.7031 7.85156C17.7031 7.26562 17.2344 6.79688 16.6484 6.79688C16.0625 6.79688 15.5938 7.26562 15.5938 7.85156C15.5938 8.4375 16.0625 8.90625 16.6484 8.90625C17.2344 8.90625 17.7031 8.4375 17.7031 7.85156ZM20.6719 8.90625C20.75 10.3516 20.75 14.6875 20.6719 16.1328C20.5938 17.5391 20.2812 18.75 19.2656 19.8047C18.25 20.8203 17 21.1328 15.5938 21.2109C14.1484 21.2891 9.8125 21.2891 8.36719 21.2109C6.96094 21.1328 5.75 20.8203 4.69531 19.8047C3.67969 18.75 3.36719 17.5391 3.28906 16.1328C3.21094 14.6875 3.21094 10.3516 3.28906 8.90625C3.36719 7.5 3.67969 6.25 4.69531 5.23438C5.75 4.21875 6.96094 3.90625 8.36719 3.82812C9.8125 3.75 14.1484 3.75 15.5938 3.82812C17 3.90625 18.25 4.21875 19.2656 5.23438C20.2812 6.25 20.5938 7.5 20.6719 8.90625ZM18.7969 17.6562C19.2656 16.5234 19.1484 13.7891 19.1484 12.5C19.1484 11.25 19.2656 8.51562 18.7969 7.34375C18.4844 6.60156 17.8984 5.97656 17.1562 5.70312C15.9844 5.23438 13.25 5.35156 12 5.35156C10.7109 5.35156 7.97656 5.23438 6.84375 5.70312C6.0625 6.01562 5.47656 6.60156 5.16406 7.34375C4.69531 8.51562 4.8125 11.25 4.8125 12.5C4.8125 13.7891 4.69531 16.5234 5.16406 17.6562C5.47656 18.4375 6.0625 19.0234 6.84375 19.3359C7.97656 19.8047 10.7109 19.6875 12 19.6875C13.25 19.6875 15.9844 19.8047 17.1562 19.3359C17.8984 19.0234 18.5234 18.4375 18.7969 17.6562Z"
          fill={color}
        />
      </svg>
    );
  },
);

export default Instagram24;
