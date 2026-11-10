import * as React from 'react';
import { IconProps } from './types';

export const CardStackBoldFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="CardStackBoldFilled16"
      {...props}
    >
      <path
        d="M12 7c1.898 0 3.32 1.742 2.94 3.602l-.41 2.002c-.287 1.396-1.515 2.399-2.94 2.399H4.415c-1.425 0-2.652-1.003-2.938-2.399l-.41-2.002C.684 8.742 2.105 7 4.004 7H12zm-.434-3c1.21 0 2.202.855 2.443 1.972-.601-.3-1.282-.472-2.009-.472H4.005c-.729 0-1.41.171-2.012.473C2.233 4.855 3.227 4 4.437 4h7.13zM9.986.999c1.062 0 1.952.658 2.319 1.57-.239-.045-.485-.069-.737-.069H4.44c-.25 0-.495.024-.733.068C4.073 1.658 4.963 1 6.024 1h3.962z"
        fill={color}
      />
    </svg>
  );
};

CardStackBoldFilled16.category = 'Interface General';

export default CardStackBoldFilled16;
