import * as React from 'react';
import { IconProps } from './types';

export const TelephoneVertical16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="TelephoneVertical16"
      {...props}
    >
      <path
        d="M10.37 0c.9 0 1.63.73 1.63 1.63v2.16l-.006.142c-.062.706-.577 1.3-1.282 1.45l-2.126.456C8.534 6.503 8.5 7.226 8.5 8s.034 1.496.086 2.161l2.126.456c.752.161 1.288.826 1.288 1.594v2.16c0 .9-.73 1.629-1.63 1.629H7.432c-.653 0-1.329-.304-1.702-.941C5.1 13.978 4 11.582 4 8 4 4.418 5.1 2.022 5.73.941 6.103.304 6.78 0 7.432 0h2.938zM7.356 1.504c-.166.019-.277.1-.33.193C6.498 2.597 5.5 4.736 5.5 8s1 5.402 1.525 6.303c.054.092.165.174.331.193l.076.004h2.938c.054 0 .1-.033.12-.08l.01-.05v-2.16c0-.06-.043-.113-.102-.126l-2.67-.572c-.319-.069-.557-.336-.588-.661C7.057 9.999 7 9.044 7 8c0-1.045.057-2 .14-2.852.031-.325.27-.592.589-.66l2.669-.572c.044-.01.08-.042.094-.083l.008-.044V1.63c0-.07-.058-.129-.13-.129H7.432l-.076.004z"
        fill={color}
      />
    </svg>
  );
};

TelephoneVertical16.category = 'Communication';

export default TelephoneVertical16;
