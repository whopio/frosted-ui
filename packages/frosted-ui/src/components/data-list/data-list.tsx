import classNames from 'classnames';
import * as React from 'react';

import { Text } from '../text';
import { dataListItemPropDefs, dataListLabelPropDefs, dataListRootPropDefs } from './data-list.props';

import { PropsWithoutColor, type GetPropDefTypes } from '../../helpers';

type DataListRootOwnProps = GetPropDefTypes<typeof dataListRootPropDefs>;
interface DataListRootProps extends PropsWithoutColor<'dl'>, DataListRootOwnProps {}

const DataListRoot = (props: DataListRootProps) => {
  const {
    className,
    size = dataListRootPropDefs.size.default,
    trim = dataListRootPropDefs.trim.default,
    orientation = dataListRootPropDefs.orientation.default,
    ...dataListProps
  } = props;

  return (
    <Text asChild>
      <dl
        {...dataListProps}
        className={classNames(
          'fui-DataListRoot',
          `fui-r-size-${size}`,
          `fui-r-lt-${trim}`,
          `fui-r-orientation-${orientation}`,

          className,
        )}
      />
    </Text>
  );
};
DataListRoot.displayName = 'DataList.Root';

type DataListItemOwnProps = GetPropDefTypes<typeof dataListItemPropDefs>;
interface DataListItemProps extends PropsWithoutColor<'div'>, DataListItemOwnProps {}

const DataListItem = (props: DataListItemProps) => {
  const { className, align = dataListItemPropDefs.align.default, ...dataListItemProps } = props;

  return (
    <div
      {...dataListItemProps}
      className={classNames('fui-DataListItem', align ? `fui-r-ai-${align}` : undefined, className)}
    />
  );
};
DataListItem.displayName = 'DataList.Item';

type DataListLabelOwnProps = GetPropDefTypes<typeof dataListLabelPropDefs>;
interface DataListLabelProps extends PropsWithoutColor<'dt'>, DataListLabelOwnProps {}

const DataListLabel = (props: DataListLabelProps) => {
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
      className={classNames('fui-DataListLabel', { 'fui-high-contrast': highContrast }, className)}
    />
  );
};
DataListLabel.displayName = 'DataList.Label';

interface DataListValueProps extends React.ComponentProps<'dd'> {}

const DataListValue = ({ children, className, ...props }: DataListValueProps) => (
  <dd {...props} className={classNames(className, 'fui-DataListValue')}>
    {children}
  </dd>
);
DataListValue.displayName = 'DataList.Value';

export { DataListItem as Item, DataListLabel as Label, DataListRoot as Root, DataListValue as Value };
export type {
  DataListItemProps as ItemProps,
  DataListLabelProps as LabelProps,
  DataListRootProps as RootProps,
  DataListValueProps as ValueProps,
};
