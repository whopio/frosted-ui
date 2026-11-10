import * as React from 'react';
import { IconProps } from './types';

export const FountainPenBoldFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="FountainPenBoldFilled16"
      {...props}
    >
      <path
        d="M12.212 9.775l-1.038 2.599c-.33.823-1.07 1.411-1.946 1.544L2.474 14.94l4.307-4.307c.027.001.054.005.081.005.829 0 1.5-.672 1.5-1.5 0-.829-.671-1.5-1.5-1.5-.828 0-1.5.671-1.5 1.5 0 .028.003.055.004.083l-4.304 4.303 1.023-6.75c.133-.876.72-1.617 1.543-1.946l2.597-1.04 5.987 5.987zM8.203 1.73C8.78.924 9.922.76 10.701 1.37l.161.144 3.626 3.626c.826.826.626 2.213-.4 2.773l-.589.321-5.732-5.732.322-.589.114-.183z"
        fill={color}
      />
    </svg>
  );
};

FountainPenBoldFilled16.category = 'Interface General';

export default FountainPenBoldFilled16;
