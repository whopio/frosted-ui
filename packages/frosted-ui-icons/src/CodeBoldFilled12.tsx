import * as React from 'react';
import { IconProps } from './types';

export const CodeBoldFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="CodeBoldFilled12"
      {...props}
    >
      <path
        d="M6.016 1.572c.167-.612.8-.974 1.412-.807.612.168.974.8.807 1.412l-2.25 8.25c-.167.613-.8.974-1.412.807-.613-.167-.974-.8-.807-1.412l2.25-8.25zM2.037 3.087c.436-.463 1.164-.485 1.626-.05.463.435.484 1.163.05 1.626L2.452 6l1.26 1.337c.434.462.413 1.19-.05 1.626-.462.435-1.19.412-1.626-.05L.683 7.473c-.78-.828-.78-2.12 0-2.947l1.354-1.44zm6.3-.05c.463-.435 1.19-.413 1.625.05l1.356 1.439c.779.828.779 2.12 0 2.947l-1.356 1.44c-.435.462-1.162.484-1.625.05-.462-.436-.485-1.164-.05-1.626L9.547 6l-1.26-1.337c-.435-.463-.412-1.191.05-1.626z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

CodeBoldFilled12.category = 'Code';

export default CodeBoldFilled12;
