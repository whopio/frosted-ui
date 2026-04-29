import * as React from 'react';
import { IconProps } from './types';

export const ProfileCircleFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M12 0.5C18.3513 0.5 23.5 5.64873 23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5ZM12 15.0039C8.32095 15.0039 6.32941 17.6333 5.40918 19.5176C7.16924 21.0619 9.47447 22 12 22C14.5253 22 16.8298 21.0616 18.5898 19.5176C17.6693 17.6335 15.6789 15.0039 12 15.0039ZM12 6.00391C10.063 6.00391 8.50391 7.5873 8.50391 9.52539C8.50412 11.4633 10.0631 13.0459 12 13.0459C13.9369 13.0459 15.4959 11.4633 15.4961 9.52539C15.4961 7.5873 13.937 6.00391 12 6.00391Z"
        fill={color}
      />
    </svg>
  );
};

ProfileCircleFilled24.category = 'People';

export default ProfileCircleFilled24;
