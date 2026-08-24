import * as React from 'react';
import { IconProps } from './types';

export const IlluminatiFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="IlluminatiFilled32"
      {...props}
    >
      <path
        d="M14.066 3.09c.871-1.468 2.997-1.468 3.869 0L31.3 25.602c.89 1.5-.191 3.398-1.935 3.398H2.635C.89 29-.19 27.102.7 25.602L14.066 3.09zM15.999 11c2.623 0 4.75 2.127 4.75 4.75S18.622 20.5 16 20.5s-4.75-2.127-4.75-4.75c0-2.622 2.126-4.748 4.748-4.75-3.095.001-5.294 1.385-6.76 2.898-1.272 1.313-2.005 2.733-2.333 3.471l-.116.273c-.132.325-.129.682.009 1.006C7.274 19.765 9.824 25 16 25c6.177 0 8.728-5.236 9.204-6.352.138-.324.14-.681.009-1.006-.245-.602-.995-2.245-2.45-3.745C21.298 12.384 19.097 11 16 11zm0 1.5c-1.795 0-3.25 1.456-3.25 3.25 0 1.795 1.456 3.25 3.25 3.25 1.795 0 3.25-1.455 3.25-3.25S17.794 12.5 16 12.5z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

IlluminatiFilled32.category = 'Interface General';

export default IlluminatiFilled32;
