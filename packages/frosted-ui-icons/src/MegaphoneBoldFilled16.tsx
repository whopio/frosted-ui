import * as React from 'react';
import { IconProps } from './types';

export const MegaphoneBoldFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="MegaphoneBoldFilled16"
      {...props}
    >
      <path
        d="M10.104 1.024C11.546.592 13 1.673 13 3.18v1.505c0 .132.088.249.213.294.062.022.124.046.187.074.357.156.765.411 1.083.829.329.43.517.976.517 1.618 0 .642-.188 1.187-.517 1.618-.318.418-.726.673-1.083.83-.063.027-.125.051-.187.073-.125.045-.213.16-.213.293v1.506c0 1.507-1.453 2.588-2.896 2.155l-1.931-.58c-.086-.026-.173.039-.173.128 0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5V2.556l5.104-1.532zM3 11.844l-.04-.012C1.797 11.483 1 10.412 1 9.198V5.802c0-1.214.797-2.285 1.96-2.634L3 3.155v8.689z"
        fill={color}
      />
    </svg>
  );
};

MegaphoneBoldFilled16.category = 'Objects';

export default MegaphoneBoldFilled16;
