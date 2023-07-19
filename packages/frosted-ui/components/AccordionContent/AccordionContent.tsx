import { Content } from '@radix-ui/react-accordion';
import React from 'react';
import { cn } from '../../lib/classnames';

export const AccordionContent = React.forwardRef<
  React.ElementRef<typeof Content>,
  React.ComponentPropsWithoutRef<typeof Content> & {
    open?: boolean;
  }
>(({ className, children, ...props }, ref) => {
  return (
    <Content
      ref={ref}
      className={cn(
        'data-[state=open]:animate-slide-from-top data-[state=closed]:animate-slide-to-top overflow-hidden text-sm',
        className,
      )}
      {...props}
    >
      <div className="pb-4 pt-0">{children}</div>
    </Content>
  );
});
AccordionContent.displayName = Content.displayName;
