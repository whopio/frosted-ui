import * as React from 'react';
import { IconProps } from './types';

export const Gear12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M4.86203 1.50891L4.1213 1.39133V1.39133L4.86203 1.50891ZM4.74379 2.25383L5.00732 2.95601C5.25998 2.86119 5.44221 2.63794 5.48452 2.37141L4.74379 2.25383ZM3.60859 2.91023L3.34005 3.6105C3.59217 3.70718 3.87679 3.66088 4.08525 3.48927L3.60859 2.91023ZM2.90332 2.63977L2.63478 3.34004H2.63478L2.90332 2.63977ZM1.80165 3.0301L1.15213 2.6551H1.15213L1.80165 3.0301ZM1.40339 3.7199L0.753871 3.3449L1.40339 3.7199ZM1.61619 4.86914L2.08838 4.28644L2.08838 4.28644L1.61619 4.86914ZM2.20258 5.34432L2.94259 5.46635C2.98645 5.20038 2.8842 4.93133 2.67477 4.76162L2.20258 5.34432ZM2.20258 6.65565L2.67477 7.23835C2.88419 7.06864 2.98644 6.79959 2.94259 6.53363L2.20258 6.65565ZM1.61614 7.13086L1.14396 6.54816L1.61614 7.13086ZM1.40335 8.2801L2.05286 7.9051H2.05286L1.40335 8.2801ZM1.8016 8.9699L2.45112 8.5949L2.45112 8.5949L1.8016 8.9699ZM2.90327 9.36023L2.63473 8.65995H2.63473L2.90327 9.36023ZM3.60858 9.08976L4.08524 8.51072C3.87677 8.33911 3.59215 8.29281 3.34004 8.38949L3.60858 9.08976ZM4.74379 9.74617L5.48452 9.62859C5.44221 9.36206 5.25998 9.13881 5.00732 9.04399L4.74379 9.74617ZM4.86203 10.4911L5.60276 10.3735L4.86203 10.4911ZM7.43629 10.4911L8.17702 10.6087L7.43629 10.4911ZM7.55454 9.74612L7.29098 9.04396C7.03834 9.13878 6.85612 9.36203 6.81381 9.62855L7.55454 9.74612ZM8.68965 9.08975L8.95819 8.38947C8.70607 8.29279 8.42145 8.3391 8.21298 8.51071L8.68965 9.08975ZM9.39499 9.36023L9.12645 10.0605L9.12645 10.0605L9.39499 9.36023ZM10.4967 8.9699L11.1462 9.3449L10.4967 8.9699ZM10.8949 8.2801L10.2454 7.9051V7.9051L10.8949 8.2801ZM10.6821 7.13086L11.1543 6.54816V6.54816L10.6821 7.13086ZM10.0956 6.65561L9.35563 6.5336C9.31178 6.79956 9.41403 7.06861 9.62345 7.23831L10.0956 6.65561ZM10.0956 5.34435L9.62345 4.76165C9.41402 4.93136 9.31177 5.20041 9.35563 5.46638L10.0956 5.34435ZM10.6821 4.86914L10.2099 4.28644L10.2099 4.28644L10.6821 4.86914ZM10.8949 3.7199L10.2453 4.0949V4.0949L10.8949 3.7199ZM10.4966 3.0301L11.1461 2.6551V2.6551L10.4966 3.0301ZM9.39494 2.63977L9.1264 1.93949L9.1264 1.93949L9.39494 2.63977ZM8.68963 2.91024L8.21297 3.48928C8.42144 3.66089 8.70606 3.70719 8.95817 3.61051L8.68963 2.91024ZM7.55454 2.25388L6.81381 2.37145C6.85612 2.63797 7.03834 2.86122 7.29098 2.95604L7.55454 2.25388ZM7.43629 1.50891L6.69556 1.62648L6.69556 1.62648L7.43629 1.50891ZM5.60276 1.62649C5.61432 1.55363 5.67714 1.5 5.7509 1.5V0C4.93949 0 4.24851 0.589956 4.1213 1.39133L5.60276 1.62649ZM5.48452 2.37141L5.60276 1.62649L4.1213 1.39133L4.00306 2.13626L5.48452 2.37141ZM4.08525 3.48927C4.3592 3.26376 4.6702 3.08253 5.00732 2.95601L4.48026 1.55166C3.98603 1.73715 3.53141 2.00234 3.13193 2.33118L4.08525 3.48927ZM2.63478 3.34004L3.34005 3.6105L3.87713 2.20995L3.17186 1.93949L2.63478 3.34004ZM2.45117 3.4051C2.48805 3.34122 2.5659 3.31363 2.63478 3.34004L3.17186 1.93949C2.41424 1.64896 1.55783 1.9524 1.15213 2.6551L2.45117 3.4051ZM2.05291 4.0949L2.45117 3.4051L1.15213 2.6551L0.753871 3.3449L2.05291 4.0949ZM2.08838 4.28644C2.03107 4.24 2.01603 4.15878 2.05291 4.0949L0.753871 3.3449C0.348164 4.04761 0.51359 4.94099 1.144 5.45184L2.08838 4.28644ZM2.67477 4.76162L2.08838 4.28644L1.144 5.45184L1.7304 5.92702L2.67477 4.76162ZM2.89911 6C2.89911 5.81773 2.91404 5.63951 2.94259 5.46635L1.46258 5.2223C1.42077 5.47581 1.39911 5.73565 1.39911 6H2.89911ZM2.94259 6.53363C2.91403 6.36047 2.89911 6.18226 2.89911 6H1.39911C1.39911 6.26433 1.42077 6.52416 1.46257 6.77767L2.94259 6.53363ZM2.08833 7.71356L2.67477 7.23835L1.73039 6.07295L1.14396 6.54816L2.08833 7.71356ZM2.05286 7.9051C2.01598 7.84122 2.03102 7.76 2.08833 7.71356L1.14396 6.54816C0.513544 7.05901 0.34812 7.9524 0.753826 8.6551L2.05286 7.9051ZM2.45112 8.5949L2.05286 7.9051L0.753826 8.6551L1.15208 9.3449L2.45112 8.5949ZM2.63473 8.65995C2.56586 8.68637 2.488 8.65878 2.45112 8.5949L1.15208 9.3449C1.55779 10.0476 2.4142 10.351 3.17181 10.0605L2.63473 8.65995ZM3.34004 8.38949L2.63473 8.65995L3.17181 10.0605L3.87712 9.79004L3.34004 8.38949ZM5.00732 9.04399C4.6702 8.91747 4.35919 8.73623 4.08524 8.51072L3.13191 9.66881C3.5314 9.99766 3.98602 10.2628 4.48026 10.4483L5.00732 9.04399ZM5.60276 10.3735L5.48452 9.62859L4.00306 9.86374L4.1213 10.6087L5.60276 10.3735ZM5.7509 10.5C5.67714 10.5 5.61432 10.4464 5.60276 10.3735L4.1213 10.6087C4.24851 11.41 4.93949 12 5.7509 12V10.5ZM6.54742 10.5H5.7509V12H6.54742V10.5ZM6.69556 10.3735C6.684 10.4464 6.62118 10.5 6.54742 10.5V12C7.35883 12 8.04981 11.41 8.17702 10.6087L6.69556 10.3735ZM6.81381 9.62855L6.69556 10.3735L8.17702 10.6087L8.29526 9.8637L6.81381 9.62855ZM8.21298 8.51071C7.93905 8.73621 7.62807 8.91743 7.29098 9.04396L7.81809 10.4483C8.31228 10.2628 8.76687 9.99762 9.16632 9.66879L8.21298 8.51071ZM9.66353 8.65996L8.95819 8.38947L8.42111 9.79003L9.12645 10.0605L9.66353 8.65996ZM9.84714 8.5949C9.81026 8.65878 9.7324 8.68637 9.66352 8.65996L9.12645 10.0605C9.88406 10.351 10.7405 10.0476 11.1462 9.3449L9.84714 8.5949ZM10.2454 7.9051L9.84714 8.5949L11.1462 9.3449L11.5444 8.6551L10.2454 7.9051ZM10.2099 7.71356C10.2672 7.76 10.2823 7.84122 10.2454 7.9051L11.5444 8.6551C11.9501 7.95239 11.7847 7.05901 11.1543 6.54816L10.2099 7.71356ZM9.62345 7.23831L10.2099 7.71356L11.1543 6.54816L10.5678 6.07291L9.62345 7.23831ZM9.39911 6C9.39911 6.18225 9.38418 6.36045 9.35563 6.5336L10.8356 6.77763C10.8774 6.52413 10.8991 6.26432 10.8991 6H9.39911ZM9.35563 5.46638C9.38418 5.63953 9.39911 5.81774 9.39911 6H10.8991C10.8991 5.73567 10.8774 5.47584 10.8356 5.22233L9.35563 5.46638ZM10.2099 4.28644L9.62345 4.76165L10.5678 5.92705L11.1543 5.45184L10.2099 4.28644ZM10.2453 4.0949C10.2822 4.15878 10.2672 4.24 10.2099 4.28644L11.1543 5.45184C11.7847 4.94099 11.9501 4.0476 11.5444 3.3449L10.2453 4.0949ZM9.84709 3.4051L10.2453 4.0949L11.5444 3.3449L11.1461 2.6551L9.84709 3.4051ZM9.66348 3.34005C9.73236 3.31363 9.81021 3.34122 9.84709 3.4051L11.1461 2.6551C10.7404 1.9524 9.88402 1.64897 9.1264 1.93949L9.66348 3.34005ZM8.95817 3.61051L9.66348 3.34004L9.1264 1.93949L8.42109 2.20996L8.95817 3.61051ZM7.29098 2.95604C7.62807 3.08257 7.93905 3.26379 8.21297 3.48928L9.1663 2.33119C8.76685 2.00237 8.31228 1.7372 7.81809 1.55171L7.29098 2.95604ZM6.69556 1.62648L6.81381 2.37145L8.29526 2.1363L8.17701 1.39133L6.69556 1.62648ZM6.54742 1.5C6.62118 1.5 6.684 1.55363 6.69556 1.62648L8.17702 1.39133C8.04981 0.589954 7.35883 0 6.54742 0V1.5ZM5.7509 1.5H6.54742V0H5.7509V1.5Z"
        fill={color}
      />
      <ellipse cx="6" cy="6" rx="2" ry="2" fill={color} />
    </svg>
  );
};

export default Gear12;
