import * as React from 'react';
import { IconProps } from './types';

export const EditBold20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="EditBold20"
      {...props}
    >
      <path
        d="M7 1c.552 0 1 .448 1 1s-.448 1-1 1H6C4.343 3 3 4.343 3 6v8c0 1.657 1.343 3 3 3h8c1.657 0 3-1.343 3-3v-1c0-.552.448-1 1-1s1 .448 1 1v1c0 2.761-2.239 5-5 5H6c-2.761 0-5-2.239-5-5V6c0-2.761 2.239-5 5-5h1zm6.363.723c1.357-1.357 3.557-1.357 4.914 0 1.357 1.357 1.357 3.557 0 4.914l-6.734 6.734c-.563.563-1.326.879-2.121.879H7.25c-.828 0-1.5-.672-1.5-1.5v-2.172c0-.795.316-1.558.879-2.121l6.734-6.734zM8.043 9.87c-.187.188-.293.442-.293.707v1.672h1.672c.265 0 .52-.106.707-.293l4.217-4.217-2.086-2.086-4.217 4.217zm8.82-6.734c-.576-.576-1.51-.576-2.086 0L13.674 4.24l2.086 2.086 1.103-1.103c.576-.576.576-1.51 0-2.086z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

EditBold20.category = 'Interface General';

export default EditBold20;
