import * as React from 'react';
import { IconProps } from './types';

export const DoubleArrowDownUp20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="21"
      height="21"
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="DoubleArrowDownUp20"
      {...props}
    >
      <path
        d="M10.729 4.694c-.308.308-.308.807 0 1.115.307.307.806.307 1.113 0l3.12-3.12v17.523c0 .435.353.788.787.788.435 0 .788-.353.788-.788V2.688l3.12 3.12c.307.308.805.308 1.113 0 .307-.307.307-.806 0-1.114L16.306.231C16.158.083 15.958 0 15.749 0c-.208 0-.409.083-.556.23l-4.464 4.464zM.23 15.191c-.308.307-.308.806 0 1.114l4.463 4.464c.148.147.348.23.557.23.209 0 .41-.083.557-.23l4.464-4.464c.307-.307.307-.807 0-1.114-.308-.307-.806-.307-1.114 0l-3.12 3.12V.787C6.038.353 5.686 0 5.251 0c-.435 0-.787.353-.787.787v17.524l-3.12-3.12c-.307-.307-.806-.307-1.113 0z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleArrowDownUp20.category = 'Arrows';

export default DoubleArrowDownUp20;
