import { Tab } from '@headlessui/react';
import { PropsWithChildren } from 'react';

export const PillTabPanelGroup = ({ children }: PropsWithChildren) => {
  return <Tab.Panels>{children}</Tab.Panels>;
};
