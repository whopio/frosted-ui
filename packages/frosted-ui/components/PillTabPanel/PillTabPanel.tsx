import { Tab } from '@headlessui/react';
import { PropsWithChildren } from 'react';

export const PillTabPanel = ({ children }: PropsWithChildren) => {
  return <Tab.Panel className="focus:outline-none">{children}</Tab.Panel>;
};
