import * as React from 'react';
import { IconProps } from './types';

export const ShieldCheckmarkBoldFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M9.20117 1.15573C9.76058 0.948216 10.3764 0.950693 10.9346 1.16159L16.4033 3.22799C17.3647 3.5913 18.0007 4.51184 18.001 5.53952V10.8374C18.0008 13.328 16.2049 15.2671 14.5752 16.5366C12.8981 17.843 11.109 18.6653 10.5986 18.8881C10.2586 19.0366 9.8808 19.0384 9.53906 18.8921C9.02363 18.6713 7.20311 17.8496 5.49512 16.5444C3.83824 15.2783 2.00018 13.3381 2 10.8374V5.54635C2.00015 4.51308 2.64351 3.58835 3.6123 3.22897L9.20117 1.15573ZM13.7041 7.04342C13.3136 6.65303 12.6805 6.65294 12.29 7.04342L8.8252 10.5083L7.86328 9.54635C7.47281 9.15609 6.83969 9.15609 6.44922 9.54635C6.05898 9.93683 6.05896 10.5699 6.44922 10.9604L8.11816 12.6294C8.50863 13.0196 9.14176 13.0196 9.53223 12.6294L13.7041 8.45748C14.0946 8.06703 14.0944 7.43396 13.7041 7.04342Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

ShieldCheckmarkBoldFilled20.category = 'Security';

export default ShieldCheckmarkBoldFilled20;
