import * as React from 'react';
import { IconProps } from './types';

export const AddPhotoFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="AddPhotoFilled20"
      {...props}
    >
      <path
        d="M14.63 0c-.082.235-.13.487-.13.75V1h-.25C13.007 1 12 2.007 12 3.25s1.007 2.25 2.25 2.25h.25v.25C14.5 6.993 15.507 8 16.75 8S19 6.993 19 5.75V5.5h.25c.263 0 .515-.049.75-.132v9.282c0 2.955-2.395 5.35-5.35 5.35h-9.3C2.395 20 0 17.605 0 14.65v-9.3C0 2.395 2.395 0 5.35 0h9.28zm-.755 8.438c-.8 0-1.566.317-2.13.882L3.21 17.852c.612.41 1.347.648 2.139.648h9.3c2.126 0 3.85-1.724 3.85-3.85v-2.835L16.006 9.32c-.565-.565-1.332-.883-2.131-.883zM6.75 4C5.231 4 4 5.231 4 6.75S5.231 9.5 6.75 9.5 9.5 8.269 9.5 6.75 8.269 4 6.75 4zm10-4c.414 0 .75.336.75.75V2.5h1.75c.414 0 .75.336.75.75s-.336.75-.75.75H17.5v1.75c0 .414-.336.75-.75.75S16 6.164 16 5.75V4h-1.75c-.414 0-.75-.336-.75-.75s.336-.75.75-.75H16V.75c0-.414.336-.75.75-.75z"
        fill={color}
      />
    </svg>
  );
};

AddPhotoFilled20.category = 'Interface General';

export default AddPhotoFilled20;
