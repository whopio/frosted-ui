import * as React from 'react';
import { IconProps } from './types';

export const SparkleFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="SparkleFilled16"
      {...props}
    >
      <path
        d="M3.388 9.291c.255-.637 1.156-.636 1.41 0l.348.866c.126.318.378.57.696.697l.867.346c.637.255.637 1.156 0 1.411l-.867.347c-.318.127-.57.379-.696.696l-.347.867c-.255.637-1.157.637-1.411 0l-.347-.867c-.127-.317-.379-.57-.696-.696l-.866-.347c-.637-.255-.637-1.156 0-1.41l.866-.348c.317-.127.569-.378.696-.696l.347-.866zM8.74 1.586c.366-.705 1.402-.704 1.767 0l.067.163.704 2.169c.124.38.422.679.803.803l2.169.704c.92.299.922 1.6.002 1.901l-2.173.71c-.38.123-.677.421-.8.8l-.705 2.167c-.299.92-1.6.921-1.901.002l-.71-2.17c-.124-.378-.42-.675-.799-.799l-2.17-.71c-.92-.3-.918-1.602.002-1.901l2.166-.704c.38-.124.678-.422.802-.801l.709-2.173.067-.161z"
        fill={color}
      />
    </svg>
  );
};

SparkleFilled16.category = 'Interface General';

export default SparkleFilled16;
