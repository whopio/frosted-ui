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
        d="M6.016 1.572c.167-.612.8-.974 1.412-.807.612.168.973.8.806 1.413l-2.25 8.25c-.167.612-.799.973-1.412.806-.612-.167-.973-.8-.806-1.412l2.25-8.25zM2.037 3.087c.435-.463 1.164-.485 1.626-.05.463.435.484 1.163.049 1.626L2.453 6l1.259 1.337c.435.462.414 1.19-.049 1.626-.462.435-1.19.412-1.626-.05L.683 7.473c-.78-.827-.78-2.119 0-2.947l1.354-1.44zm6.3-.05c.462-.435 1.19-.412 1.625.05l1.355 1.44c.78.827.78 2.119 0 2.946l-1.355 1.44c-.435.462-1.163.485-1.625.05-.462-.436-.485-1.164-.05-1.626L9.546 6 8.287 4.663c-.435-.463-.413-1.19.05-1.626z"
        fill={color}
      />
    </svg>
  );
};

CodeBoldFilled12.category = 'Code';

export default CodeBoldFilled12;
