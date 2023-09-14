'use client';

import React, { ReactNode } from 'react';

export type ModalBodyProps = {
  children: ReactNode;
};

export const ModalBody = ({ children }: ModalBodyProps) => (
  <div className="px-6">{children}</div>
);

ModalBody.displayName = 'ModalBody';
