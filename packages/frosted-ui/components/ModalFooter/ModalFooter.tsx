'use client';

import { ReactNode } from 'react';
import { cn } from '../../lib/classnames';

export type ModalFooterProps = {
  children: ReactNode;
  className?: string;
};

export const ModalFooter = ({ children, className }: ModalFooterProps) => {
  return <div className={cn('p-6', className)}>{children}</div>;
};

ModalFooter.displayName = 'ModalFooter';
