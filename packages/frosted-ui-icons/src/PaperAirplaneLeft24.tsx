import * as React from 'react';
import { IconProps } from './types';

export const PaperAirplaneLeft24 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M2.55222 14.544C0.482647 13.4735 0.48254 10.5136 2.55222 9.44337L18.143 1.38184C20.9903 -0.0899677 24.0624 2.93189 22.6372 5.80274L19.8188 11.4785C19.6583 11.8017 19.6584 12.1817 19.8188 12.5049L22.6391 18.1885C24.0642 21.0596 20.9921 24.0814 18.145 22.6094L2.55222 14.544ZM3.2407 10.7764C2.25281 11.2876 2.25269 12.7007 3.2407 13.2119L18.8335 21.2764C20.3929 22.0827 22.076 20.4281 21.2954 18.8555L18.4751 13.1719C18.4065 13.0338 18.3502 12.8915 18.3071 12.7461L12.7534 12.7461C12.3392 12.7461 12.0034 12.4103 12.0034 11.9961C12.0034 11.5819 12.3392 11.2461 12.7534 11.2461L18.3042 11.2461C18.3476 11.0978 18.4052 10.9523 18.4751 10.8115L21.2934 5.13575C22.0738 3.56344 20.3919 1.90824 18.8325 2.71387L3.2407 10.7764Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

PaperAirplaneLeft24.category = 'Communication';

export default PaperAirplaneLeft24;
