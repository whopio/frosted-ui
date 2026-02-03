import * as React from 'react';
import { IconProps } from './types';

export const PaperAirplaneUpFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M12.6885 3.03003C14.2473 -0.128957 18.7526 -0.128826 20.3115 3.03003L31.0977 24.8943C32.9708 28.6913 29.097 32.7642 25.2109 31.0837L17.3926 27.7029C17.3458 27.6827 17.2978 27.6661 17.25 27.6492V18.4998C17.2498 18.0857 16.9141 17.7498 16.5 17.7498C16.086 17.7499 15.7502 18.0858 15.75 18.4998V27.6492C15.7022 27.6661 15.6542 27.6827 15.6074 27.7029L7.78906 31.0837C3.90299 32.7641 0.0291829 28.6912 1.90234 24.8943L12.6885 3.03003Z"
        fill={color}
      />
    </svg>
  );
};

PaperAirplaneUpFilled32.category = 'Communication';

export default PaperAirplaneUpFilled32;
