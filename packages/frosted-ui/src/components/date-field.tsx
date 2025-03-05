'use client';

import classNames from 'classnames';
import React from 'react';
import type { DateFieldProps as AriaDateFieldProps, DateValue as AriaDateValue } from 'react-aria-components';
import {
  DateField as AriaDateField,
  DateInput as AriaDateInput,
  DateSegment as AriaDateSegment,
} from 'react-aria-components';
import { MarginProps, extractMarginProps, withBreakpoints, withMarginProps, type GetPropDefTypes } from '../helpers';
import { MappedDateValue } from './calendar';
import { dateFieldPropDefs } from './date-field.props';

type DateFieldFUIProps = GetPropDefTypes<typeof dateFieldPropDefs>;
interface DateFieldProps<T extends AriaDateValue> extends AriaDateFieldProps<T>, DateFieldFUIProps, MarginProps {
  className?: string;
  // TODO: React Aria types for onChange are incorrect - missing UNDEFINED type
  onChange?: (value: MappedDateValue<T> | undefined) => void;
}

function DateField<T extends AriaDateValue>(props: DateFieldProps<T>) {
  const { rest: marginRest, ...marginProps } = extractMarginProps(props);
  const { className, ...otherProps } = marginRest;

  const {
    color = dateFieldPropDefs.color.default,
    size = dateFieldPropDefs.size.default,
    ...dateFieldProps
  } = otherProps;

  return (
    <AriaDateField
      data-accent-color={color}
      className={classNames(
        'fui-DateFieldRoot',
        className,
        withBreakpoints(size, 'fui-r-size'),
        withMarginProps(marginProps),
      )}
      {...dateFieldProps}
    >
      <AriaDateInput className="fui-DateFieldInput">
        {(segment) => (
          <AriaDateSegment
            segment={segment}
            className="fui-DateFieldSegment"
            style={{
              minWidth: segment.maxValue != null ? String(segment.maxValue).length + 'ch' : '',
            }}
          />
        )}
      </AriaDateInput>
    </AriaDateField>
  );
}

export { DateField };
export type { DateFieldProps };
