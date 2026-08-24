import * as React from 'react';
import { IconProps } from './types';

export const MessageReviewFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 13 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="MessageReviewFilled12"
      {...props}
    >
      <path
        d="M6.508 0C10.093 0 13 2.907 13 6.492s-2.907 6.492-6.492 6.492c-.604 0-1.191-.082-1.748-.238-.633-.176-1.127-.257-1.556-.15-.403.1-.793.216-1.146.33-.626.202-1.22-.04-1.583-.404-.363-.363-.604-.957-.401-1.581l.17-.555c.055-.192.109-.391.158-.593.106-.43.026-.924-.15-1.556C.098 7.68.016 7.095.016 6.492.016 2.907 2.922 0 6.508 0zm.189 3.913c-.076-.168-.303-.168-.38 0L5.66 5.354c-.03.067-.092.114-.162.124l-1.512.209c-.176.024-.246.251-.118.38l1.106 1.098c.051.052.075.127.062.2l-.278 1.57c-.032.183.152.323.307.235l1.341-.762c.063-.036.139-.036.201 0l1.342.762c.156.088.34-.052.308-.235l-.278-1.57c-.013-.073.01-.148.062-.2l1.105-1.099c.129-.128.059-.355-.117-.38l-1.512-.208c-.07-.01-.132-.056-.163-.124l-.657-1.441z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

MessageReviewFilled12.category = 'Communication';

export default MessageReviewFilled12;
