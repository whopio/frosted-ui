import * as React from 'react';
import { IconProps } from './types';

export const Parachute16 = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clipPath="url(#clip0_16_225)">
          <path
            d="M4.25 12.25V11.5H3.5V12.25H4.25ZM11.75 12.25H12.5V11.5H11.75V12.25ZM0.75 8.25L0.000416338 8.22501C-0.00621969 8.42409 0.0666118 8.61764 0.202847 8.76296L0.75 8.25ZM3.95285 12.763C4.23614 13.0651 4.71077 13.0805 5.01296 12.7972C5.31514 12.5139 5.33045 12.0392 5.04715 11.737L3.95285 12.763ZM10.9528 11.737C10.6695 12.0392 10.6849 12.5139 10.987 12.7972C11.2892 13.0805 11.7639 13.0651 12.0472 12.763L10.9528 11.737ZM15.25 8.25L15.7972 8.76296C15.9334 8.61764 16.0062 8.42409 15.9996 8.22501L15.25 8.25ZM8.75 8C8.75 7.58579 8.41421 7.25 8 7.25C7.58579 7.25 7.25 7.58579 7.25 8H8.75ZM7.25 12.25C7.25 12.6642 7.58579 13 8 13C8.41421 13 8.75 12.6642 8.75 12.25H7.25ZM8 8.25L7.32918 8.58541C7.45622 8.8395 7.71592 9 8 9C8.28408 9 8.54378 8.8395 8.67082 8.58541L8 8.25ZM3.5 12.25V14.54H5V12.25H3.5ZM4.96 16H11.04V14.5H4.96V16ZM12.5 14.54V12.25H11V14.54H12.5ZM4.25 13H11.75V11.5H4.25V13ZM11.04 16C11.8463 16 12.5 15.3463 12.5 14.54H11C11 14.5179 11.0179 14.5 11.04 14.5V16ZM3.5 14.54C3.5 15.3463 4.15366 16 4.96 16V14.5C4.98209 14.5 5 14.5179 5 14.54H3.5ZM0.202847 8.76296L3.95285 12.763L5.04715 11.737L1.29715 7.73704L0.202847 8.76296ZM12.0472 12.763L15.7972 8.76296L14.7028 7.73704L10.9528 11.737L12.0472 12.763ZM7.25 8V12.25H8.75V8H7.25ZM8 0C6.10755 0 4.62736 0.509733 3.48493 1.30678C2.34973 2.09878 1.58864 3.14567 1.07918 4.16459C0.570447 5.18205 0.302809 6.19065 0.161469 6.93892C0.0904731 7.31478 0.0504918 7.62955 0.0281362 7.85311C0.0169467 7.965 0.0101389 8.05439 0.00606918 8.11754C0.00403368 8.14912 0.00268108 8.17418 0.00180721 8.19224C0.00137025 8.20127 0.00105286 8.20855 0.000829577 8.21403C0.000717878 8.21677 0.000629723 8.21906 0.000561953 8.2209C0.000528038 8.22181 0.000499189 8.22261 0.000475049 8.2233C0.000463068 8.22364 0.000448227 8.22407 0.000442326 8.22424C0.000428736 8.22464 0.000416338 8.22501 0.75 8.25C1.49958 8.27499 1.49957 8.2753 1.49956 8.27558C1.49956 8.27564 1.49955 8.2759 1.49955 8.27601C1.49954 8.27624 1.49954 8.27636 1.49954 8.27637C1.49954 8.27639 1.49955 8.27596 1.49959 8.27509C1.49966 8.27337 1.4998 8.26989 1.50005 8.26473C1.50055 8.25441 1.50146 8.23735 1.50296 8.214C1.50597 8.16729 1.51137 8.09555 1.52069 8.00236C1.53935 7.81576 1.57359 7.54459 1.63541 7.21733C1.75969 6.55935 1.99205 5.69295 2.42082 4.83541C2.84886 3.97933 3.46277 3.15122 4.3432 2.53697C5.21639 1.92777 6.39245 1.5 8 1.5V0ZM15.25 8.25C15.9996 8.22501 15.9996 8.22464 15.9996 8.22424C15.9996 8.22407 15.9995 8.22364 15.9995 8.2233C15.9995 8.22261 15.9995 8.22181 15.9994 8.2209C15.9994 8.21906 15.9993 8.21677 15.9992 8.21403C15.9989 8.20855 15.9986 8.20127 15.9982 8.19224C15.9973 8.17418 15.996 8.14912 15.9939 8.11754C15.9899 8.05439 15.9831 7.965 15.9719 7.85311C15.9495 7.62955 15.9095 7.31478 15.8385 6.93892C15.6972 6.19065 15.4296 5.18205 14.9208 4.16459C14.4114 3.14567 13.6503 2.09878 12.5151 1.30678C11.3726 0.509733 9.89245 0 8 0V1.5C9.60755 1.5 10.7836 1.92777 11.6568 2.53697C12.5372 3.15122 13.1511 3.97933 13.5792 4.83541C14.0079 5.69295 14.2403 6.55935 14.3646 7.21733C14.4264 7.54459 14.4606 7.81576 14.4793 8.00236C14.4886 8.09555 14.494 8.16729 14.497 8.214C14.4985 8.23735 14.4994 8.25441 14.4999 8.26473C14.5002 8.26989 14.5003 8.27337 14.5004 8.27509C14.5004 8.27596 14.5005 8.27639 14.5005 8.27637C14.5005 8.27636 14.5005 8.27624 14.5005 8.27601C14.5004 8.2759 14.5004 8.27564 14.5004 8.27558C14.5004 8.2753 14.5004 8.27499 15.25 8.25ZM8 8.25C8.67082 8.58541 8.67065 8.58575 8.67049 8.58608C8.67044 8.58618 8.67028 8.5865 8.67018 8.5867C8.66997 8.5871 8.66979 8.58747 8.66961 8.58781C8.66927 8.58849 8.66898 8.58906 8.66875 8.58952C8.66829 8.59042 8.66805 8.59088 8.66804 8.59089C8.66803 8.59091 8.66893 8.58918 8.67076 8.58581C8.67443 8.57906 8.6818 8.56581 8.69299 8.54697C8.71541 8.5092 8.75285 8.44956 8.80628 8.37523C8.91362 8.22588 9.08214 8.0219 9.31874 7.81727C9.78432 7.41461 10.5218 7 11.625 7V5.5C10.1032 5.5 9.02818 6.08539 8.33751 6.68273C7.99598 6.9781 7.75044 7.27412 7.58825 7.49977C7.50691 7.61294 7.44572 7.70955 7.4032 7.78116C7.38192 7.817 7.36524 7.84672 7.35298 7.86927C7.34685 7.88054 7.34181 7.89004 7.33785 7.89764C7.33588 7.90143 7.33417 7.90475 7.33272 7.90759C7.332 7.909 7.33134 7.91029 7.33075 7.91146C7.33046 7.91205 7.33018 7.9126 7.32992 7.91312C7.32979 7.91338 7.3296 7.91375 7.32954 7.91388C7.32936 7.91424 7.32918 7.91459 8 8.25ZM11.625 7C12.7282 7 13.4657 7.41461 13.9313 7.81727C14.1679 8.0219 14.3364 8.22588 14.4437 8.37523C14.4971 8.44956 14.5346 8.5092 14.557 8.54697C14.5682 8.56581 14.5756 8.57906 14.5792 8.58581C14.5811 8.58918 14.582 8.59091 14.582 8.59089C14.582 8.59088 14.5817 8.59042 14.5813 8.58952C14.581 8.58906 14.5807 8.58849 14.5804 8.58781C14.5802 8.58747 14.58 8.5871 14.5798 8.5867C14.5797 8.5865 14.5796 8.58618 14.5795 8.58608C14.5793 8.58575 14.5792 8.58541 15.25 8.25C15.9208 7.91459 15.9206 7.91424 15.9205 7.91388C15.9204 7.91375 15.9202 7.91338 15.9201 7.91312C15.9198 7.9126 15.9195 7.91205 15.9192 7.91146C15.9187 7.91029 15.918 7.909 15.9173 7.90759C15.9158 7.90475 15.9141 7.90143 15.9121 7.89764C15.9082 7.89004 15.9032 7.88054 15.897 7.86927C15.8848 7.84672 15.8681 7.817 15.8468 7.78116C15.8043 7.70955 15.7431 7.61294 15.6617 7.49977C15.4996 7.27412 15.254 6.9781 14.9125 6.68273C14.2218 6.08539 13.1468 5.5 11.625 5.5V7ZM0.75 8.25C1.42082 8.58541 1.42065 8.58575 1.42049 8.58608C1.42044 8.58618 1.42028 8.5865 1.42017 8.5867C1.41997 8.5871 1.41979 8.58747 1.41961 8.58781C1.41927 8.58849 1.41898 8.58906 1.41875 8.58952C1.41829 8.59042 1.41805 8.59088 1.41804 8.59089C1.41803 8.59091 1.41893 8.58918 1.42076 8.58581C1.42443 8.57906 1.4318 8.56581 1.44299 8.54697C1.46541 8.5092 1.50285 8.44956 1.55628 8.37523C1.66362 8.22588 1.83214 8.0219 2.06874 7.81727C2.53432 7.41461 3.27176 7 4.375 7V5.5C2.85324 5.5 1.77818 6.08539 1.08751 6.68273C0.745983 6.9781 0.500439 7.27412 0.338254 7.49977C0.256912 7.61294 0.195723 7.70955 0.153205 7.78116C0.131921 7.817 0.115238 7.84672 0.102978 7.86927C0.0968456 7.88054 0.0918118 7.89004 0.0878548 7.89764C0.085876 7.90143 0.0841656 7.90475 0.0827209 7.90759C0.0819985 7.909 0.0813425 7.91029 0.0807524 7.91146C0.0804573 7.91205 0.0801788 7.9126 0.0799167 7.91312C0.0797858 7.91338 0.0796011 7.91375 0.0795358 7.91388C0.0793557 7.91424 0.0791796 7.91459 0.75 8.25ZM4.375 7C5.47824 7 6.21568 7.41461 6.68126 7.81727C6.91786 8.0219 7.08638 8.22588 7.19372 8.37523C7.24715 8.44956 7.28459 8.5092 7.30701 8.54697C7.3182 8.56581 7.32557 8.57906 7.32924 8.58581C7.33107 8.58918 7.33197 8.59091 7.33196 8.59089C7.33195 8.59088 7.33171 8.59042 7.33125 8.58952C7.33102 8.58906 7.33073 8.58849 7.33039 8.58781C7.33021 8.58747 7.33003 8.5871 7.32982 8.5867C7.32972 8.5865 7.32956 8.58618 7.32951 8.58608C7.32935 8.58575 7.32918 8.58541 8 8.25C8.67082 7.91459 8.67064 7.91424 8.67046 7.91388C8.6704 7.91375 8.67021 7.91338 8.67008 7.91312C8.66982 7.9126 8.66954 7.91205 8.66925 7.91146C8.66866 7.91029 8.668 7.909 8.66728 7.90759C8.66583 7.90475 8.66412 7.90143 8.66215 7.89764C8.65819 7.89004 8.65315 7.88054 8.64702 7.86927C8.63476 7.84672 8.61808 7.817 8.5968 7.78116C8.55428 7.70955 8.49309 7.61294 8.41175 7.49977C8.24956 7.27412 8.00402 6.9781 7.66249 6.68273C6.97182 6.08539 5.89676 5.5 4.375 5.5V7Z"
            fill={color}
          />
        </g>
        <defs>
          <clipPath id="clip0_16_225">
            <path fill={color} d="M0 0H16V16H0z" />
          </clipPath>
        </defs>
      </svg>
    );
  },
);

export default Parachute16;
