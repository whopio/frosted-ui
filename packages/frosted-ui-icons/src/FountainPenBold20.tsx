import * as React from 'react';
import { IconProps } from './types';

export const FountainPenBold20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="FountainPenBold20"
      {...props}
    >
      <path
        d="M10.54 1.83c.655-.918 1.956-1.105 2.843-.41l.183.163 4.849 4.85c.94.939.711 2.518-.455 3.154l-2.043 1.114-2.005 5.014c-.393.982-1.277 1.683-2.322 1.841l-9.44 1.43c-.315.048-.632-.056-.857-.28-.225-.225-.329-.544-.281-.858l1.43-9.441c.158-1.046.858-1.93 1.84-2.323L9.296 4.08l1.114-2.042.13-.207zM5.025 7.942c-.323.13-.554.42-.606.765l-.976 6.432 3.085-3.085c-.017-.099-.028-.2-.028-.305 0-.966.784-1.75 1.75-1.75s1.75.784 1.75 1.75c0 .967-.784 1.75-1.75 1.75-.106 0-.209-.01-.31-.029l-3.082 3.083 6.433-.974c.344-.053.635-.283.765-.606l1.893-4.736-4.19-4.19-4.734 1.895zm6.212-3.246l4.064 4.063 1.69-.922-4.83-4.832-.924 1.69z"
        fill={color}
      />
    </svg>
  );
};

FountainPenBold20.category = 'Interface General';

export default FountainPenBold20;
