import * as React from 'react';
import { IconProps } from './types';

export const DocumentDownloadFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="13"
      viewBox="0 0 12 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="DocumentDownloadFilled12"
      {...props}
    >
      <path
        d="M3.496.087C4.648.384 5.5 1.427 5.5 2.672v.245C5.5 4.343 6.657 5.5 8.083 5.5 9.693 5.5 11 6.806 11 8.417v.336c0 1.794-1.455 3.25-3.25 3.25H5.653l1.198-1.198c.78-.781.78-2.047 0-2.828-.351-.351-.8-.544-1.258-.58V7c0-1.105-.896-2-2-2-1.105 0-2 .896-2 2v.397c-.202.016-.402.064-.593.141V3.25C1 1.714 2.065.427 3.496.087zm.097 6.163c.414 0 .75.336.75.75v2.423l.563-.563c.293-.292.768-.293 1.06 0 .294.293.294.768 0 1.06l-1.842 1.844c-.293.293-.769.293-1.061 0L1.22 9.92c-.293-.293-.293-.768 0-1.06.293-.294.767-.294 1.06 0l.563.56V7c0-.414.336-.75.75-.75zM6.04.009c.094.008.188.022.281.042 2.319.497 4.13 2.309 4.627 4.628.03.138.044.279.048.42C10.218 4.415 9.2 4 8.083 4 7.485 4 7 3.515 7 2.917v-.245C7 1.66 6.64.732 6.04.009z"
        fill={color}
      />
    </svg>
  );
};

DocumentDownloadFilled12.category = 'Interface General';

export default DocumentDownloadFilled12;
