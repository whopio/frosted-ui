import * as React from 'react';
import { IconProps } from './types';

export const CodeBoldFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="CodeBoldFilled16"
      {...props}
    >
      <path
        d="M8.294 2.171c.182-.666.87-1.058 1.535-.877.666.182 1.059.87.877 1.535l-3 11c-.182.666-.87 1.059-1.535.877-.666-.181-1.058-.869-.877-1.535l3-11zM2.923 4.31c.473-.503 1.264-.526 1.766-.053.503.473.527 1.264.054 1.767l-1.806 1.92c-.03.032-.03.081 0 .113l1.806 1.92c.473.502.45 1.293-.054 1.766-.502.473-1.293.45-1.766-.052L1.116 9.77c-.936-.995-.936-2.547 0-3.541l1.807-1.92zm8.387-.053c.502-.473 1.293-.45 1.766.053l1.807 1.92c.936.994.936 2.546 0 3.54l-1.807 1.92c-.473.503-1.264.526-1.766.053-.503-.473-.527-1.264-.054-1.766l1.806-1.92c.03-.032.03-.081 0-.113l-1.806-1.92c-.473-.503-.449-1.294.054-1.767z"
        fill={color}
      />
    </svg>
  );
};

CodeBoldFilled16.category = 'Code';

export default CodeBoldFilled16;
