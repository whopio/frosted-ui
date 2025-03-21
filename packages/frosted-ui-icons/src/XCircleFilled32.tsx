import * as React from 'react';
import { IconProps } from './types';

export const XCircleFilled32 = ({
  color = 'currentColor',
  ...props
}: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M1 16C1 7.71573 7.71573 1 16 1C24.2843 1 31 7.71573 31 16C31 24.2843 24.2843 31 16 31C7.71573 31 1 24.2843 1 16ZM10.2929 10.2929C9.90237 10.6834 9.90237 11.3166 10.2929 11.7071L14.5858 16L10.2929 20.2929C9.90237 20.6834 9.90237 21.3166 10.2929 21.7071C10.6834 22.0976 11.3166 22.0976 11.7071 21.7071L16 17.4142L20.2929 21.7071C20.6834 22.0976 21.3166 22.0976 21.7071 21.7071C22.0976 21.3166 22.0976 20.6834 21.7071 20.2929L17.4142 16L21.7071 11.7071C22.0976 11.3166 22.0976 10.6834 21.7071 10.2929C21.3166 9.90237 20.6834 9.90237 20.2929 10.2929L16 14.5858L11.7071 10.2929C11.3166 9.90237 10.6834 9.90237 10.2929 10.2929Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default XCircleFilled32;
