import * as React from 'react';
import { IconProps } from './types';

export const QuestionCircleBold16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="QuestionCircleBold16"
      {...props}
    >
      <path
        d="M8 .5c4.142 0 7.5 3.358 7.5 7.5 0 4.142-3.358 7.5-7.5 7.5C3.858 15.5.5 12.142.5 8 .5 3.858 3.858.5 8 .5zm0 2C4.962 2.5 2.5 4.962 2.5 8s2.462 5.5 5.5 5.5 5.5-2.462 5.5-5.5S11.038 2.5 8 2.5zm0 7.75c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1zm-.003-6.5c1.52 0 2.753 1.168 2.753 2.68 0 1.129-.707 2.226-1.808 2.644-.135.395-.51.678-.95.676-.552-.003-.998-.454-.995-1.006.005-.873.696-1.367 1.197-1.523l.11-.047c.252-.133.446-.43.446-.744 0-.348-.278-.68-.753-.68-.471 0-.747.328-.747.68v.193c0 .552-.448 1-1 1s-1-.448-1-1V6.43c0-1.508 1.224-2.68 2.747-2.68z"
        fill={color}
      />
    </svg>
  );
};

QuestionCircleBold16.category = 'Interface General';

export default QuestionCircleBold16;
