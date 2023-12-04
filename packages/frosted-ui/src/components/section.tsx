import classNames from 'classnames';
import * as React from 'react';
import {
  extractLayoutProps,
  extractMarginProps,
  withBreakpoints,
  withLayoutProps,
  withMarginProps,
} from '../helpers';
import { sectionPropDefs } from './section.props';

import type { GetPropDefTypes, LayoutProps, MarginProps } from '../helpers';

type SectionElement = React.ElementRef<'div'>;
type SectionOwnProps = GetPropDefTypes<typeof sectionPropDefs>;
interface SectionProps
  extends React.ComponentPropsWithoutRef<'div'>,
    MarginProps,
    LayoutProps,
    SectionOwnProps {}
const Section = React.forwardRef<SectionElement, SectionProps>(
  (props, forwardedRef) => {
    const { rest: marginRest, ...marginProps } = extractMarginProps(props);
    const { rest: layoutRest, ...layoutProps } = extractLayoutProps(marginRest);
    const {
      className,
      size = sectionPropDefs.size.default,
      display = sectionPropDefs.display.default,
      ...sectionProps
    } = layoutRest;
    return (
      <section
        {...sectionProps}
        ref={forwardedRef}
        className={classNames(
          'fui-Section',
          className,
          withBreakpoints(size, 'fui-r-size'),
          withBreakpoints(display, 'fui-r-display'),
          withLayoutProps(layoutProps),
          withMarginProps(marginProps),
        )}
      />
    );
  },
);
Section.displayName = 'Section';

export { Section };
export type { SectionProps };
