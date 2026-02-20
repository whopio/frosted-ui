import * as React from 'react';
import { IconProps } from './types';

export const ScaleOfJustice16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M7.99951 0.75V15.25M7.99951 15.25H4.99951M7.99951 15.25H10.9995M2.99961 3.75L5.1429 9.3315C5.30623 9.75684 5.29695 10.2459 5.01293 10.6021C3.91014 11.9855 2.08908 11.9855 0.986286 10.6021C0.702269 10.2459 0.692984 9.75684 0.856315 9.33149L2.99961 3.75ZM2.99961 3.75H12.9996M12.9996 3.75L10.8563 9.33141C10.6929 9.7568 10.7022 10.2459 10.9863 10.6022C12.0892 11.9854 13.9101 11.9855 15.0128 10.6021C15.2969 10.2459 15.3061 9.75684 15.1428 9.3315L12.9996 3.75Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ScaleOfJustice16.category = 'Objects';

export default ScaleOfJustice16;
