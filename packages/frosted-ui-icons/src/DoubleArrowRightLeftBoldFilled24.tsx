import * as React from 'react';
import { IconProps } from './types';

export const DoubleArrowRightLeftBoldFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="DoubleArrowRightLeftBoldFilled24"
      {...props}
    >
      <path
        d="M5.94 12.439c.585-.585 1.535-.585 2.12 0 .586.586.586 1.536 0 2.122L6.121 16.5H21.5c.828 0 1.5.671 1.5 1.5 0 .827-.672 1.5-1.5 1.5H6.12l1.94 1.939c.585.585.585 1.535 0 2.12-.586.587-1.536.586-2.122 0l-4.5-4.5C1.16 18.78 1 18.399 1 18s.158-.779.44-1.06l4.5-4.501zm10-12c.585-.585 1.535-.585 2.12 0l4.5 4.5c.281.282.44.664.44 1.061 0 .398-.159.78-.44 1.061l-4.5 4.5c-.585.585-1.535.585-2.12 0-.586-.586-.586-1.535 0-2.121l1.939-1.94H2.5C1.672 7.5 1 6.83 1 6c0-.828.672-1.5 1.5-1.5h15.379l-1.94-1.939c-.585-.586-.585-1.535 0-2.121z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleArrowRightLeftBoldFilled24.category = 'Arrows';

export default DoubleArrowRightLeftBoldFilled24;
