import * as React from 'react';
import { IconProps } from './types';

export const Instagram32 = ({
  color = 'currentColor',
  ...props
}: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M16 5C19.5825 5 20.0069 5.01342 21.422 5.07806C22.2725 5.08833 23.1151 5.24471 23.9127 5.54036C24.4956 5.75547 25.0228 6.0985 25.4557 6.54424C25.9015 6.97709 26.2445 7.50436 26.4596 8.08726C26.7552 8.88491 26.9116 9.72744 26.9219 10.5781C26.9866 11.993 27 12.4175 27 16C27 19.5825 26.9866 20.0069 26.9219 21.422C26.9116 22.2725 26.7552 23.1151 26.4596 23.9127C26.2363 24.4915 25.8944 25.0172 25.4557 25.4557C25.0172 25.8944 24.4915 26.2363 23.9127 26.4596C23.1151 26.7552 22.2725 26.9116 21.422 26.9219C20.0069 26.9866 19.5825 27 16 27C12.4175 27 11.993 26.9866 10.5781 26.9219C9.72703 26.9117 8.88408 26.7554 8.08605 26.4596C7.50358 26.2444 6.97675 25.9013 6.54424 25.4557C6.09851 25.0228 5.75547 24.4956 5.54036 23.9127C5.24471 23.1151 5.08833 22.2725 5.07806 21.422C5.01342 20.0069 5 19.5825 5 16C5 12.4175 5.01342 11.993 5.07806 10.5781C5.08833 9.72744 5.24471 8.88491 5.54036 8.08726C5.75547 7.50436 6.09851 6.97709 6.54424 6.54424C6.97709 6.0985 7.50436 5.75547 8.08726 5.54036C8.88491 5.24471 9.72744 5.08833 10.5781 5.07806C11.993 5.01342 12.4175 5 16 5Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M15.9999 20.9C15.0308 20.9 14.0834 20.6125 13.2776 20.0741C12.4719 19.5356 11.8438 18.7704 11.473 17.875C11.1021 16.9798 11.0051 15.9945 11.1941 15.0441C11.3832 14.0935 11.8499 13.2204 12.5351 12.5351C13.2204 11.8499 14.0935 11.3832 15.0441 11.1941C15.9945 11.0051 16.9798 11.1021 17.875 11.473C18.7704 11.8438 19.5356 12.4719 20.0741 13.2776C20.6125 14.0834 20.9 15.0308 20.9 15.9999C20.9 17.2994 20.3837 18.5459 19.4648 19.4648C18.5459 20.3837 17.2994 20.9 15.9999 20.9Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M21.8584 7.99192C22.1256 7.8135 22.4398 7.71826 22.7612 7.71826C23.1921 7.71826 23.6055 7.88933 23.9103 8.19387C24.215 8.4984 24.3862 8.91142 24.3862 9.34209C24.3862 9.66326 24.2909 9.97721 24.1123 10.2442C23.9338 10.5113 23.6799 10.7194 23.383 10.8423C23.0861 10.9652 22.7594 10.9974 22.4442 10.9347C22.1289 10.8721 21.8394 10.7174 21.6122 10.4903C21.3848 10.2632 21.2302 9.97388 21.1675 9.65888C21.1047 9.34389 21.137 9.0174 21.26 8.72068C21.3828 8.42396 21.5912 8.17036 21.8584 7.99192Z"
        fill={color}
      />
    </svg>
  );
};

export default Instagram32;
