import * as React from 'react';
import { IconProps } from './types';

export const RoundedArrowAngleLeftBold24 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M14.9932 22.9978C19.411 22.9977 22.9923 19.4165 22.9923 14.9988C22.9921 10.5812 19.4109 6.99982 14.9932 6.99976H4.38972L8.68269 2.70679C9.07303 2.3163 9.07303 1.68321 8.68269 1.29272C8.29219 0.902494 7.65908 0.902418 7.26863 1.29272L1.29206 7.26831C0.901805 7.65863 0.902184 8.29182 1.29206 8.68237L7.31648 14.7068C7.70698 15.0973 8.34001 15.0972 8.73054 14.7068C9.12106 14.3163 9.12106 13.6832 8.73054 13.2927L4.43855 8.99976H14.9932C18.3063 8.99982 20.9921 11.6858 20.9923 14.9988C20.9923 18.312 18.3064 20.9977 14.9932 20.9978H12.9102C12.3583 20.998 11.9105 21.4458 11.9102 21.9978C11.9102 22.55 12.3581 22.9976 12.9102 22.9978H14.9932Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

RoundedArrowAngleLeftBold24.category = 'Arrows';

export default RoundedArrowAngleLeftBold24;
