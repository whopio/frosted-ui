import * as React from 'react';
import { IconProps } from './types';

export const ChecklistBold12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="13"
      viewBox="0 0 12 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ChecklistBold12"
      {...props}
    >
      <path
        d="M7.499 0c.746 0 1.365.545 1.48 1.26 1.273.116 2.271 1.186 2.271 2.49v6c0 1.38-1.12 2.5-2.5 2.5h-5.5c-1.38 0-2.5-1.12-2.5-2.5v-6c0-1.303.997-2.373 2.27-2.49C3.136.546 3.756 0 4.502 0h2.998zm1.47 3.303C8.829 3.986 8.225 4.5 7.5 4.5h-3c-.725 0-1.33-.514-1.47-1.197-.165.081-.28.25-.28.447v6c0 .276.224.5.5.5h5.5c.276 0 .5-.224.5-.5v-6c0-.197-.115-.366-.281-.447zm-2.176 1.99c.39-.39 1.024-.39 1.414 0 .39.39.39 1.024 0 1.414l-2.25 2.25c-.39.39-1.024.39-1.414 0l-.75-.75c-.39-.39-.39-1.024 0-1.414.39-.39 1.024-.39 1.414 0l.043.043 1.543-1.543zM5 2.5h2V2H5v.5z"
        fill={color}
      />
    </svg>
  );
};

ChecklistBold12.category = 'Interface General';

export default ChecklistBold12;
