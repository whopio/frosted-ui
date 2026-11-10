import * as React from 'react';
import { IconProps } from './types';

export const ExclamationTriangleBold20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ExclamationTriangleBold20"
      {...props}
    >
      <path
        d="M7.2 2.251c1.217-2.203 4.383-2.203 5.6 0l6.771 12.251c1.179 2.133-.364 4.748-2.8 4.748H3.228c-2.436 0-3.979-2.615-2.8-4.748l6.77-12.25zm3.85.967c-.457-.826-1.643-.826-2.1 0L2.18 15.47c-.442.8.137 1.78 1.05 1.78H16.77c.914 0 1.493-.98 1.051-1.78L11.05 3.218zM10 13.5c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1zm0-7.25c.552 0 1 .448 1 1v4c0 .552-.448 1-1 1s-1-.448-1-1v-4c0-.552.448-1 1-1z"
        fill={color}
      />
    </svg>
  );
};

ExclamationTriangleBold20.category = 'Interface General';

export default ExclamationTriangleBold20;
