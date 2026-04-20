import * as React from 'react';
import { IconProps } from './types';

export const PaperAirplaneDownBoldFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M12.5437 28.8933C13.995 31.6992 18.0085 31.6994 19.4597 28.8933L30.4763 7.58963C32.4757 3.72294 28.3673 -0.44747 24.4714 1.49392L16.9988 5.21951V15.2781C16.9988 15.8304 16.551 16.2781 15.9988 16.2781C15.4466 16.2779 14.9988 15.8303 14.9988 15.2781V5.21463L7.52805 1.49197C3.63184 -0.449297 -0.475791 3.72109 1.52414 7.58767L12.5437 28.8933Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

PaperAirplaneDownBoldFilled32.category = 'Communication';

export default PaperAirplaneDownBoldFilled32;
