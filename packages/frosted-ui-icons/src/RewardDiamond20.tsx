import * as React from 'react';
import { IconProps } from './types';

export const RewardDiamond20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="RewardDiamond20"
      {...props}
    >
      <path
        d="M12.987 2.095c.836 0 1.626.38 2.148 1.032l3.262 4.078c.85 1.062.795 2.584-.127 3.583l-6.25 6.773c-1.09 1.179-2.953 1.179-4.042 0l-6.25-6.773C.804 9.79.75 8.267 1.6 7.205l3.262-4.078c.522-.652 1.312-1.032 2.148-1.032h5.976zm-5.976 1.5c-.38 0-.74.172-.977.468l-3.262 4.08c-.386.482-.361 1.173.058 1.628l6.251 6.772c.495.536 1.342.536 1.837 0l6.25-6.772c.42-.454.444-1.146.059-1.628l-3.263-4.08c-.237-.296-.597-.468-.977-.468H7.011zm2.506 2.183c.138-.485.826-.485.963 0l.533 1.88c.047.167.177.298.344.345l1.88.532c.484.137.484.825 0 .962l-1.88.532c-.167.048-.297.178-.344.345l-.533 1.88c-.137.485-.825.485-.963 0l-.53-1.88c-.048-.167-.18-.297-.346-.345l-1.88-.532c-.484-.137-.484-.825 0-.962l1.88-.532c.167-.047.298-.178.345-.345l.531-1.88z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

RewardDiamond20.category = 'Interface General';

export default RewardDiamond20;
