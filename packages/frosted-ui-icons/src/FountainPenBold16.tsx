import * as React from 'react';
import { IconProps } from './types';

export const FountainPenBold16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="FountainPenBold16"
      {...props}
    >
      <path
        d="M8.202 1.731c.576-.806 1.719-.972 2.498-.36l.161.143 3.626 3.626c.826.826.626 2.214-.4 2.774l-1.446.789-1.468 3.671c-.33.824-1.07 1.412-1.946 1.544l-7.078 1.073c-.313.047-.631-.058-.856-.282-.225-.225-.329-.543-.281-.857l1.072-7.077c.133-.877.72-1.617 1.543-1.946l3.67-1.47.79-1.445.115-.183zM4.37 6.685c-.164.066-.282.215-.308.39l-.618 4.068 1.922-1.922c-.001-.027-.004-.055-.004-.083 0-.828.672-1.5 1.5-1.5.829 0 1.5.672 1.5 1.5s-.671 1.5-1.5 1.5c-.027 0-.054-.003-.08-.005l-1.924 1.924 4.07-.616c.175-.027.323-.144.39-.309l1.357-3.393-2.911-2.911-3.394 1.357zM9.24 3.976l2.784 2.785.813-.443-3.154-3.154-.443.812z"
        fill={color}
      />
    </svg>
  );
};

FountainPenBold16.category = 'Interface General';

export default FountainPenBold16;
