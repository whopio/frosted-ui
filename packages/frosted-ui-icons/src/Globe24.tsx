import * as React from 'react';
import { IconProps } from './types';

export const Globe24 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M12 2.5C17.5078 2.5 22 6.99219 22 12.5C22 18.0469 17.5078 22.5 12 22.5C6.45312 22.5 2 18.0469 2 12.5C2 6.99219 6.45312 2.5 12 2.5ZM12 20.625C12.2734 20.625 13.0156 20.3516 13.8359 18.75C14.1875 18.0469 14.4609 17.2266 14.6953 16.25H9.26562C9.5 17.2266 9.77344 18.0469 10.125 18.75C10.9453 20.3516 11.6875 20.625 12 20.625ZM8.95312 14.375H15.0078C15.0859 13.7891 15.125 13.1641 15.125 12.5C15.125 11.875 15.0859 11.25 15.0078 10.625H8.95312C8.875 11.25 8.875 11.875 8.875 12.5C8.875 13.1641 8.875 13.7891 8.95312 14.375ZM14.6953 8.75C14.4609 7.8125 14.1875 6.99219 13.8359 6.28906C13.0156 4.6875 12.2734 4.375 12 4.375C11.6875 4.375 10.9453 4.6875 10.125 6.28906C9.77344 6.99219 9.5 7.8125 9.26562 8.75H14.6953ZM16.8828 10.625C16.9609 11.25 17 11.875 17 12.5C17 13.1641 16.9609 13.7891 16.8828 14.375H19.8906C20.0469 13.7891 20.125 13.1641 20.125 12.5C20.125 11.875 20.0469 11.25 19.8906 10.625H16.8828ZM15.3594 5.11719C15.9062 6.13281 16.3359 7.38281 16.6094 8.75H19.1875C18.3672 7.14844 17 5.85938 15.3594 5.11719ZM8.60156 5.11719C6.96094 5.85938 5.59375 7.14844 4.77344 8.75H7.35156C7.625 7.38281 8.05469 6.13281 8.60156 5.11719ZM3.875 12.5C3.875 13.1641 3.91406 13.7891 4.07031 14.375H7.07812C7 13.7891 7 13.1641 7 12.5C7 11.875 7 11.25 7.07812 10.625H4.07031C3.91406 11.25 3.875 11.875 3.875 12.5ZM19.1875 16.25H16.6094C16.3359 17.6562 15.9062 18.9062 15.3594 19.9219C17 19.1797 18.3672 17.8906 19.1875 16.25ZM7.35156 16.25H4.77344C5.59375 17.8906 6.96094 19.1797 8.60156 19.9219C8.05469 18.9062 7.625 17.6562 7.35156 16.25Z"
          fill={color}
        />
      </svg>
    );
  },
);

export default Globe24;
