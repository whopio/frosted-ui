import * as React from 'react';
import { IconProps } from './types';

export const ArrowDownAngleLeftBold16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ArrowDownAngleLeftBold16"
      {...props}
    >
      <path
        d="M14 2.25c.552 0 1 .448 1 1V8.5c0 1.243-1.007 2.25-2.25 2.25H4.514l1.659 1.51c.408.373.438 1.005.066 1.413-.372.408-1.003.438-1.412.066l-3.5-3.187c-.205-.188-.324-.452-.327-.73-.003-.278.11-.545.313-.736l3.5-3.313c.4-.38 1.034-.362 1.414.04.38.4.362 1.034-.04 1.414L4.579 8.75h8.172c.138 0 .25-.112.25-.25V3.25c0-.552.448-1 1-1z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

ArrowDownAngleLeftBold16.category = 'Arrows';

export default ArrowDownAngleLeftBold16;
