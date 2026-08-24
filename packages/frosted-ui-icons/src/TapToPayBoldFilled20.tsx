import * as React from 'react';
import { IconProps } from './types';

export const TapToPayBoldFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="TapToPayBoldFilled20"
      {...props}
    >
      <path
        d="M10.929.53c.674-.482 1.61-.325 2.092.349 1.843 2.582 2.723 5.885 2.723 9.12 0 3.235-.88 6.538-2.723 9.12-.482.674-1.418.83-2.092.35-.674-.482-.831-1.419-.35-2.093 1.416-1.983 2.165-4.646 2.165-7.377s-.75-5.395-2.165-7.378c-.48-.674-.324-1.61.35-2.092zM7.38 3c.66-.5 1.6-.373 2.102.286 2.852 3.749 2.852 9.677 0 13.426-.502.659-1.443.787-2.102.286-.659-.502-.787-1.443-.285-2.103 2.035-2.675 2.035-7.117 0-9.793-.501-.659-.374-1.6.285-2.101zM4.168 5.39c.69-.459 1.62-.273 2.08.417C7.065 7.03 7.43 8.552 7.43 9.999s-.365 2.968-1.182 4.193c-.46.69-1.39.876-2.08.416-.69-.46-.875-1.39-.416-2.08.423-.635.678-1.545.678-2.53 0-.983-.255-1.893-.678-2.527-.46-.69-.273-1.62.416-2.08z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

TapToPayBoldFilled20.category = 'Money & Shopping';

export default TapToPayBoldFilled20;
