'use client';

import { useCallback } from 'react';
import { cn } from '../../lib/classnames';
import { Button, ButtonProps } from '../Button';
import { useModalContext } from '../ModalContext';

export type ModalDefaultFooterProps = {
  cancelButton?: ButtonProps;
  primaryButton?: ButtonProps;
};
export const ModalDefaultFooter = ({
  primaryButton,
  cancelButton,
}: ModalDefaultFooterProps) => {
  const { onClose } = useModalContext();

  const handleClose = useCallback(() => onClose(false), [onClose]);

  return (
    <div className="flex justify-end gap-2 p-6 max-[399px]:flex-col-reverse max-[399px]:gap-2.5">
      <Button
        variant="outline"
        colorScheme="black"
        onClick={handleClose}
        className={cn('max-[399px]:w-full', cancelButton?.className)}
        {...cancelButton}
      >
        {cancelButton?.children || 'Cancel'}
      </Button>

      <Button
        colorScheme="brand"
        className={cn('max-[399px]:w-full', primaryButton?.className)}
        {...primaryButton}
      >
        {primaryButton?.children || 'Confirm'}
      </Button>
    </div>
  );
};

ModalDefaultFooter.displayName = 'ModalDefaultFooter';
