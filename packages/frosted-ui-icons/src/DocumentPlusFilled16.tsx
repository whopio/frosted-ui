import * as React from 'react';
import { IconProps } from './types';

export const DocumentPlusFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="DocumentPlusFilled16"
      {...props}
    >
      <path
        d="M4.751 0c1.794 0 3.25 1.456 3.25 3.25V4c0 1.519 1.231 2.75 2.75 2.75h1c1.783 0 3.23 1.437 3.249 3.216v2.284c0 2.07-1.68 3.75-3.75 3.75H6.414c.105-.243.165-.511.165-.793v-.83h.83c1.103 0 2-.895 2-2-.001-1.103-.897-1.998-2-2h-.83V9.55c0-1.104-.896-2-2-2s-2 .895-2 2v.828h-.828c-.266 0-.52.052-.752.146V3.75C.999 1.68 2.68 0 4.751 0zm-.173 8.8c.414 0 .75.336.75.75v2.078h2.08c.413 0 .749.336.75.75 0 .414-.337.75-.75.75h-2.08v2.079c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-2.08H1.75c-.414 0-.75-.335-.75-.75 0-.413.336-.75.75-.75h2.078V9.55c0-.414.336-.75.75-.75zM8.223.009c.13.008.26.023.387.049 3.196.639 5.693 3.136 6.332 6.332.007.035.01.07.016.106-.845-.774-1.971-1.246-3.207-1.246h-1c-.69 0-1.25-.56-1.25-1.25v-.75c0-1.253-.486-2.393-1.278-3.241z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DocumentPlusFilled16.category = 'Interface General';

export default DocumentPlusFilled16;
