import * as React from 'react';
import { IconProps } from './types';

export const Leaf16 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M13.8651 1.26225C14.1074 1.21792 14.3561 1.29546 14.5303 1.46968C14.7046 1.6439 14.7821 1.89259 14.7378 2.13495L14.7364 2.14221L14.7328 2.1617L14.7189 2.23599C14.7067 2.30073 14.6886 2.39533 14.6649 2.51606C14.6176 2.75749 14.5481 3.10364 14.4586 3.52472C14.2798 4.36612 14.0206 5.51032 13.6997 6.71776C13.3796 7.92245 12.9943 9.20442 12.5612 10.3161C12.1404 11.3965 11.634 12.4266 11.0303 13.0303C8.98422 15.0765 5.76946 15.2417 3.53458 13.5261L2.53033 14.5303C2.23744 14.8232 1.76256 14.8232 1.46967 14.5303C1.17678 14.2374 1.17678 13.7626 1.46967 13.4697L2.47392 12.4654C0.758309 10.2305 0.923562 7.01579 2.96968 4.96967C3.57338 4.36597 4.60354 3.85962 5.6839 3.43879C6.7956 3.00576 8.07757 2.62043 9.28226 2.30029C10.4897 1.97942 11.6339 1.72026 12.4753 1.54144C12.8964 1.45195 13.2425 1.38239 13.484 1.3351C13.6047 1.31146 13.6993 1.29337 13.764 1.28113L13.8383 1.26719L13.8578 1.26359L13.8651 1.26225ZM9.96969 11.9697C8.5106 13.4288 6.24499 13.5898 4.60788 12.4528L6.81066 10.25H9.5C9.91421 10.25 10.25 9.91421 10.25 9.5C10.25 9.08579 9.91421 8.75 9.5 8.75H8.31066L11.5303 5.53033C11.8232 5.23744 11.8232 4.76256 11.5303 4.46967C11.2374 4.17678 10.7626 4.17678 10.4697 4.46967L8.75 6.18934V5.89209C8.75 5.47788 8.41421 5.14209 8 5.14209C7.58579 5.14209 7.25 5.47788 7.25 5.89209V7.68934L5.71254 9.2268L5.74965 8.02312C5.76241 7.6091 5.43713 7.26313 5.02312 7.25036C4.6091 7.2376 4.26313 7.56288 4.25036 7.9769L4.16409 10.7752L3.54722 11.3921C2.41022 9.75501 2.57126 7.48942 4.03034 6.03033C4.39314 5.66753 5.15873 5.25314 6.22834 4.8365C7.26661 4.43207 8.48882 4.06321 9.66751 3.74998C10.8434 3.43747 11.9618 3.18407 12.7871 3.00867C12.877 2.98958 12.9633 2.97142 13.0458 2.95421C13.0286 3.03672 13.0104 3.12305 12.9913 3.2129C12.8159 4.03821 12.5625 5.15658 12.25 6.33251C11.9368 7.5112 11.568 8.73342 11.1635 9.77168C10.7469 10.8413 10.3325 11.6069 9.96969 11.9697Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default Leaf16;
