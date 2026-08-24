import * as React from 'react';
import { IconProps } from './types';

export const FolderAdd20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="FolderAdd20"
      {...props}
    >
      <path
        d="M5.702 2c.69 0 1.325.378 1.653.984l.984 1.817c.066.122.194.199.334.199h9.287C19.087 5 20 5.913 20 7.04v2.21c0 .414-.336.75-.75.75s-.75-.336-.75-.75V7.04c0-.298-.242-.54-.54-.54H8.673c-.69 0-1.325-.378-1.653-.984l-.984-1.817c-.066-.122-.194-.199-.334-.199H2.04c-.298 0-.54.242-.54.54v11.92c0 .298.242.54.54.54h9.21c.414 0 .75.336.75.75s-.336.75-.75.75H2.04C.913 18 0 17.087 0 15.96V4.04C0 2.913.913 2 2.04 2h3.662zM16 10c.414 0 .75.336.75.75v2.5h2.5c.414 0 .75.336.75.75s-.336.75-.75.75h-2.5v2.5c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-2.5h-2.5c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h2.5v-2.5c0-.414.336-.75.75-.75z"
        fill={color}
      />
    </svg>
  );
};

FolderAdd20.category = 'Interface General';

export default FolderAdd20;
