import * as React from 'react';
import { IconProps } from './types';

export const DiscountTagBold12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="13"
      viewBox="0 0 12 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="DiscountTagBold12"
      {...props}
    >
      <path
        d="M9.497 0c1.38 0 2.5 1.12 2.5 2.5v2.762c0 .861-.343 1.688-.953 2.298L7.48 11.124c-1.171 1.172-3.07 1.171-4.242 0l-2.36-2.36c-1.17-1.17-1.17-3.07 0-4.242l3.57-3.57C5.058.342 5.885 0 6.747 0h2.75zm-2.75 2c-.332 0-.65.132-.885.366l-3.57 3.57c-.39.391-.39 1.024 0 1.415l2.36 2.359c.39.39 1.024.39 1.414 0L9.63 6.146c.235-.235.367-.553.367-.884V2.5c0-.276-.224-.5-.5-.5h-2.75zm-.722 1.505c.552 0 1 .448 1 1v3c0 .552-.448 1-1 1s-1-.448-1-1v-3c0-.552.448-1 1-1zm-2 1.625c.483 0 .875.392.875.875s-.392.875-.875.875-.875-.392-.875-.875.392-.875.875-.875zm4 0c.483 0 .875.392.875.875s-.392.875-.875.875-.875-.392-.875-.875.392-.875.875-.875z"
        fill={color}
      />
    </svg>
  );
};

DiscountTagBold12.category = 'Money & Shopping';

export default DiscountTagBold12;
