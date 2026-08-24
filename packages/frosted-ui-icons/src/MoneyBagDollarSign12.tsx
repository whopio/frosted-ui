import * as React from 'react';
import { IconProps } from './types';

export const MoneyBagDollarSign12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="MoneyBagDollarSign12"
      {...props}
    >
      <path
        d="M6.005 0C7.115 0 7.897.245 8.4.494c.79.39.829 1.284.52 1.84l-.61 1.091c1.9 1.082 3.016 2.969 2.912 4.775-.06 1.033-.526 2.012-1.435 2.717C8.89 11.614 7.617 12 6.005 12s-2.883-.387-3.781-1.083C1.314 10.212.847 9.234.786 8.201.68 6.393 1.796 4.505 3.7 3.425l-.608-1.091c-.31-.556-.27-1.45.52-1.84l.201-.093C4.314.188 5.034 0 6.005 0zM4.9 4.5c-1.797.795-2.69 2.362-2.617 3.613.037.621.307 1.191.858 1.619.564.436 1.48.768 2.864.768 1.385 0 2.3-.332 2.863-.768.55-.428.82-.997.856-1.62.072-1.25-.822-2.817-2.614-3.612H4.9zm1.1 1c.415 0 .75.335.75.75v2.5c0 .413-.335.75-.75.75-.414 0-.75-.337-.75-.75v-2.5c0-.415.336-.75.75-.75zm.005-4c-.707 0-1.203.124-1.524.249l.697 1.25h1.655l.694-1.25c-.32-.124-.816-.25-1.522-.25z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

MoneyBagDollarSign12.category = 'Money & Shopping';

export default MoneyBagDollarSign12;
