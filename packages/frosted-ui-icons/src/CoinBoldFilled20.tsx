import * as React from 'react';
import { IconProps } from './types';

export const CoinBoldFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="CoinBoldFilled20"
      {...props}
    >
      <path
        d="M7 1c3.314 0 6 4.03 6 9s-2.686 9-6 9-6-4.03-6-9 2.686-9 6-9zm11.331 13.25c-.248.724-.561 1.392-.936 1.984C16.355 17.877 14.8 19 12.885 19h-1.246c.474-.46.9-.975 1.267-1.526.63-.946 1.131-2.038 1.486-3.224h3.94zm.496-6.5c.117.722.177 1.477.177 2.25 0 .773-.06 1.528-.177 2.25h-3.994c.108-.73.166-1.484.166-2.25s-.058-1.52-.166-2.25h3.994zM12.885 1c1.916 0 3.47 1.123 4.51 2.766.375.592.688 1.26.936 1.984h-3.94c-.354-1.186-.854-2.278-1.485-3.224C12.54 1.975 12.113 1.46 11.64 1h1.246z"
        fill={color}
      />
    </svg>
  );
};

CoinBoldFilled20.category = 'Money & Shopping';

export default CoinBoldFilled20;
