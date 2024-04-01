import * as React from 'react';
import { IconProps } from './types';

export const DownloadDocumentFilled20 = React.forwardRef<
  SVGSVGElement,
  IconProps
>(({ color = 'currentColor', ...props }, forwardedRef) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
      ref={forwardedRef}
    >
      <path
        d="M15.1991 6.57432L11.4741 2.82055V5.37838C11.4741 6.04434 12.0083 6.57432 12.6552 6.57432H15.1991ZM17.75 8.13033C17.75 7.41721 17.4689 6.73212 16.9668 6.22608L16.9668 6.22607L11.8221 1.04167L11.8221 1.04166C11.3197 0.535453 10.6372 0.25 9.9243 0.25H4.93103C3.44491 0.25 2.25 1.46247 2.25 2.94595V17.0541C2.25 18.5376 3.44492 19.75 4.93103 19.75H15.069C16.5551 19.75 17.75 18.5376 17.75 17.0541V8.13033ZM10.9763 9.5C10.9763 9.08579 10.6405 8.75 10.2263 8.75C9.81207 8.75 9.47629 9.08579 9.47629 9.5V14.2943L8.42398 13.242C8.13108 12.9491 7.65621 12.9491 7.36332 13.242C7.07042 13.5349 7.07042 14.0098 7.36332 14.3027L9.36414 16.3035C9.80348 16.7428 10.5158 16.7428 10.9551 16.3035L13.1293 14.1293C13.4222 13.8364 13.4222 13.3615 13.1293 13.0687C12.8364 12.7758 12.3615 12.7758 12.0686 13.0687L10.9763 14.161V9.5Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
});

export default DownloadDocumentFilled20;
