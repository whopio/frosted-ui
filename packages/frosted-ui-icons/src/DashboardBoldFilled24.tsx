import * as React from 'react';
import { IconProps } from './types';

export const DashboardBoldFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="DashboardBoldFilled24"
      {...props}
    >
      <path
        d="M16.25 1C19.978 1 23 4.022 23 7.75v8.5c0 3.728-3.022 6.75-6.75 6.75h-8.5C4.022 23 1 19.978 1 16.25v-8.5C1 4.022 4.022 1 7.75 1h8.5zm1.722 8.016c-.383-.398-1.016-.412-1.414-.03l-3.604 3.46-1.853-1.779-.11-.096c-.527-.414-1.273-.414-1.8 0l-.11.096-3.023 2.903c-.399.383-.412 1.016-.03 1.414.383.399 1.016.411 1.414.029l2.649-2.544 1.853 1.78c.565.542 1.456.542 2.02 0l3.978-3.82c.398-.382.412-1.015.03-1.413z"
        fill={color}
      />
    </svg>
  );
};

DashboardBoldFilled24.category = 'Stats & Charts';

export default DashboardBoldFilled24;
