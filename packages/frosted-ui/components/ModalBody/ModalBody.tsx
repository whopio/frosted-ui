'use client';

import React, { ReactNode } from 'react';

export type ModalBodyProps = {
  children: ReactNode;
};

export const ModalBody = ({ children }: ModalBodyProps) => (
  <div className="overflow-y-auto px-6">{children}</div>
);

ModalBody.displayName = 'ModalBody';
