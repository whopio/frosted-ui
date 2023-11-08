import React from 'react';

type ExtractPropsForTag<
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  C extends React.ElementType<any>,
  T extends string,
> = Omit<Extract<React.ComponentPropsWithoutRef<C>, { as: T }>, 'as'>;

export type { ExtractPropsForTag };
