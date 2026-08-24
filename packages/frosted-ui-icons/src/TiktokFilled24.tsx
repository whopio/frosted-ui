import * as React from 'react';
import { IconProps } from './types';

export const TiktokFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="TiktokFilled24"
      {...props}
    >
      <path
        d="M20.715 10.213c-1.78 0-3.427-.565-4.772-1.526v6.986c0 3.494-2.835 6.327-6.331 6.327-1.304 0-2.517-.394-3.524-1.07-1.693-1.136-2.807-3.067-2.807-5.257 0-3.495 2.835-6.328 6.331-6.328.29 0 .58.02.869.06v3.499c-.277-.088-.573-.136-.88-.136-1.599 0-2.895 1.296-2.895 2.895 0 1.13.648 2.108 1.593 2.585.392.198.834.309 1.303.309 1.596 0 2.89-1.29 2.896-2.884V2h3.445v.44c.012.132.03.263.052.393.239 1.363 1.054 2.528 2.186 3.234.76.474 1.639.725 2.534.723v3.423z"
        fill={color}
      />
    </svg>
  );
};

TiktokFilled24.category = 'Social & Brands';

export default TiktokFilled24;
