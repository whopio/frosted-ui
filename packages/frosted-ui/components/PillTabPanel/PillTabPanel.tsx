'use client';

import { Tab } from '@headlessui/react';
import React, { PropsWithChildren } from 'react';

export const PillTabPanel = ({ children }: PropsWithChildren) => {
  return <Tab.Panel className="focus:outline-none">{children}</Tab.Panel>;
};
