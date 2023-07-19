'use client';

import { Dialog, Transition } from '@headlessui/react';
import { Fragment, ReactNode } from 'react';
import { cn } from '../../lib/classnames';
import { ModalBody, ModalBodyProps } from '../ModalBody';
import { ModalContext } from '../ModalContext';
import {
  ModalDefaultFooter,
  ModalDefaultFooterProps,
} from '../ModalDefaultFooter';
import { ModalHeader, ModalHeaderProps } from '../ModalHeader';

export type ModalProps = {
  header?: ModalHeaderProps;
  body?: ModalBodyProps;
  footer?: ModalDefaultFooterProps;
} & ModalRootProps;

export type ModalRootProps = {
  open: boolean;
  onClose: (open: boolean) => void;
  children?: ReactNode;
  className?: string;
  fullscreen?: boolean;
  transitionType?: 'scale' | 'from-bottom';
};

export const Modal = ({
  children,
  header,
  body,
  footer,
  ...rest
}: ModalProps) => {
  return (
    <ModalRoot {...rest}>
      {children ? (
        children
      ) : (
        <>
          {header && <ModalHeader {...header} />}
          {body && <ModalBody>{body?.children}</ModalBody>}
          {footer && <ModalDefaultFooter {...footer} />}
        </>
      )}
    </ModalRoot>
  );
};

const ModalRoot = ({
  open,
  onClose,
  children,
  className,
  fullscreen = false,
  transitionType = 'scale',
}: ModalRootProps) => {
  return (
    <ModalContext.Provider value={{ onClose }}>
      <Transition.Root appear show={open} as={Fragment}>
        <Dialog as="div" onClose={onClose} className="relative z-[110]">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            {/* The backdrop, rendered as a fixed sibling to the panel container */}
            <div
              className="bg-whop-black biz-dark-1:bg-whop-fixed-black biz-dark-2:bg-whop-fixed-black biz-dark-1:bg-opacity-60 biz-dark-2:bg-opacity-60 fixed inset-0 bg-opacity-40 transition-opacity"
              aria-hidden="true"
            />
          </Transition.Child>

          {/* Full-screen container */}
          <div className="fixed inset-0">
            {/* Container to center the panel */}
            <div
              className={cn(
                'pointer-events-none flex min-h-full items-center justify-center text-center',
                { 'min-w-full': fullscreen },
              )}
            >
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-200"
                enterFrom={cn({
                  'translate-y-3/4': transitionType === 'from-bottom',
                  'opacity-0 scale-95': transitionType === 'scale',
                })}
                enterTo={cn({
                  'translate-y-0': transitionType === 'from-bottom',
                  'opacity-100 scale-100': transitionType === 'scale',
                })}
                leave="ease-in duration-200"
                leaveFrom={cn({
                  'translate-y-0': transitionType === 'from-bottom',
                  'opacity-100 scale-100': transitionType === 'scale',
                })}
                leaveTo={cn({
                  'translate-y-3/4': transitionType === 'from-bottom',
                  'opacity-0 scale-95': transitionType === 'scale',
                })}
              >
                <Dialog.Panel
                  className={cn(
                    'bg-whop-background pointer-events-auto mx-4 w-full max-w-lg transform overflow-y-auto rounded-lg text-left align-middle shadow-xl transition-all',
                    {
                      'fixed bottom-0 top-0 mx-0 flex max-w-none flex-col rounded-none pb-8':
                        fullscreen,
                    },
                    className,
                  )}
                >
                  {children}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </ModalContext.Provider>
  );
};

Modal.displayName = 'Modal';
