import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from '@fortawesome/react-fontawesome';
import React from 'react';
import { IconDefinition } from '../../lib/icon-types';

export interface IconProps {
  icon: IconDefinition;
  className?: string;
  fontawesomeSize?: FontAwesomeIconProps['size'];
}

export const Icon = ({ icon, fontawesomeSize, className }: IconProps) => {
  return (
    <FontAwesomeIcon
      icon={icon}
      size={fontawesomeSize}
      className={className}
      fixedWidth
    />
  );
};
