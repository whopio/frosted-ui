import * as React from 'react';
import { IconProps } from './types';

export const VideoFilled24 = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-fui-icon="true"
        {...props}
        ref={forwardedRef}
      >
        <path
          d="M3.61986 8.49994L9.09293 3.02688C9.10174 3.01807 9.11028 3.0091 9.11856 2.99997H13.7485L8.24854 8.49994H3.61986ZM1.49854 8.49994H1V6.56247C1 4.59496 2.59499 2.99997 4.5625 2.99997H6.99852L1.49854 8.49994ZM23 8.49994H16.9794L21.6829 3.7965C22.4865 4.4497 23 5.44612 23 6.56247V8.49994ZM19.4375 2.99997C19.7214 2.99997 19.9975 3.03317 20.2621 3.0959L14.8581 8.49994H10.3699L15.8429 3.02688C15.8517 3.01807 15.8603 3.0091 15.8686 2.99997H19.4375ZM23 9.99994H1V17.4375C1 19.405 2.59499 21 4.5625 21H19.4375C21.405 21 23 19.405 23 17.4375V9.99994ZM9.48749 18.3105V12.4675C9.48749 12.1797 9.79835 11.9992 10.0483 12.1418L15.1937 15.0779C15.4465 15.2221 15.4457 15.5869 15.1923 15.7301L10.047 18.637C9.79697 18.7782 9.48749 18.5976 9.48749 18.3105Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default VideoFilled24;
