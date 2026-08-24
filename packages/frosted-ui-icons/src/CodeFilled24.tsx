import * as React from 'react';
import { IconProps } from './types';

export const CodeFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="CodeFilled24"
      {...props}
    >
      <path
        d="M12.995 3.408c.19-.692.904-1.1 1.597-.912.692.189 1.1.903.912 1.596l-4.5 16.5c-.189.692-.904 1.1-1.597.912-.692-.19-1.1-.904-.912-1.596l4.5-16.5zM4.803 6.86c.492-.522 1.315-.547 1.838-.055.522.492.547 1.314.055 1.836l-2.71 2.88c-.253.27-.253.69 0 .96l2.71 2.88c.492.522.467 1.344-.055 1.836-.523.492-1.346.467-1.838-.056l-2.71-2.878c-1.196-1.271-1.196-3.253 0-4.524l2.71-2.879zm12.556-.055c.522-.492 1.345-.467 1.837.055l2.71 2.88c1.196 1.27 1.196 3.252 0 4.523l-2.71 2.878c-.492.523-1.315.548-1.837.056-.523-.492-.548-1.314-.056-1.837l2.71-2.88c.253-.27.253-.69 0-.959l-2.71-2.88c-.492-.522-.467-1.345.056-1.836z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

CodeFilled24.category = 'Code';

export default CodeFilled24;
