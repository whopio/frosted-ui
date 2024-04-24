import classNames from 'classnames';
import * as React from 'react';

import {
  dataListItemPropDefs,
  dataListLabelPropDefs,
  dataListRootPropDefs,
} from './data-list.props';
import { Text } from './text';

import {
  extractMarginProps,
  withBreakpoints,
  withMarginProps,
  type GetPropDefTypes,
  type MarginProps,
  type PropsWithoutRefOrColor,
} from '../helpers';

type DataListRootElement = HTMLDListElement;
type DataListRootOwnProps = GetPropDefTypes<typeof dataListRootPropDefs>;
interface DataListRootProps
  extends PropsWithoutRefOrColor<'dl'>,
    MarginProps,
    DataListRootOwnProps {}
const DataListRoot = React.forwardRef<DataListRootElement, DataListRootProps>(
  (props, forwardedRef) => {
    const { rest: marginRest, ...marginProps } = extractMarginProps(props);

    const {
      className,
      size = dataListRootPropDefs.size.default,
      trim = dataListRootPropDefs.trim.default,
      orientation = dataListRootPropDefs.orientation.default,
      ...dataListProps
    } = marginRest;

    return (
      <Text asChild>
        <dl
          {...dataListProps}
          ref={forwardedRef}
          className={classNames(
            'fui-DataListRoot',
            withBreakpoints(size, 'fui-r-size'),
            withBreakpoints(trim, 'fui-r-lt'),
            withBreakpoints(orientation, 'fui-r-orientation'),
            withMarginProps(marginProps),
            className,
          )}
        />
      </Text>
    );
  },
);
DataListRoot.displayName = 'DataList.Root';

type DataListItemElement = HTMLDivElement;
type DataListItemOwnProps = GetPropDefTypes<typeof dataListItemPropDefs>;
interface DataListItemProps
  extends PropsWithoutRefOrColor<'div'>,
    DataListItemOwnProps {}
const DataListItem = React.forwardRef<DataListItemElement, DataListItemProps>(
  (props, forwardedRef) => {
    const {
      className,
      align = dataListItemPropDefs.align.default,
      ...dataListItemProps
    } = props;

    return (
      <div
        {...dataListItemProps}
        ref={forwardedRef}
        className={classNames(
          'fui-DataListItem',
          withBreakpoints(align, 'fui-r-ai'),
          className,
        )}
      />
    );
  },
);
DataListItem.displayName = 'DataList.Item';

type DataListLabelElement = React.ElementRef<'dt'>;
type DataListLabelOwnProps = GetPropDefTypes<typeof dataListLabelPropDefs>;
interface DataListLabelProps
  extends PropsWithoutRefOrColor<'dt'>,
    DataListLabelOwnProps {}
const DataListLabel = React.forwardRef<
  DataListLabelElement,
  DataListLabelProps
>((props, forwardedRef) => {
  const {
    className,
    color = dataListLabelPropDefs.color.default,
    highContrast = dataListLabelPropDefs.highContrast.default,
    ...dataListLabelProps
  } = props;

  return (
    <dt
      {...dataListLabelProps}
      data-accent-color={color}
      ref={forwardedRef}
      className={classNames(
        'fui-DataListLabel',
        { 'fui-high-contrast': highContrast },
        className,
      )}
    />
  );
});
DataListLabel.displayName = 'DataList.Label';

type DataListValueElement = React.ElementRef<'dd'>;
interface DataListValueProps extends PropsWithoutRefOrColor<'dd'> {}
const DataListValue = React.forwardRef<
  DataListValueElement,
  DataListValueProps
>(({ children, className, ...props }, forwardedRef) => (
  <dd
    {...props}
    ref={forwardedRef}
    className={classNames(className, 'fui-DataListValue')}
  >
    {children}
  </dd>
));
DataListValue.displayName = 'DataList.Value';

const DataList = Object.assign(
  {},
  {
    Root: DataListRoot,
    Item: DataListItem,
    Label: DataListLabel,
    Value: DataListValue,
  },
);

export { DataList, DataListItem, DataListLabel, DataListRoot, DataListValue };
export type {
  DataListItemProps,
  DataListLabelProps,
  DataListRootProps,
  DataListValueProps,
};
