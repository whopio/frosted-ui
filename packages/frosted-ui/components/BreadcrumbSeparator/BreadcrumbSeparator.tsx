'use client';

import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Icon } from '../Icon';

export const BreadcrumbSeparator = () => (
  <Icon
    icon={faChevronRight}
    fontawesomeSize="sm"
    className="text-whop-gray h-2.5 !w-2.5"
  />
);
