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
        d="M12.212 9.776l-1.038 2.598c-.33.823-1.07 1.411-1.946 1.544l-6.754 1.023 4.307-4.308c.027.002.054.005.081.005.829 0 1.5-.672 1.5-1.5s-.671-1.5-1.5-1.5c-.828 0-1.5.672-1.5 1.5 0 .028.003.056.004.083l-4.304 4.304 1.023-6.75c.133-.877.72-1.617 1.543-1.946l2.597-1.04 5.987 5.987zM8.203 1.73c.576-.806 1.719-.972 2.498-.36l.161.143 3.626 3.626c.826.826.626 2.214-.4 2.774l-.589.32-5.732-5.732.322-.588.114-.183z"
        fill={color}
      />
    </svg>
  );
};

FountainPenBoldFilled16.category = 'Interface General';

export default FountainPenBoldFilled16;
