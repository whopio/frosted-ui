import * as React from 'react';
import { IconProps } from './types';

export const Lightbulb32 = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-fui-icon="true"
        {...props}
        ref={forwardedRef}
      >
        <path
          d="M16 2C10.3391 2 5.75 6.58908 5.75 12.25C5.75 15.6232 7.37865 18.6158 9.8957 20.4849C10.7742 21.1373 11.4758 22.1343 11.5615 23.3342L11.6907 25.1425C11.7654 26.1891 12.6363 27 13.6856 27H14.1291L12.0083 12.8613C11.9701 12.6064 12.0654 12.3497 12.2608 12.1815C12.4562 12.0134 12.7242 11.9574 12.9706 12.0332L14.3213 12.4488L15.6857 11.819C15.8851 11.727 16.1149 11.727 16.3143 11.819L17.6787 12.4488L19.0294 12.0332C19.2758 11.9574 19.5438 12.0134 19.7392 12.1815C19.9346 12.3497 20.03 12.6064 19.9917 12.8613L17.8709 27H18.3144C19.3637 27 20.2346 26.1891 20.3094 25.1425L20.4385 23.3342C20.5242 22.1342 21.2258 21.1373 22.1043 20.4849C24.6214 18.6158 26.25 15.6232 26.25 12.25C26.25 6.58908 21.6609 2 16 2ZM16.9874 28.5C16.9965 28.5002 17.0055 28.5002 17.0145 28.5H17.937C17.715 29.3626 16.9319 30 16 30C15.0681 30 14.285 29.3626 14.063 28.5H14.9856C14.9945 28.5002 15.0036 28.5002 15.0126 28.5H16.9874ZM16.3541 27L18.3315 13.8173L17.8456 13.9669C17.669 14.0212 17.4785 14.0084 17.3107 13.931L16 13.326L14.6893 13.931C14.5215 14.0084 14.3311 14.0212 14.1544 13.9669L13.6685 13.8173L15.6459 27H16.3541ZM4.25 12.25C4.25 5.76065 9.51065 0.5 16 0.5C22.4893 0.5 27.75 5.76065 27.75 12.25C27.75 16.1179 25.8803 19.5493 22.9986 21.6892C22.379 22.1493 21.9819 22.7798 21.9347 23.4411L21.8055 25.2494C21.704 26.6713 20.7627 27.8447 19.4875 28.2983C19.3361 30.0917 17.8325 31.5 16 31.5C14.1675 31.5 12.6639 30.0917 12.5125 28.2983C11.2374 27.8446 10.2961 26.6713 10.1945 25.2494L10.0653 23.4411C10.0181 22.7798 9.62101 22.1493 9.00143 21.6892C6.11971 19.5493 4.25 16.1179 4.25 12.25Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default Lightbulb32;
