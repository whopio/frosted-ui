import '@whop/frosted-ui/styles.css';
import * as React from 'react';
import './globals.css';

export const metadata = {
  title: 'Frosted UI playground',
  description: 'A playground of Frosted UI components',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
