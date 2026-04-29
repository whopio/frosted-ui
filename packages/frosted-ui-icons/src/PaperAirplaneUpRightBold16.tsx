import * as React from 'react';
import { IconProps } from './types';

export const PaperAirplaneUpRightBold16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M10.965 1.7141C12.9958 1.07193 14.9079 2.98414 14.2658 5.01485L11.4111 14.0346C10.6648 16.3915 7.37477 16.5139 6.45513 14.219L5.14656 10.9521C5.12501 10.8988 5.08246 10.8561 5.02917 10.8347L1.7588 9.52404C-0.535971 8.60397 -0.412612 5.31392 1.94456 4.56808L10.965 1.7141ZM12.3592 4.41202C12.5128 3.92576 12.0541 3.46715 11.5678 3.62066L2.54809 6.47533C1.98112 6.65473 1.95084 7.44561 2.50251 7.66719L5.64375 8.92604L7.67668 6.8931C8.0671 6.50274 8.70036 6.50292 9.09089 6.8931C9.4814 7.28361 9.48136 7.91679 9.09089 8.30732L7.05727 10.3409L8.31197 13.4753C8.53327 14.0274 9.32503 13.9975 9.50452 13.4304L12.3592 4.41202Z"
        fill={color}
      />
    </svg>
  );
};

PaperAirplaneUpRightBold16.category = 'Communication';

export default PaperAirplaneUpRightBold16;
