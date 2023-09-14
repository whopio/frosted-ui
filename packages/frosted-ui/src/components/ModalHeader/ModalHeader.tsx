'use client';

import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { Dialog } from '@headlessui/react';
import React, { ReactNode, useCallback } from 'react';
import { cn } from '../../lib/classnames';
import { IconButton } from '../IconButton';
import { useModalContext } from '../ModalContext';

export type ModalHeaderProps = {
  title: string | ReactNode;
  description?: string | ReactNode;
  closeButton?: boolean;
  centered?: boolean;
};

export const ModalHeader = ({
  title,
  description,
  closeButton = false,
  centered = false,
}: ModalHeaderProps) => {
  const { onClose } = useModalContext();

  const handleClose = useCallback(() => onClose(false), [onClose]);

  return (
    <div className="space-y-1.5 pb-6 pl-6 pr-12 pt-[18px]">
      <Dialog.Title
        as="div"
        className={cn('text-header4 text-whop-black', {
          'text-center': centered,
        })}
      >
        {title}
      </Dialog.Title>

      {closeButton && (
        <IconButton
          variant="blank"
          colorScheme="dark-gray"
          size="sm"
          icon={faXmark}
          onClick={handleClose}
          className="absolute right-[13px] top-[13px]"
        />
      )}

      {description && (
        <Dialog.Description
          as="div"
          className={cn('text-whop-dark-gray text-paragraph3', {
            'text-center': centered,
          })}
        >
          {description}
        </Dialog.Description>
      )}
    </div>
  );
};

ModalHeader.displayName = 'ModalHeader';
