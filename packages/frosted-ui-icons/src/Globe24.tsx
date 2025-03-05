import * as React from 'react';
import { IconProps } from './types';

export const Globe24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M12 2.5C11.6758 2.5 11.2981 2.65529 10.8813 3.08053C10.4619 3.5083 10.0498 4.16599 9.6876 5.03942C9.34051 5.87651 9.05295 6.87891 8.84776 8H15.1522C14.9471 6.87891 14.6595 5.87651 14.3124 5.03942C13.9502 4.16599 13.5381 3.5083 13.1187 3.08053C12.7019 2.65529 12.3242 2.5 12 2.5ZM8.30199 4.46489C7.88166 5.47862 7.54868 6.67793 7.32469 8L3.38065 8C4.48757 5.6188 6.55219 3.77295 9.07965 2.95731C8.79019 3.40484 8.53081 3.91304 8.30199 4.46489ZM7.12341 9.5H2.83238C2.61567 10.2966 2.5 11.1348 2.5 12C2.5 12.8652 2.61567 13.7034 2.83238 14.5H7.12341C7.0425 13.6955 7 12.8582 7 12C7 11.1418 7.0425 10.3045 7.12341 9.5ZM7.32469 16H3.38065C4.48757 18.3812 6.55219 20.2271 9.07965 21.0427C8.79019 20.5952 8.53081 20.087 8.30199 19.5351C7.88166 18.5214 7.54868 17.3221 7.32469 16ZM8.84776 16L15.1522 16C14.9471 17.1211 14.6595 18.1235 14.3124 18.9606C13.9502 19.834 13.5381 20.4917 13.1187 20.9195C12.7019 21.3447 12.3242 21.5 12 21.5C11.6758 21.5 11.2981 21.3447 10.8813 20.9195C10.4619 20.4917 10.0498 19.834 9.6876 18.9606C9.34051 18.1235 9.05295 17.1211 8.84776 16ZM15.3685 14.5L8.63148 14.5C8.54597 13.7047 8.5 12.867 8.5 12C8.5 11.133 8.54597 10.2953 8.63148 9.5L15.3685 9.5C15.454 10.2953 15.5 11.133 15.5 12C15.5 12.867 15.454 13.7047 15.3685 14.5ZM16.6753 16C16.4513 17.3221 16.1183 18.5214 15.698 19.5351C15.4692 20.087 15.2098 20.5952 14.9204 21.0427C17.4478 20.2271 19.5124 18.3812 20.6194 16H16.6753ZM21.1676 14.5H16.8766C16.9575 13.6955 17 12.8582 17 12C17 11.1418 16.9575 10.3045 16.8766 9.5H21.1676C21.3843 10.2966 21.5 11.1348 21.5 12C21.5 12.8652 21.3843 13.7034 21.1676 14.5ZM14.9204 2.95731C17.4478 3.77295 19.5124 5.6188 20.6194 8L16.6753 8C16.4513 6.67793 16.1183 5.47862 15.698 4.46489C15.4692 3.91304 15.2098 3.40484 14.9204 2.95731ZM12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default Globe24;
