import * as React from 'react';
import { IconProps } from './types';

export const PaperAirplaneLeftBoldFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M3.10545 19.4562C0.299521 18.0049 0.29945 13.9914 3.10545 12.5402L24.4092 1.52362C28.276 -0.476149 32.4467 3.63244 30.5049 7.5285L26.7793 15.0002H16.7207C16.1684 15.0002 15.7207 15.4479 15.7207 16.0002C15.7207 16.5524 16.1684 17.0002 16.7207 17.0002H26.7832L30.5068 24.4719C32.4476 28.3679 28.2775 32.4753 24.4111 30.4758L3.10545 19.4562Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

PaperAirplaneLeftBoldFilled32.category = 'Communication';

export default PaperAirplaneLeftBoldFilled32;
