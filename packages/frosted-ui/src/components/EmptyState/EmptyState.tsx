import { faStar } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { cn } from '../../lib/classnames';
import { IconDefinition } from '../../lib/icon-types';
import { Button, ButtonProps } from '../Button';
import { Icon } from '../Icon';
import { Text } from '../Text';

export interface EmptyStateProps {
  icon?: IconDefinition;
  title?: string;
  description?: string;
  secondaryButton?: ButtonProps;
  primaryButton?: ButtonProps;
  showBorder?: boolean;
}

export const EmptyState = ({
  icon = faStar,
  title = 'Empty',
  description = 'No data to display.',
  secondaryButton,
  primaryButton,
  showBorder = true,
}: EmptyStateProps) => {
  return (
    <div
      className={cn(
        'border-whop-stroke-dark bg-whop-background w-full rounded-[10px] px-10 py-6',
        { border: showBorder },
      )}
    >
      <div className="mx-auto flex max-w-[400px] flex-col gap-6 text-center">
        <div className="border-whop-stroke-dark bg-whop-background mx-auto flex animate-pulse items-center justify-center border drop-shadow-lg h-12 w-12 rounded-2xl">
          <Icon icon={icon} className={'text-whop-gray h-6 w-6'} />
        </div>
        <div>
          <Text as="p" variant="h3" className="text-whop-off-black">
            {title}
          </Text>
          <Text as="p" variant="body2" className="text-whop-dark-gray mt-1">
            {description}
          </Text>
        </div>
        <div className="mx-auto flex w-full flex-col-reverse gap-2 sm:flex-row sm:justify-center">
          {secondaryButton && (
            <Button
              variant="outline"
              colorScheme="black"
              className="w-full sm:w-auto"
              {...secondaryButton}
            />
          )}
          {primaryButton && (
            <Button className="w-full sm:w-auto" {...primaryButton} />
          )}
        </div>
      </div>
    </div>
  );
};
