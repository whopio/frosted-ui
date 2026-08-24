import * as React from 'react';
import { IconProps } from './types';

export const TShirtFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="TShirtFilled24"
      {...props}
    >
      <path
        d="M8.294 1.79c.197-.067.414-.048.599.053.21.115.353.324.383.562l.002.011.012.066c.012.063.034.157.068.273.07.234.188.54.38.84.367.574 1.014 1.155 2.263 1.155 1.248 0 1.896-.581 2.263-1.154.192-.3.31-.607.38-.841.034-.115.056-.21.068-.273l.012-.066.002-.01c.03-.239.173-.448.383-.563.211-.116.465-.124.682-.02l7.215 3.421c.759.36 1.074 1.274.7 2.026l-1.712 3.43c-.33.659-1.09.982-1.793.761l-.7-.222V21c0 .828-.672 1.5-1.5 1.5h-12c-.828 0-1.5-.672-1.5-1.5v-9.76l-.7.221c-.704.221-1.464-.102-1.793-.762L.297 7.27c-.375-.751-.06-1.665.7-2.025L8.21 1.822l.083-.033z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

TShirtFilled24.category = 'Objects';

export default TShirtFilled24;
