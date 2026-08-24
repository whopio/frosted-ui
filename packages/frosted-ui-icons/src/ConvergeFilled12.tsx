import * as React from 'react';
import { IconProps } from './types';

export const ConvergeFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ConvergeFilled12"
      {...props}
    >
      <path
        d="M2.25 0c.781 0 1.469.399 1.872 1.003 1.06.038 2.004.697 2.4 1.688l.823 2.059h.656c-.39-.518-.32-1.257.175-1.69.52-.455 1.31-.402 1.764.117l1.75 2c.412.47.412 1.175 0 1.646l-1.75 2c-.455.52-1.244.572-1.764.117-.495-.434-.565-1.172-.175-1.69h-.656l-.823 2.058c-.396.991-1.339 1.65-2.4 1.688-.402.605-1.09 1.003-1.872 1.003C1.007 12 0 10.992 0 9.75 0 8.508 1.008 7.5 2.25 7.5c.77 0 1.45.39 1.855.98.043-.02.078-.053.096-.098L5.153 6l-.952-2.381c-.018-.045-.053-.079-.095-.099-.405.592-1.085.98-1.856.98C1.007 4.5 0 3.492 0 2.25S1.008 0 2.25 0z"
        fill={color}
      />
    </svg>
  );
};

ConvergeFilled12.category = 'Arrows';

export default ConvergeFilled12;
