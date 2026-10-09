import * as React from 'react';
import { IconProps } from './types';

export const PencilBold24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="PencilBold24"
      {...props}
    >
      <path
        d="M17.813.75c1.265 0 2.479.503 3.373 1.397l.666.666c.895.895 1.398 2.109 1.398 3.374 0 1.266-.503 2.48-1.398 3.375L9.457 21.957c-.153.153-.351.253-.565.283l-7 1c-.312.045-.627-.06-.849-.283-.223-.223-.328-.537-.283-.849l1-7c.03-.214.13-.412.283-.565L14.437 2.147c.895-.894 2.11-1.397 3.376-1.397zM3.693 15.72l-.764 5.35 5.35-.763 8.807-8.807L12.5 6.914l-8.808 8.807zm14.12-12.97c-.735 0-1.44.292-1.96.812L13.913 5.5l4.586 4.586 1.939-1.939c.52-.52.811-1.224.811-1.96 0-.735-.292-1.44-.811-1.96l-.666-.665c-.52-.52-1.226-.812-1.96-.812z"
        fill={color}
      />
    </svg>
  );
};

PencilBold24.category = 'Objects';

export default PencilBold24;
