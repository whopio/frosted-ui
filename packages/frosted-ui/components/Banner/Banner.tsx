'use client';
import { faInfoCircle, faXmark } from '@fortawesome/free-solid-svg-icons';
import * as React from 'react';
import { useCallback, useState } from 'react';
import { cn } from '../../lib/classnames';
import { IconDefinition } from '../../lib/icon-types';
import { ColorScheme } from '../../lib/shared-component-types';
import { Button } from '../Button';
import { Icon } from '../Icon';
import { IconButton } from '../IconButton';

export type BannerColorScheme = Extract<
  ColorScheme,
  'purple' | 'success-green' | 'warning-yellow' | 'error-red'
>;
export const BannerColorSchemes: { [key: string]: BannerColorScheme } = {
  Purple: 'purple',
  'Success Green': 'success-green',
  'Warning Yellow': 'warning-yellow',
  'Error Red': 'error-red',
};

export const Banner = ({
  showIcon = true,
  icon = faInfoCircle,
  title,
  ctaText = 'Learn more',
  colorScheme = 'purple',
  onClick,
  allowDismiss = false,
}: {
  showIcon?: boolean;
  icon?: IconDefinition;
  title: string;
  ctaText?: string;
  colorScheme?: BannerColorScheme;
  onClick?: React.MouseEventHandler<HTMLDivElement> | undefined;
  allowDismiss?: boolean;
}) => {
  const [show, setShow] = useState(true);

  const handleDismiss = useCallback(() => setShow(false), []);

  return (
    <span className="relative">
      <div
        className={cn(
          'flex h-12 w-full cursor-pointer items-center justify-center gap-2',
          {
            'bg-whop-field-highlight': colorScheme === 'purple',
            'bg-whop-success-green': colorScheme === 'success-green',
            'bg-whop-warning-yellow': colorScheme === 'warning-yellow',
            'bg-whop-error-red': colorScheme === 'error-red',
          },
          { hidden: !show },
        )}
        onClick={onClick}
      >
        {showIcon && <Icon icon={icon} className="text-white" />}
        <p className="text-subtitle2 text-white">{title}</p>
        <Button
          colorScheme="black"
          variant="elevated"
          className="hidden !bg-white !text-black sm:block"
          size="xs"
        >
          {ctaText}
        </Button>
      </div>

      {allowDismiss && (
        <IconButton
          colorScheme="white"
          variant="blank"
          size="xs"
          icon={faXmark}
          className="absolute right-3 top-3 !text-white"
          onClick={handleDismiss}
        />
      )}
    </span>
  );
};
