import * as React from 'react';
import { IconProps } from './types';

export const Atom24 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M12 23.5C13.1018 23.5 13.9662 22.8919 14.5701 22.2023C15.1766 21.5098 15.6544 20.5941 16.0255 19.592C16.072 19.4665 16.1173 19.3383 16.1613 19.2077C16.2965 19.2349 16.4301 19.2598 16.5621 19.2823C17.6155 19.4619 18.6474 19.5059 19.5504 19.327C20.4496 19.1488 21.4084 18.7043 21.9593 17.75C22.5102 16.7958 22.4158 15.7432 22.1206 14.8754C21.824 14.0039 21.2699 13.1323 20.5877 12.3098C20.5022 12.2068 20.4138 12.1035 20.3227 12C20.4138 11.8966 20.5022 11.7933 20.5876 11.6902C21.2699 10.8678 21.824 9.99616 22.1205 9.12468C22.4158 8.2569 22.5102 7.20427 21.9593 6.25003C21.4083 5.29578 20.4495 4.85121 19.5504 4.67305C18.6474 4.49413 17.6155 4.53817 16.5621 4.71779C16.4301 4.74029 16.2965 4.76516 16.1613 4.79235C16.1173 4.6617 16.072 4.53353 16.0255 4.40796C15.6544 3.40592 15.1766 2.49024 14.5701 1.79767C13.9662 1.10805 13.1018 0.5 12 0.5C10.8981 0.5 10.0337 1.10805 9.42981 1.79767C8.82336 2.49024 8.34555 3.40592 7.97442 4.40796C7.92791 4.53353 7.88263 4.66169 7.8386 4.79233C7.70346 4.76515 7.56985 4.74029 7.43788 4.71779C6.38452 4.53817 5.35261 4.49413 4.44961 4.67305C3.55044 4.85121 2.59165 5.29578 2.04072 6.25003C1.48978 7.20427 1.58417 8.2569 1.87946 9.12468C2.17602 9.99616 2.73011 10.8678 3.41234 11.6902C3.49782 11.7933 3.58616 11.8966 3.67728 12C3.58615 12.1035 3.49779 12.2068 3.4123 12.3098C2.73007 13.1323 2.17597 14.0039 1.87942 14.8754C1.58412 15.7432 1.48974 16.7958 2.04067 17.75C2.59161 18.7043 3.5504 19.1488 4.44957 19.327C5.35257 19.5059 6.38448 19.4619 7.43784 19.2823C7.56983 19.2598 7.70345 19.2349 7.83861 19.2077C7.88264 19.3383 7.92792 19.4665 7.97442 19.592C8.34555 20.5941 8.82336 21.5098 9.42981 22.2023C10.0337 22.8919 10.8981 23.5 12 23.5ZM20.6602 7.00003C21.1929 7.92266 20.6213 9.36157 19.2754 10.9188C18.6182 10.2967 17.8713 9.67898 17.0525 9.08288C16.9457 8.07575 16.7842 7.12006 16.574 6.23995C18.5956 5.85299 20.1275 6.07738 20.6602 7.00003ZM12 6.1658C12.9256 5.75475 13.834 5.41682 14.7013 5.15878C14.0257 3.21454 13.0653 2 12 2C10.9346 2 9.97427 3.21453 9.29858 5.15877C10.1659 5.4168 11.0743 5.75474 12 6.1658ZM8.88217 6.59986C9.3091 6.72719 9.74984 6.87643 10.2008 7.04694C9.93318 7.19025 9.66544 7.33915 9.39811 7.49348C9.13079 7.64782 8.86797 7.80524 8.61007 7.96533C8.68786 7.48956 8.77899 7.03325 8.88217 6.59986ZM7.42595 6.23994C7.21576 7.12006 7.0542 8.07578 6.94738 9.08293C6.12859 9.67901 5.38172 10.2968 4.72462 10.9188C3.37872 9.36157 2.80707 7.92266 3.33975 7.00003C3.87244 6.07739 5.40438 5.853 7.42595 6.23994ZM6.81086 11.0817C6.43775 11.3869 6.08815 11.694 5.76443 12C6.08815 12.306 6.43775 12.6131 6.81086 12.9184C6.80117 12.615 6.79625 12.3087 6.79625 12C6.79625 11.6913 6.80117 11.385 6.81086 11.0817ZM3.33971 17C2.80702 16.0774 3.37869 14.6385 4.72461 13.0812C5.38172 13.7032 6.12859 14.321 6.94738 14.9171C7.05421 15.9242 7.21577 16.88 7.42596 17.7601C5.40436 18.1471 3.8724 17.9227 3.33971 17ZM12 22C10.9346 22 9.97428 20.7855 9.2986 18.8413C10.1659 18.5832 11.0744 18.2453 12 17.8342C12.9256 18.2453 13.834 18.5832 14.7013 18.8413C14.0256 20.7855 13.0653 22 12 22ZM8.88218 17.4002C9.30911 17.2728 9.74985 17.1236 10.2008 16.9531C9.9332 16.8098 9.66547 16.6609 9.39816 16.5066C9.13082 16.3522 8.86799 16.1948 8.61008 16.0347C8.68787 16.5105 8.779 16.9668 8.88218 17.4002ZM15.1177 17.4002C14.6908 17.2728 14.2501 17.1236 13.7992 16.9531C14.0668 16.8098 14.3345 16.6609 14.6018 16.5066C14.8691 16.3522 15.1319 16.1948 15.3898 16.0347C15.312 16.5105 15.2209 16.9668 15.1177 17.4002ZM13.8518 15.2075C14.473 14.8489 15.065 14.4748 15.6225 14.0915C15.6757 13.417 15.7037 12.7173 15.7037 12C15.7037 11.2827 15.6757 10.583 15.6225 9.9085C15.065 9.52522 14.4731 9.15117 13.8519 8.79252C13.2306 8.43386 12.6107 8.10825 12 7.81703C11.3893 8.10825 10.7693 8.43386 10.1481 8.79252C9.5269 9.15118 8.93495 9.52524 8.37738 9.90854C8.32422 10.583 8.29625 11.2827 8.29625 12C8.29625 12.7173 8.32422 13.417 8.37738 14.0915C8.93496 14.4748 9.52693 14.8489 10.1482 15.2075C10.7694 15.5662 11.3893 15.8918 12 16.183C12.6107 15.8918 13.2306 15.5662 13.8518 15.2075ZM17.2037 12C17.2037 12.3087 17.1987 12.615 17.1891 12.9184C17.5622 12.6131 17.9118 12.3061 18.2355 12C17.9118 11.6939 17.5622 11.3869 17.1891 11.0816C17.1987 11.385 17.2037 11.6913 17.2037 12ZM19.2754 13.0812C18.6182 13.7033 17.8713 14.321 17.0525 14.9171C16.9457 15.9243 16.7841 16.88 16.574 17.7601C18.5956 18.1471 20.1276 17.9227 20.6603 17C21.193 16.0774 20.6213 14.6385 19.2754 13.0812ZM15.3898 7.96529C15.312 7.48954 15.2209 7.03325 15.1177 6.59987C14.6908 6.7272 14.2501 6.87643 13.7992 7.04694C14.0668 7.19025 14.3345 7.33915 14.6019 7.49348C14.8692 7.64781 15.132 7.80522 15.3898 7.96529ZM11.9999 13.4814C12.8181 13.4814 13.4814 12.8182 13.4814 12C13.4814 11.1818 12.8181 10.5185 11.9999 10.5185C11.1817 10.5185 10.5184 11.1818 10.5184 12C10.5184 12.8182 11.1817 13.4814 11.9999 13.4814Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default Atom24;
