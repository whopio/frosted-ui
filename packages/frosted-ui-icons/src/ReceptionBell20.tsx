import * as React from 'react';
import { IconProps } from './types';

export const ReceptionBell20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ReceptionBell20"
      {...props}
    >
      <path
        d="M12.522 1c.414 0 .75.336.75.75s-.336.75-.75.75H10.75v1.521c3.204.184 5.26 1.55 6.508 3.503 1.302 2.04 1.663 4.625 1.729 6.87.027.899-.704 1.606-1.571 1.606H10.75v1.499h6.499c.414 0 .75.336.75.75s-.336.75-.75.75h-14.5c-.413 0-.75-.336-.75-.75.001-.414.337-.75.75-.75h6.5V16H2.584c-.868 0-1.597-.708-1.57-1.605.066-2.246.426-4.83 1.729-6.87C3.99 5.57 6.045 4.204 9.25 4.02V2.5H7.477c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h5.045zM10 5.5c-3.178 0-4.954 1.204-5.994 2.832-1.08 1.69-1.43 3.939-1.495 6.106 0 .015.004.027.016.04.013.013.032.022.056.022h14.833c.024 0 .043-.01.055-.023.012-.011.017-.024.017-.039-.064-2.167-.416-4.416-1.495-6.106C14.953 6.704 13.177 5.5 10 5.5z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

ReceptionBell20.category = 'Objects';

export default ReceptionBell20;
