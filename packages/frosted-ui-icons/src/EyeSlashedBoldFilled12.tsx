import * as React from 'react';
import { IconProps } from './types';

export const EyeSlashedBoldFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="EyeSlashedBoldFilled12"
      {...props}
    >
      <path
        d="M.793.793c.39-.39 1.024-.39 1.414 0l1.25 1.25h.003L5.485 4.07v.001l2.443 2.444h.002l2.253 2.253v.001l1.024 1.025c.39.39.39 1.024 0 1.414-.39.39-1.024.39-1.414 0l-1.099-1.099c-.092-.092-.232-.113-.35-.059-.677.315-1.459.522-2.344.522-1.923 0-3.36-.97-4.298-1.913C.766 7.718.245 6.728.124 6.485c-.152-.305-.152-.665 0-.97l.166-.31C.531 4.78 1 4.047 1.702 3.342c.062-.062.064-.162.002-.224l-.911-.911c-.39-.39-.39-1.024 0-1.414zm3.642 5.056C4.27 5.685 4 5.769 4 6c0 1.105.895 2 2 2 .23 0 .314-.272.15-.436L4.435 5.85zM6 1.429c1.923 0 3.36.97 4.298 1.913.937.94 1.457 1.93 1.578 2.173.152.305.152.665 0 .97-.037.075-.112.219-.226.41-.097.164-.322.188-.458.053L5.907 1.663c-.087-.087-.03-.234.093-.234z"
        fill={color}
      />
    </svg>
  );
};

EyeSlashedBoldFilled12.category = 'Accessibility';

export default EyeSlashedBoldFilled12;
