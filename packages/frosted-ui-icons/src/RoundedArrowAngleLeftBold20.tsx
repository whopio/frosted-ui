import * as React from 'react';
import { IconProps } from './types';

export const RoundedArrowAngleLeftBold20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M12.75 18.9983C16.3391 18.998 19.249 16.0884 19.249 12.4993C19.2489 8.91011 16.3391 6.0005 12.75 6.00024H4.41309L7.70703 2.7063C8.09751 2.31579 8.09749 1.68276 7.70703 1.29224C7.31651 0.90172 6.6835 0.901735 6.29297 1.29224L1.29297 6.29224C1.10549 6.47976 1.00001 6.7341 1 6.99927C1.00003 7.26445 1.10546 7.51879 1.29297 7.7063L6.29297 12.7063C6.68347 13.0968 7.31651 13.0967 7.70703 12.7063C8.09751 12.3158 8.09751 11.6827 7.70703 11.2922L4.41504 8.00024H12.75C15.2345 8.0005 17.249 10.0147 17.249 12.4993C17.2489 14.9838 15.2345 16.998 12.75 16.9983H10.75C10.1979 16.9984 9.75012 17.4462 9.75 17.9983C9.75013 18.5504 10.1979 18.9982 10.75 18.9983H12.75Z"
        fill={color}
      />
    </svg>
  );
};

RoundedArrowAngleLeftBold20.category = 'Arrows';

export default RoundedArrowAngleLeftBold20;
