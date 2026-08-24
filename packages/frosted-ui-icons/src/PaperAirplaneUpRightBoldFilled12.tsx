import * as React from 'react';
import { IconProps } from './types';

export const PaperAirplaneUpRightBoldFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="PaperAirplaneUpRightBoldFilled12"
      {...props}
    >
      <path
        d="M8.96.208c1.745-.563 3.395 1.087 2.832 2.833l-2.353 7.293c-.683 2.113-3.623 2.246-4.493.203l-.617-1.45 3.03-3.03c.39-.391.39-1.024 0-1.415-.39-.39-1.023-.39-1.414 0l-3.03 3.03-1.452-.618c-2.043-.87-1.91-3.81.204-4.492L8.959.208z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

PaperAirplaneUpRightBoldFilled12.category = 'Communication';

export default PaperAirplaneUpRightBoldFilled12;
