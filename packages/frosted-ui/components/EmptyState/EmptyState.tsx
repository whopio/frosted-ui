import { faStar } from '@fortawesome/free-solid-svg-icons';
import { cn } from '../../lib/classnames';
import { IconDefinition } from '../../lib/icon-types';
import { Size } from '../../lib/shared-component-types';
import { Button, ButtonProps } from '../Button';
import { Icon } from '../Icon';

export type EmptyStateSize = Extract<Size, 'sm' | 'lg'>;
export const EmptyStateSizes: { [key: string]: EmptyStateSize } = {
  Small: 'sm',
  Large: 'lg',
};

export interface EmptyStateProps {
  icon?: IconDefinition;
  title?: string;
  description?: string;
  size?: EmptyStateSize;
  secondaryButton?: ButtonProps;
  primaryButton?: ButtonProps;
  showBorder?: boolean;
}

export const EmptyState = ({
  icon = faStar,
  title = 'Empty',
  description = 'No data to display.',
  size = 'sm',
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
        <div
          className={cn(
            'border-whop-stroke-dark bg-whop-background mx-auto flex animate-pulse items-center justify-center border drop-shadow-lg',
            {
              'h-12 w-12 rounded-2xl': size === 'sm',
              'h-20 w-20 rounded-[20px]': size === 'lg',
            },
          )}
        >
          <Icon
            icon={icon}
            className={cn('text-whop-gray', {
              'h-6 w-6': size === 'sm',
              'h-10 w-10 text-[40px]': size === 'lg',
            })}
          />
        </div>
        <div>
          <p
            className={cn('text-whop-off-black', {
              'text-header4': size === 'sm',
              'text-header3': size === 'lg',
            })}
          >
            {title}
          </p>
          <p
            className={cn('text-whop-dark-gray mt-1', {
              'text-paragraph3': size === 'sm',
              'text-paragraph2': size === 'lg',
            })}
          >
            {description}
          </p>
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
