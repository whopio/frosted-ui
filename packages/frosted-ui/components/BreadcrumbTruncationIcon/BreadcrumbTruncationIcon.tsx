'use client';

import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { Icon } from '../Icon';

export const BreadcrumbTruncationIcon = () => (
  <Icon
    icon={faEllipsis}
    fontawesomeSize="sm"
    className="text-whop-gray mx-1 h-2.5 !w-2.5"
  />
);
