import * as React from 'react';
import { IconProps } from './types';

export const HeadphonesBoldFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="HeadphonesBoldFilled24"
      {...props}
    >
      <path
        d="M12 1c2.351 0 4.282.52 5.838 1.447 1.555.926 2.651 2.208 3.414 3.597C22.75 8.774 23 11.99 23 14.125v3.482C23 20.586 20.586 23 17.607 23 16.167 23 15 21.832 15 20.393v-5.786C15 13.167 16.168 12 17.607 12c.837 0 1.629.19 2.335.53-.123-1.664-.475-3.506-1.319-5.043-.55-1.001-1.297-1.853-2.32-2.462C15.28 4.417 13.898 4 12 4c-1.899 0-3.28.417-4.303 1.025-1.022.61-1.77 1.461-2.32 2.462-.844 1.537-1.197 3.379-1.32 5.043.706-.34 1.499-.53 2.336-.53C7.833 12 9 13.168 9 14.607v5.786C9 21.833 7.832 23 6.393 23 3.414 23 1 20.586 1 17.607v-3.482c0-2.134.25-5.352 1.748-8.081.763-1.39 1.859-2.67 3.414-3.597C7.718 1.521 9.648 1 12 1z"
        fill={color}
      />
    </svg>
  );
};

HeadphonesBoldFilled24.category = 'Sound & Music';

export default HeadphonesBoldFilled24;
