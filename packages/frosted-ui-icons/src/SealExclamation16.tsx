import * as React from 'react';
import { IconProps } from './types';

export const SealExclamation16 = ({
  color = 'currentColor',
  ...props
}: IconProps) => {
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
      <g clipPath="url(#clip0_1057_1093)">
        <path
          d="M10.2887 13.5252L10.4352 12.7897C10.1375 12.7304 9.83348 12.8563 9.66493 13.1087L10.2887 13.5252ZM5.71141 13.5252L6.33513 13.1087C6.16658 12.8563 5.86253 12.7304 5.56488 12.7897L5.71141 13.5252ZM3.22705 12.773L2.69672 13.3033H2.69672L3.22705 12.773ZM2.47479 10.2886L3.21034 10.4352C3.26964 10.1375 3.14369 9.83345 2.89129 9.66491L2.47479 10.2886ZM2.4748 5.71136L2.8913 6.33508C3.1437 6.16654 3.26965 5.86249 3.21035 5.56484L2.4748 5.71136ZM3.22706 3.22703L3.75739 3.75736V3.75736L3.22706 3.22703ZM5.71141 2.47478L5.56488 3.21032C5.86253 3.26962 6.16658 3.14368 6.33513 2.89128L5.71141 2.47478ZM10.2887 2.47477L9.66493 2.89127C9.83348 3.14367 10.1375 3.26962 10.4352 3.21032L10.2887 2.47477ZM12.773 3.22703L12.2427 3.75736L12.773 3.22703ZM13.5252 5.71139L12.7897 5.56486C12.7304 5.86251 12.8563 6.16656 13.1087 6.33511L13.5252 5.71139ZM13.5253 10.2886L13.1087 9.66489C12.8563 9.83344 12.7304 10.1375 12.7897 10.4351L13.5253 10.2886ZM8.00003 15.5C9.21565 15.5 10.2861 14.8796 10.9124 13.9417L9.66493 13.1087C9.30506 13.6477 8.69354 14 8.00003 14V15.5ZM5.08769 13.9417C5.714 14.8796 6.78442 15.5 8.00003 15.5V14C7.30653 14 6.69501 13.6477 6.33513 13.1087L5.08769 13.9417ZM2.69672 13.3033C3.55629 14.1629 4.75186 14.4811 5.85794 14.2608L5.56488 12.7897C4.92932 12.9163 4.24777 12.733 3.75738 12.2426L2.69672 13.3033ZM1.73925 10.1421C1.51891 11.2482 1.83715 12.4437 2.69672 13.3033L3.75738 12.2426C3.267 11.7523 3.08374 11.0707 3.21034 10.4352L1.73925 10.1421ZM0.5 8C0.5 9.21563 1.12037 10.286 2.0583 10.9124L2.89129 9.66491C2.35235 9.30503 2 8.69351 2 8H0.5ZM2.05831 5.08763C1.12037 5.71394 0.5 6.78437 0.5 8H2C2 7.30648 2.35236 6.69496 2.8913 6.33508L2.05831 5.08763ZM2.69673 2.6967C1.83717 3.55626 1.51892 4.75181 1.73926 5.85788L3.21035 5.56484C3.08375 4.92929 3.26701 4.24774 3.75739 3.75736L2.69673 2.6967ZM5.85794 1.73923C4.75186 1.51889 3.5563 1.83713 2.69673 2.6967L3.75739 3.75736C4.24777 3.26698 4.92933 3.08372 5.56488 3.21032L5.85794 1.73923ZM8.00003 0.5C6.78441 0.5 5.714 1.12036 5.08769 2.05828L6.33513 2.89128C6.69501 2.35235 7.30652 2 8.00003 2V0.5ZM10.9124 2.05827C10.2861 1.12036 9.21565 0.5 8.00003 0.5V2C8.69354 2 9.30505 2.35235 9.66493 2.89127L10.9124 2.05827ZM13.3033 2.6967C12.4438 1.83713 11.2482 1.51889 10.1421 1.73923L10.4352 3.21032C11.0707 3.08371 11.7523 3.26697 12.2427 3.75736L13.3033 2.6967ZM14.2608 5.85792C14.4811 4.75184 14.1629 3.55627 13.3033 2.6967L12.2427 3.75736C12.7331 4.24774 12.9163 4.9293 12.7897 5.56486L14.2608 5.85792ZM15.5 8C15.5 6.78439 14.8797 5.71398 13.9418 5.08767L13.1087 6.33511C13.6477 6.69499 14 7.3065 14 8H15.5ZM13.9418 10.9123C14.8797 10.286 15.5 9.2156 15.5 8H14C14 8.6935 13.6477 9.30501 13.1087 9.66489L13.9418 10.9123ZM13.3033 13.3033C14.1629 12.4437 14.4811 11.2482 14.2608 10.1421L12.7897 10.4351C12.9163 11.0707 12.7331 11.7523 12.2427 12.2426L13.3033 13.3033ZM10.1421 14.2608C11.2482 14.4811 12.4438 14.1629 13.3033 13.3033L12.2427 12.2426C11.7523 12.733 11.0707 12.9163 10.4352 12.7897L10.1421 14.2608Z"
          fill={color}
        />
        <path
          d="M8 4.5L8 7.5"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="8" cy="10.5" r="1" fill={color} />
      </g>
      <defs>
        <clipPath id="clip0_1057_1093">
          <path fill={color} d="M0 0H16V16H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default SealExclamation16;
