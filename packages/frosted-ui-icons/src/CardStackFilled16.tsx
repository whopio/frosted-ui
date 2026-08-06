import * as React from 'react';
import { IconProps } from './types';

export const CardStackFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="CardStackFilled16"
      {...props}
    >
      <path
        d="M12.3014 6C13.9671 6.00018 15.2338 7.49674 14.9586 9.13965L14.3531 12.752C14.1356 14.05 13.012 15.0008 11.6959 15.001H4.30135C2.98514 15.001 1.86073 14.05 1.64315 12.752L1.03768 9.13965C0.76246 7.49666 2.02997 6 3.69588 6H12.3014ZM11.7144 3.5C12.8261 3.50002 13.7267 4.31668 13.8931 5.3584C13.4134 5.12889 12.874 5.00001 12.3004 5H3.69491C3.12522 5.00002 2.58918 5.12694 2.1119 5.35352C2.28048 4.31429 3.17989 3.50023 4.28963 3.5H11.7144ZM10.1158 0.999023C11.1127 0.999247 11.9393 1.65559 12.2203 2.54004C12.0559 2.5141 11.8867 2.5 11.7144 2.5H4.28963C4.11295 2.50005 3.93952 2.51469 3.77108 2.54199C4.05154 1.65641 4.87974 0.999213 5.87752 0.999023H10.1158Z"
        fill={color}
      />
    </svg>
  );
};

CardStackFilled16.category = 'Interface General';

export default CardStackFilled16;
