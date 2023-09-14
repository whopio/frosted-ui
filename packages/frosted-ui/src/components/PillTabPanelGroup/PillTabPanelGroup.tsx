'use client';

import { Tab } from '@headlessui/react';
import React, { PropsWithChildren } from 'react';

export const PillTabPanelGroup = ({ children }: PropsWithChildren) => {
  return <Tab.Panels>{children}</Tab.Panels>;
};
