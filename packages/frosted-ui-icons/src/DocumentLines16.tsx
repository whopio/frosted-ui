import * as React from 'react';
import { IconProps } from './types';

export const DocumentLines16 = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-fui-icon="true"
        {...props}
        ref={forwardedRef}
      >
        <path
          d="M8.89049 2.22384L9.42082 1.69351L9.42081 1.6935L8.89049 2.22384ZM12.4428 5.77612L11.9124 6.30645L11.9124 6.30646L12.4428 5.77612ZM5.68746 10.5C5.27325 10.5 4.93746 10.8358 4.93746 11.25C4.93746 11.6642 5.27325 12 5.68746 12V10.5ZM10.3125 12C10.7267 12 11.0625 11.6642 11.0625 11.25C11.0625 10.8358 10.7267 10.5 10.3125 10.5V12ZM5.68746 7.76039C5.27325 7.76039 4.93746 8.09618 4.93746 8.51039C4.93746 8.92461 5.27325 9.26039 5.68746 9.26039V7.76039ZM7.99996 9.26039C8.41417 9.26039 8.74996 8.92461 8.74996 8.51039C8.74996 8.09618 8.41417 7.76039 7.99996 7.76039V9.26039ZM7.74996 2.16665V4.83331H9.24996V2.16665H7.74996ZM7.74996 4.83331C7.74996 5.9839 8.68267 6.91665 9.83329 6.91665V5.41665C9.51111 5.41665 9.24996 5.15549 9.24996 4.83331H7.74996ZM9.83329 6.91665H12.5V5.41665H9.83329V6.91665ZM4.49996 2.58331H7.94769V1.08331H4.49996V2.58331ZM7.94769 2.58331C8.10237 2.58331 8.25075 2.64476 8.36018 2.75418L9.42081 1.6935C9.0301 1.30281 8.50022 1.08331 7.94769 1.08331V2.58331ZM8.36016 2.75417L11.9124 6.30645L12.9731 5.24579L9.42082 1.69351L8.36016 2.75417ZM11.9124 6.30646C12.0218 6.41586 12.0833 6.56422 12.0833 6.71891H13.5833C13.5833 6.16639 13.3638 5.63649 12.9731 5.24578L11.9124 6.30646ZM12.0833 6.71891V12.8333H13.5833V6.71891H12.0833ZM12.0833 12.8333C12.0833 13.1555 11.8221 13.4166 11.5 13.4166V14.9166C12.6506 14.9166 13.5833 13.9839 13.5833 12.8333H12.0833ZM11.5 13.4166H4.49996V14.9166H11.5V13.4166ZM4.49996 13.4166C4.17779 13.4166 3.91663 13.1555 3.91663 12.8333H2.41663C2.41663 13.9839 3.34937 14.9166 4.49996 14.9166V13.4166ZM3.91663 12.8333V3.16665H2.41663V12.8333H3.91663ZM3.91663 3.16665C3.91663 2.84448 4.17779 2.58331 4.49996 2.58331V1.08331C3.34937 1.08331 2.41663 2.01605 2.41663 3.16665H3.91663ZM5.68746 12H10.3125V10.5H5.68746V12ZM5.68746 9.26039H7.99996V7.76039H5.68746V9.26039Z"
          fill={color}
        />
      </svg>
    );
  },
);

export default DocumentLines16;
