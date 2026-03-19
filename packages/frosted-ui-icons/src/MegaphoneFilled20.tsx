import * as React from 'react';
import { IconProps } from './types';

export const MegaphoneFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M12.7207 1.13937C14.3368 0.609652 15.9992 1.81386 16 3.51437V15.4636C15.9998 17.1731 14.3223 18.3783 12.7021 17.8327L8.39551 16.3825C8.20119 16.3173 8.00009 16.4617 8 16.6667V18.2497C7.99989 18.6638 7.66414 18.9997 7.25 18.9997C6.83586 18.9997 6.50011 18.6638 6.5 18.2497V3.17844L12.7207 1.13937ZM5 15.238L3.21289 14.6364C1.89102 14.1911 1.00015 12.9513 1 11.5564V7.33664C1.00048 5.93236 1.90286 4.68634 3.2373 4.24875L5 3.67062V15.238ZM17.5 6.44797C17.8267 6.66848 18.1451 6.96043 18.4043 7.34934C18.7762 7.90756 18.998 8.61886 18.998 9.49973C18.998 10.3806 18.7762 11.0918 18.4043 11.6501C18.1452 12.039 17.8266 12.331 17.5 12.5515V6.44797Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

MegaphoneFilled20.category = 'Objects';

export default MegaphoneFilled20;
