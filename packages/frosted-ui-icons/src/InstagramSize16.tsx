import * as React from 'react';
import { IconProps } from './types';

export const InstagramSize16 = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-fui-icon="true"
        {...props}
        ref={forwardedRef}
      >
        <path
          d="M7.99999 2.80781C9.69099 2.80781 9.89132 2.81414 10.5593 2.84466C10.9607 2.8495 11.3585 2.92332 11.7349 3.06287C12.0101 3.1644 12.2589 3.32632 12.4633 3.53672C12.6737 3.74103 12.8356 3.98991 12.9371 4.26505C13.0767 4.64156 13.1505 5.03924 13.1553 5.44075C13.1859 6.10862 13.1922 6.30899 13.1922 7.99999C13.1922 9.69099 13.1859 9.89132 13.1553 10.5593C13.1505 10.9607 13.0767 11.3585 12.9371 11.7349C12.8317 12.0081 12.6703 12.2563 12.4633 12.4633C12.2563 12.6703 12.0081 12.8317 11.7349 12.9371C11.3585 13.0767 10.9607 13.1505 10.5593 13.1553C9.89132 13.1859 9.69099 13.1922 7.99999 13.1922C6.30899 13.1922 6.10862 13.1859 5.44075 13.1553C5.03905 13.1505 4.64116 13.0767 4.26448 12.9371C3.98954 12.8355 3.74087 12.6736 3.53672 12.4633C3.32632 12.2589 3.1644 12.0101 3.06287 11.7349C2.92332 11.3585 2.8495 10.9607 2.84466 10.5593C2.81414 9.89132 2.80781 9.69099 2.80781 7.99999C2.80781 6.30899 2.81414 6.10862 2.84466 5.44075C2.8495 5.03924 2.92332 4.64156 3.06287 4.26505C3.1644 3.98991 3.32632 3.74103 3.53672 3.53672C3.74103 3.32632 3.98991 3.1644 4.26505 3.06287C4.64156 2.92332 5.03924 2.8495 5.44075 2.84466C6.10862 2.81414 6.30899 2.80781 7.99999 2.80781ZM7.99999 1.66666C6.2802 1.66666 6.06429 1.67414 5.38893 1.70466C4.86356 1.71514 4.34377 1.81462 3.85166 1.99887C3.42886 2.15806 3.0459 2.4076 2.7295 2.73008C2.4073 3.04636 2.15796 3.42912 1.99887 3.85166C1.81482 4.3438 1.71553 4.86359 1.70523 5.38893C1.67356 6.06429 1.66666 6.2802 1.66666 7.99999C1.66666 9.71979 1.67414 9.93566 1.70466 10.6111C1.71514 11.1364 1.81462 11.6562 1.99887 12.1483C2.15806 12.5711 2.4076 12.9541 2.73008 13.2705C3.04636 13.5927 3.42912 13.842 3.85166 14.0011C4.3438 14.1852 4.86359 14.2845 5.38893 14.2947C6.06429 14.3264 6.2802 14.3333 7.99999 14.3333C9.71979 14.3333 9.93566 14.3259 10.6111 14.2953C11.1364 14.2849 11.6562 14.1854 12.1483 14.0011C12.5692 13.8384 12.9514 13.5895 13.2705 13.2705C13.5895 12.9514 13.8384 12.5692 14.0011 12.1483C14.1852 11.6562 14.2845 11.1364 14.2947 10.6111C14.3264 9.93566 14.3333 9.71979 14.3333 7.99999C14.3333 6.2802 14.3259 6.06429 14.2953 5.38893C14.2849 4.86356 14.1854 4.34377 14.0011 3.85166C13.8419 3.42886 13.5924 3.0459 13.2699 2.7295C12.9536 2.4073 12.5709 2.15796 12.1483 1.99887C11.6562 1.81482 11.1364 1.71553 10.6111 1.70523C9.93566 1.67356 9.71979 1.66666 7.99999 1.66666ZM7.99999 4.74754C7.35672 4.74754 6.72786 4.93829 6.19302 5.29567C5.65816 5.65306 5.24128 6.16102 4.99512 6.75532C4.74894 7.34966 4.68454 8.00359 4.81003 8.63452C4.93553 9.26546 5.2453 9.84499 5.70016 10.2998C6.15502 10.7547 6.73452 11.0645 7.36546 11.1899C7.99639 11.3155 8.65032 11.2511 9.24466 11.0049C9.83899 10.7587 10.3469 10.3418 10.7043 9.80699C11.0617 9.27212 11.2525 8.64326 11.2525 7.99999C11.2525 7.13739 10.9098 6.31011 10.2998 5.70016C9.68986 5.0902 8.86259 4.74754 7.99999 4.74754ZM7.99999 10.1113C7.58239 10.1113 7.17419 9.98746 6.82699 9.75546C6.47981 9.52346 6.2092 9.19372 6.0494 8.80792C5.8896 8.42219 5.84779 7.99766 5.92926 7.58812C6.01072 7.17852 6.2118 6.80232 6.50708 6.50708C6.80232 6.2118 7.17852 6.01072 7.58812 5.92926C7.99766 5.84779 8.42219 5.8896 8.80792 6.0494C9.19372 6.2092 9.52346 6.47981 9.75546 6.82699C9.98746 7.17419 10.1113 7.58239 10.1113 7.99999C10.1113 8.55992 9.88886 9.09699 9.49292 9.49292C9.09699 9.88886 8.55992 10.1113 7.99999 10.1113ZM11.3809 3.85914C11.2305 3.85914 11.0836 3.90372 10.9586 3.98722C10.8337 4.07074 10.7362 4.18943 10.6787 4.3283C10.6212 4.46718 10.6061 4.61998 10.6355 4.76741C10.6648 4.91484 10.7371 5.05026 10.8435 5.15654C10.9497 5.26283 11.0851 5.33522 11.2326 5.36454C11.38 5.39386 11.5328 5.37881 11.6717 5.32129C11.8105 5.26377 11.9293 5.16636 12.0127 5.04138C12.0963 4.9164 12.1409 4.76946 12.1409 4.61914C12.1409 4.41758 12.0608 4.22427 11.9183 4.08174C11.7757 3.93921 11.5824 3.85914 11.3809 3.85914Z"
          fill={color}
        />
      </svg>
    );
  },
);

export default InstagramSize16;