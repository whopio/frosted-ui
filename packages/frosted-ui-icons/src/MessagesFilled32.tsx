import * as React from 'react';
import { IconProps } from './types';

export const MessagesFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="MessagesFilled32"
      {...props}
    >
      <path
        d="M9.697 13.85c4.667 0 8.45 3.784 8.45 8.45 0 4.667-3.783 8.45-8.45 8.45-1.212 0-2.365-.259-3.408-.72-.891.197-1.8.422-2.571.625l-.776.207c-1.094.298-2.105-.716-1.807-1.809l.208-.775c.202-.772.427-1.682.623-2.573-.46-1.043-.719-2.194-.719-3.405 0-4.666 3.784-8.45 8.45-8.45zM20.2 1.25c5.827 0 10.55 4.724 10.55 10.55l-.004.305c-.04 1.426-.365 2.783-.919 4.014.38 1.73.848 3.52 1.164 4.666.302 1.094-.708 2.108-1.804 1.806-1.148-.316-2.935-.787-4.665-1.166-1.32.594-2.783.925-4.322.925-.168 0-.335-.005-.5-.013V22.3c0-5.523-4.477-10-10-10h-.038l-.012-.5c0-5.826 4.724-10.55 10.55-10.55z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

MessagesFilled32.category = 'Communication';

export default MessagesFilled32;
