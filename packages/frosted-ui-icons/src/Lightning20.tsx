import * as React from 'react';
import { IconProps } from './types';

export const Lightning20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="Lightning20"
      {...props}
    >
      <path
        d="M13.46 0c.869 0 1.443.904 1.075 1.69L12.05 7h3.825c1.007 0 1.555 1.176.91 1.948l-8.847 10.59c-.777.93-2.285.232-2.08-.963l1.21-7.075H3.853c-.807 0-1.379-.787-1.13-1.554l2.902-8.925.041-.112C5.894.362 6.43 0 7.03 0h6.43zM4.283 10h3.415c.6 0 1.056.54.955 1.132l-1.122 6.552L15.205 8.5h-3.991c-.71 0-1.178-.737-.877-1.379l2.63-5.621H7.047L4.283 10z"
        fill={color}
      />
    </svg>
  );
};

Lightning20.category = 'Nature & Weather';

export default Lightning20;
