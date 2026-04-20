import * as React from 'react';
import { IconProps } from './types';

export const RoundedArrowAngleRightBoldFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M8.99951 22.9998C4.58144 22.9995 0.999512 19.4179 0.999512 14.9998C0.999643 10.5817 4.58152 7 8.99951 6.99976H17.8784L14.439 3.5603C13.8536 2.97449 13.8534 2.02485 14.439 1.43921C15.0246 0.853575 15.9742 0.853874 16.5601 1.43921L22.5601 7.43921C22.8412 7.72041 23.0004 8.10211 23.0005 8.49976C23.0005 8.89755 22.8413 9.27902 22.5601 9.5603L16.5601 15.5603C15.9743 16.146 15.0247 16.146 14.439 15.5603C13.8537 14.9745 13.8534 14.0249 14.439 13.4392L17.8784 9.99976H8.99951C6.23838 10 3.99964 12.2386 3.99951 14.9998C3.99951 17.761 6.2383 19.9995 8.99951 19.9998H11.0894C11.9176 19.9999 12.5892 20.6715 12.5894 21.4998C12.5894 22.3281 11.9177 22.9997 11.0894 22.9998H8.99951Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

RoundedArrowAngleRightBoldFilled24.category = 'Arrows';

export default RoundedArrowAngleRightBoldFilled24;
