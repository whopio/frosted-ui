import * as React from 'react';
import { IconProps } from './types';

export const MailNotificationBold16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 17 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="MailNotificationBold16"
      {...props}
    >
      <path
        d="M10.2 2.615c0 .657.151 1.278.42 1.831H4.97c-.863 0-1.584.596-1.778 1.399L8.21 7.868c.1.04.213.04.313 0l3.88-1.567c.59.318 1.265.499 1.982.499.455 0 .892-.074 1.302-.208v4.393c0 2.166-1.756 3.923-3.923 3.923H4.97c-2.166 0-3.923-1.757-3.923-3.923V6.277c0-2.167 1.757-3.923 3.923-3.923h5.24c-.006.086-.009.174-.009.261zm-.895 7.193c-.602.242-1.275.242-1.877 0l-4.29-1.729v2.906c0 1.01.82 1.83 1.831 1.83h6.795c1.011 0 1.83-.82 1.83-1.83V8.079L9.306 9.808zM14.385 0C15.829 0 17 1.171 17 2.615c0 1.445-1.17 2.616-2.615 2.616-1.445 0-2.616-1.171-2.616-2.616C11.77 1.171 12.94 0 14.385 0z"
        fill={color}
      />
    </svg>
  );
};

MailNotificationBold16.category = 'Communication';

export default MailNotificationBold16;
