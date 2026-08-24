import * as React from 'react';
import { IconProps } from './types';

export const GearBoldFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="GearBoldFilled12"
      {...props}
    >
      <path
        d="M6.637 0c.883 0 1.6.716 1.6 1.6v.133c.04.022.078.045.117.068l.131-.075.146-.075c.688-.307 1.502-.088 1.944.522l.09.137.795 1.368c.446.767.183 1.752-.588 2.193l-.118.067.002.062-.002.06.12.069c.769.441 1.033 1.425.587 2.192l-.796 1.37c-.442.76-1.415 1.02-2.179.583l-.132-.076-.117.067v.135c0 .884-.717 1.6-1.6 1.6H5.04c-.883 0-1.6-.716-1.6-1.6v-.134c-.04-.023-.08-.044-.119-.068l-.13.075c-.763.438-1.736.178-2.178-.583L.217 8.322C-.23 7.555.035 6.572.804 6.13l.12-.07L.922 6l.002-.062-.12-.067C.036 5.43-.228 4.446.218 3.68l.797-1.37.089-.136c.442-.61 1.256-.828 1.944-.52l.145.073.13.074.119-.068V1.6c0-.884.716-1.6 1.6-1.6h1.596zM5.84 4.25c-.966 0-1.75.784-1.75 1.75s.784 1.75 1.75 1.75S7.59 6.966 7.59 6s-.784-1.75-1.75-1.75z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

GearBoldFilled12.category = 'Interface General';

export default GearBoldFilled12;
