import * as React from 'react';
import { IconProps } from './types';

export const ArrowUpFromBracketBoldFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M17.5 9.25026C18.3284 9.25026 19 9.92183 19 10.7503V13.0003C18.9998 16.3138 16.3136 19.0003 13 19.0003H7C3.6864 19.0003 1.00018 16.3138 1 13.0003V10.7503C1 9.92183 1.67157 9.25026 2.5 9.25026C3.32843 9.25026 4 9.92184 4 10.7503V13.0003C4.00018 14.657 5.34326 16.0003 7 16.0003H13C14.6567 16.0003 15.9998 14.657 16 13.0003V10.7503C16 9.92183 16.6716 9.25026 17.5 9.25026ZM8.64453 1.56179C9.34627 0.860048 10.4571 0.815908 11.21 1.42995L11.3555 1.56179L15.0605 5.26686C15.6462 5.85266 15.6463 6.8032 15.0605 7.38893C14.4748 7.97402 13.5251 7.97419 12.9395 7.38893L11.5 5.9485V11.5003C11.4998 12.3285 10.8283 13.0003 10 13.0003C9.17174 13.0002 8.50018 12.3285 8.5 11.5003V5.94948L7.06055 7.38893C6.47487 7.97409 5.52511 7.97412 4.93945 7.38893C4.35373 6.80322 4.35386 5.85267 4.93945 5.26686L8.64453 1.56179Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

ArrowUpFromBracketBoldFilled20.category = 'Arrows';

export default ArrowUpFromBracketBoldFilled20;
