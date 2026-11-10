import * as React from 'react';
import { IconProps } from './types';

export const LightningBold16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="17"
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="LightningBold16"
      {...props}
    >
      <path
        d="M10.778 0c.984 0 1.631 1.025 1.208 1.913l-1.62 3.4h2.274c1.14 0 1.757 1.337 1.018 2.206L6.837 15.53c-.885 1.039-2.575.242-2.336-1.101l.836-4.7H3.358c-.908 0-1.553-.886-1.272-1.75L4.328 1.08l.043-.118C4.611.384 5.18 0 5.813 0h4.965zM4.27 7.73h2.06c.726 0 1.277.656 1.15 1.373l-.583 3.27 4.308-5.06H9.05c-.859 0-1.425-.895-1.056-1.67L9.73 2H6.132L4.27 7.73z"
        fill={color}
      />
    </svg>
  );
};

LightningBold16.category = 'Nature & Weather';

export default LightningBold16;
