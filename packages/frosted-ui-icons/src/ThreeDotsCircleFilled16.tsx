import * as React from 'react';
import { IconProps } from './types';

export const ThreeDotsCircleFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ThreeDotsCircleFilled16"
      {...props}
    >
      <path
        d="M8 .5c4.142 0 7.5 3.358 7.5 7.5 0 4.142-3.358 7.5-7.5 7.5C3.858 15.5.5 12.142.5 8 .5 3.858 3.858.5 8 .5zM4.917 7.083c-.475 0-.865.361-.912.823L4 8l.005.094c.047.462.438.822.912.822.506 0 .916-.41.916-.916 0-.474-.36-.865-.822-.912l-.094-.005zm3.083 0c-.475 0-.865.361-.912.823L7.083 8l.005.094c.047.462.437.822.912.822.506 0 .916-.41.916-.916 0-.474-.36-.865-.822-.912L8 7.083zm3.087 0c-.475 0-.865.361-.912.823L10.17 8l.005.094c.047.462.437.822.912.822.506 0 .916-.41.916-.916 0-.474-.36-.865-.822-.912l-.094-.005z"
        fill={color}
      />
    </svg>
  );
};

ThreeDotsCircleFilled16.category = 'Interface General';

export default ThreeDotsCircleFilled16;
