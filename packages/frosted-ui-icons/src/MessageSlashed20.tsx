import * as React from 'react';
import { IconProps } from './types';

export const MessageSlashed20 = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-fui-icon="true"
        {...props}
        ref={forwardedRef}
      >
        <path
          d="M1.25491 16.6866C0.943771 16.9601 0.913198 17.4339 1.18663 17.7451C1.46005 18.0562 1.93394 18.0868 2.24509 17.8134L1.25491 16.6866ZM18.7451 3.31337C19.0562 3.03995 19.0868 2.56606 18.8134 2.25491C18.5399 1.94377 18.0661 1.9132 17.7549 2.18663L18.7451 3.31337ZM7.74501 15.403L7.26262 15.9773L7.26313 15.9777L7.74501 15.403ZM9.46601 16.846L8.98413 17.4207L8.98441 17.4209L9.46601 16.846ZM10.533 16.849L10.0545 16.2715L10.0543 16.2716L10.533 16.849ZM12.282 15.4L12.7605 15.9775L12.7618 15.9765L12.282 15.4ZM13.25 3.875C13.6642 3.875 14 3.53921 14 3.125C14 2.71079 13.6642 2.375 13.25 2.375V3.875ZM1.54199 13.25C1.54199 13.6642 1.87778 14 2.29199 14C2.70621 14 3.04199 13.6642 3.04199 13.25H1.54199ZM2.24509 17.8134L18.7451 3.31337L17.7549 2.18663L1.25491 16.6866L2.24509 17.8134ZM4.21875 15.958H7.21001V14.458H4.21875V15.958ZM7.21001 15.958C7.2292 15.958 7.24747 15.9646 7.26262 15.9773L8.2274 14.8287C7.94255 14.5894 7.58281 14.458 7.21001 14.458V15.958ZM7.26313 15.9777L8.98413 17.4207L9.94789 16.2713L8.22689 14.8283L7.26313 15.9777ZM8.98441 17.4209C9.5692 17.9108 10.4222 17.9151 11.0117 17.4264L10.0543 16.2716C10.0238 16.2969 9.97882 16.2972 9.94762 16.2711L8.98441 17.4209ZM11.0115 17.4265L12.7605 15.9775L11.8035 14.8225L10.0545 16.2715L11.0115 17.4265ZM12.7618 15.9765C12.7753 15.9652 12.7943 15.958 12.814 15.958V14.458C12.4457 14.458 12.0868 14.5867 11.8022 14.8235L12.7618 15.9765ZM12.814 15.958H16.042V14.458H12.814V15.958ZM16.042 15.958C17.3772 15.958 18.459 14.8762 18.459 13.541H16.959C16.959 14.0478 16.5488 14.458 16.042 14.458V15.958ZM18.459 13.541V4.791H16.959V13.541H18.459ZM18.459 4.791C18.459 4.46518 18.4564 4.03825 18.3379 3.65115C18.2032 3.21146 17.9173 2.81141 17.3974 2.58121L16.7901 3.95279C16.839 3.97444 16.8551 3.99228 16.8612 3.99962C16.8693 4.00931 16.8861 4.03317 16.9036 4.09035C16.9465 4.23025 16.959 4.43582 16.959 4.791H18.459ZM13.25 2.375H3.95899V3.875H13.25V2.375ZM3.95899 2.375C2.62378 2.375 1.54199 3.45679 1.54199 4.792H3.04199C3.04199 4.28521 3.45221 3.875 3.95899 3.875V2.375ZM1.54199 4.792V13.25H3.04199V4.792H1.54199Z"
          fill={color}
        />
      </svg>
    );
  },
);

export default MessageSlashed20;