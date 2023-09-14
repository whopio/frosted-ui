'use client';

import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { Dialog, Transition } from '@headlessui/react';
import React, { Fragment, ReactNode, useCallback } from 'react';
import { cn } from '../../lib/classnames';
import { Button, ButtonProps } from '../Button';
import { IconButton } from '../IconButton';

export interface DrawerProps {
  open: boolean;
  onClose: () => void;
  title: string;
  description?: string;
  body?: ReactNode;
  footer?: ButtonProps | ReactNode;
}

const isButtonFooter = (
  element: ButtonProps | ReactNode | undefined | null,
): element is ButtonProps =>
  !!element && typeof element === 'object' && 'onClick' in element;

export const Drawer = ({
  open,
  onClose,
  title,
  description,
  body,
  footer,
}: DrawerProps) => {
  const handleClose = useCallback(() => {
    onClose();
  }, [onClose]);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="absolute z-[100]" onClose={handleClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          {/* The backdrop, rendered as a fixed sibling to the panel container */}
          <div
            className="bg-whop-black biz-dark-1:bg-whop-fixed-black biz-dark-2:bg-whop-fixed-black biz-dark-1:bg-opacity-60 biz-dark-2:bg-opacity-60 fixed inset-0 bg-opacity-40 transition-opacity"
            aria-hidden="true"
          />
        </Transition.Child>

        {/* Full-screen scrollable container */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Container to right align the panel */}
          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full">
            <Transition.Child
              as={Fragment}
              enter="transform transition ease-out duration-300"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transform transition ease-out duration-300"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <Dialog.Panel className="pointer-events-auto w-screen max-w-[500px]">
                <div className="bg-whop-background flex h-full flex-col overflow-y-scroll shadow-xl">
                  <div className="ml-8 mr-[88px] mt-6">
                    <Dialog.Title
                      as="h2"
                      className={cn('text-header3 text-whop-black')}
                    >
                      {title}
                    </Dialog.Title>

                    <IconButton
                      variant="blank"
                      colorScheme="dark-gray"
                      size="sm"
                      icon={faXmark}
                      onClick={handleClose}
                      className="absolute right-[13px] top-[13px]"
                    />

                    {description && (
                      <Dialog.Description
                        as="p"
                        className={cn(
                          'text-whop-dark-gray text-paragraph3 mt-1.5',
                        )}
                      >
                        {description}
                      </Dialog.Description>
                    )}
                  </div>

                  <div className="mx-8 my-10">{body}</div>

                  {footer && (
                    <div className="border-whop-stroke bg-whop-background fixed bottom-0 w-full max-w-[500px] border-t px-6 pb-6 pt-4">
                      {isButtonFooter(footer) ? (
                        <Button
                          {...footer}
                          className={cn('w-full', footer.className)}
                        />
                      ) : (
                        footer
                      )}
                    </div>
                  )}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};
