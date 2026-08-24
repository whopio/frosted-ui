import * as React from 'react';
import { IconProps } from './types';

export const CubeBoldFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="CubeBoldFilled24"
      {...props}
    >
      <path
        d="M9.5 1.443c1.547-.893 3.453-.893 5 0l5.393 3.114c1.546.893 2.5 2.543 2.5 4.33v6.226c0 1.787-.954 3.437-2.5 4.33L14.5 22.557c-1.547.893-3.453.893-5 0l-5.393-3.114c-1.546-.893-2.5-2.544-2.5-4.33V8.887c0-1.787.954-3.437 2.5-4.33L9.5 1.443zm9.493 6.56c-.274-.479-.885-.645-1.364-.371L12 10.848 6.371 7.632c-.48-.274-1.09-.108-1.364.372s-.108 1.09.372 1.364L11 12.58V19c0 .552.448 1 1 1s1-.448 1-1v-6.42l5.621-3.212c.48-.274.646-.885.372-1.364z"
        fill={color}
      />
    </svg>
  );
};

CubeBoldFilled24.category = 'Objects';

export default CubeBoldFilled24;
