import * as React from 'react';
import { IconProps } from './types';

export const Pencil16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="Pencil16"
      {...props}
    >
      <path
        d="M11.573 1c.872 0 1.709.346 2.325.963l.14.139c.616.616.962 1.453.962 2.325 0 .889-.36 1.74-.998 2.36l-7.73 7.501c-.116.114-.268.186-.43.206l-4 .5c-.229.029-.459-.05-.622-.214-.164-.163-.243-.393-.214-.623l.5-4 .024-.119c.034-.116.097-.223.182-.31l7.502-7.73C9.833 1.36 10.684 1 11.574 1zm-8.61 9.592l-.35 2.794 2.794-.35 5.49-5.328-2.606-2.606-5.328 5.49zm8.61-8.092c-.483 0-.946.196-1.283.543l-.954.982 2.638 2.638.983-.953c.347-.337.543-.8.543-1.283 0-.474-.188-.93-.523-1.265l-.14-.139c-.334-.335-.79-.523-1.264-.523z"
        fill={color}
      />
    </svg>
  );
};

Pencil16.category = 'Objects';

export default Pencil16;
