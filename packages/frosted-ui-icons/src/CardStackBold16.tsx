import * as React from 'react';
import { IconProps } from './types';

export const CardStackBold16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="CardStackBold16"
      {...props}
    >
      <path
        d="M9.985 1c1.506 0 2.67 1.323 2.48 2.817l-.044.334c1.04.378 1.751 1.423 1.635 2.595l-.098.983c.787.68 1.21 1.754.98 2.873l-.41 2.002c-.285 1.396-1.513 2.399-2.938 2.399H4.413c-1.424 0-2.652-1.003-2.938-2.399l-.41-2.002c-.23-1.12.195-2.197.983-2.876l-.096-.98c-.116-1.17.594-2.216 1.633-2.595l-.042-.334C3.353 2.323 4.516 1 6.023 1h3.962zm-5.98 8c-.633 0-1.108.58-.981 1.2l.41 2.003c.095.465.505.8.98.8h7.176c.475 0 .885-.335.98-.8l.409-2.003c.127-.62-.347-1.2-.98-1.2H4.004zm.435-3c-.295 0-.527.255-.498.549L3.986 7h8.035l.045-.451c.029-.294-.202-.549-.497-.549h-7.13zm1.583-3c-.301 0-.534.265-.496.563L5.582 4h4.843l.056-.437c.038-.298-.195-.563-.496-.563H6.023z"
        fill={color}
      />
    </svg>
  );
};

CardStackBold16.category = 'Interface General';

export default CardStackBold16;
