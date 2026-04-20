import * as React from 'react';
import { IconProps } from './types';

export const CreditCardBlank16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M12.7432 2.5C14.4827 2.50017 15.8936 3.9108 15.8936 5.65039V10.3496C15.8936 12.0892 14.4827 13.4998 12.7432 13.5H3.25781C1.51812 13.5 0.107422 12.0893 0.107422 10.3496V5.65039C0.107422 3.91069 1.51812 2.5 3.25781 2.5H12.7432ZM1.60742 7V10.3496C1.60742 11.2609 2.34654 12 3.25781 12H12.7432C13.6543 11.9998 14.3936 11.2608 14.3936 10.3496V7H1.60742ZM3.25781 4C2.39725 4 1.69028 4.65919 1.61426 5.5H14.3857C14.3097 4.65931 13.6036 4.00016 12.7432 4H3.25781Z"
        fill={color}
      />
    </svg>
  );
};

CreditCardBlank16.category = 'Money & Shopping';

export default CreditCardBlank16;
