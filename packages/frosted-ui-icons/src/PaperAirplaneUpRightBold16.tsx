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
        d="M10.964 1.714c2.031-.642 3.944 1.27 3.301 3.301l-2.854 9.02c-.747 2.357-4.037 2.48-4.956.184l-1.309-3.267c-.022-.053-.064-.096-.117-.117l-3.27-1.31c-2.296-.92-2.172-4.21.185-4.957l9.02-2.854zm1.395 2.698c.154-.486-.305-.945-.792-.791l-9.02 2.855c-.566.179-.597.97-.045 1.191l3.141 1.26 2.033-2.034c.39-.39 1.024-.39 1.414 0 .39.39.39 1.024 0 1.415L7.057 10.34l1.254 3.135c.222.552 1.013.522 1.193-.045l2.855-9.019z"
        fill={color}
      />
    </svg>
  );
};

PaperAirplaneUpRightBold16.category = 'Communication';

export default PaperAirplaneUpRightBold16;
