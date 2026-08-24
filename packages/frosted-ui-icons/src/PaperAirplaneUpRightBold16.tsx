import * as React from 'react';
import { IconProps } from './types';

export const PaperAirplaneUpRightBold16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="PaperAirplaneUpRightBold16"
      {...props}
    >
      <path
        d="M10.965 1.714c2.03-.642 3.943 1.27 3.3 3.3l-2.854 9.02c-.746 2.357-4.037 2.48-4.956.185l-1.309-3.267c-.021-.053-.064-.096-.117-.117l-3.27-1.311c-2.295-.92-2.172-4.21.185-4.956l9.02-2.854zm1.394 2.698c.153-.486-.305-.945-.791-.791l-9.02 2.854c-.567.18-.597.97-.046 1.192l3.141 1.259 2.033-2.033c.39-.39 1.024-.39 1.415 0 .39.39.39 1.024 0 1.414l-2.034 2.034 1.255 3.134c.221.552 1.013.523 1.192-.045l2.855-9.018z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

PaperAirplaneUpRightBold16.category = 'Communication';

export default PaperAirplaneUpRightBold16;
