import * as React from 'react';

import { countryFlagPropDefs } from './country-flag.props';

import classNames from 'classnames';
import type { GetPropDefTypes } from '../../helpers';

const VERSION = '7.5.0';

type CountryFlagOwnProps = GetPropDefTypes<typeof countryFlagPropDefs>;
interface CountryFlagProps extends Omit<React.ComponentProps<'img'>, 'src'>, CountryFlagOwnProps {
  // TODO: See if we can automate making prop defs with `required: true` non nullable
  countryCode: NonNullable<CountryFlagOwnProps['countryCode']>;
}

const CountryFlag = (props: CountryFlagProps) => {
  const { countryCode, alt = '', className, size = '1', ...countryFlagProps } = props;

  const code = countryCode.toLowerCase();

  return (
    <img
      src={`https://cdn.jsdelivr.net/npm/flag-icons@${VERSION}/flags/4x3/${code}.svg`}
      alt={alt}
      className={classNames('fui-CountryFlag', className, `fui-r-size-${size}`)}
      {...countryFlagProps}
    />
  );
};
CountryFlag.displayName = 'CountryFlag';

export { CountryFlag };
export type { CountryFlagProps };
