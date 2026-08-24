import * as React from 'react';
import { IconProps } from './types';

export const RewardDiamond12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="13"
      height="12"
      viewBox="0 0 13 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="RewardDiamond12"
      {...props}
    >
      <path
        d="M8.452.25c.616 0 1.186.323 1.502.852l1.837 3.07c.388.65.315 1.477-.182 2.048l-4.27 4.906c-.697.801-1.942.801-2.64 0L.43 6.22c-.496-.571-.57-1.397-.18-2.047l1.836-3.071C2.401.574 2.972.25 3.587.25h4.865zm-4.865 1.5c-.088 0-.17.047-.215.122l-1.837 3.07c-.055.093-.044.212.027.293l4.27 4.906c.099.114.276.114.376 0l4.27-4.906c.07-.081.081-.2.026-.293l-1.837-3.07c-.045-.075-.127-.122-.215-.122H3.587zm1.915 1.583c.086-.566.902-.566.988 0l.095.618c.066.432.405.77.837.837l.618.095c.566.086.566.902 0 .988l-.618.095c-.432.066-.77.405-.837.837l-.095.618c-.086.566-.901.566-.988 0l-.095-.618c-.066-.432-.405-.771-.837-.837l-.618-.095c-.566-.086-.566-.902 0-.988l.618-.095c.432-.066.771-.405.837-.837l.095-.618z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

RewardDiamond12.category = 'Interface General';

export default RewardDiamond12;
