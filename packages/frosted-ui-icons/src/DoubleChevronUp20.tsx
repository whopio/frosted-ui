import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronUp20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M17.7199 11.3349C18.0127 11.6277 18.4876 11.6276 18.7804 11.3349C19.073 11.0421 19.0739 10.5672 18.7814 10.2744L10.8693 2.36226C10.3893 1.88238 9.61107 1.88243 9.13103 2.36226L1.2199 10.2744C0.927031 10.5673 0.927019 11.042 1.2199 11.3349C1.51281 11.6277 1.98759 11.6278 2.28045 11.3349L10.0002 3.61519L17.7199 11.3349ZM17.7199 17.7802C18.0127 18.0728 18.4876 18.0728 18.7804 17.7802C19.0731 17.4875 19.0738 17.0126 18.7814 16.7197L10.8693 8.80757C10.3893 8.32765 9.61106 8.32763 9.13103 8.80757L1.2199 16.7197C0.927031 17.0126 0.927019 17.4874 1.2199 17.7802C1.51282 18.0728 1.98765 18.073 2.28045 17.7802L10.0002 10.0605L17.7199 17.7802Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleChevronUp20.category = 'Arrows';

export default DoubleChevronUp20;
