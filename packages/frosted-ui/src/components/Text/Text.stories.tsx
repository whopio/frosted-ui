import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { fontSize } from '../../lib/font-sizes';
import { Text, typographyClassNames } from './Text';

const meta: Meta<typeof Text> = {
  title: 'Design System/Text',
  component: Text,
  args: {
    children: 'Hello world!',
    variant: 'h1',
    as: 'div',
  },
};
export default meta;
type Story = StoryObj<typeof Text>;

export const Default: Story = {};

const remToPx = (rem: string) => parseFloat(rem) * 16;

const Td = (
  props: React.DetailedHTMLProps<
    React.TdHTMLAttributes<HTMLTableDataCellElement>,
    HTMLTableDataCellElement
  >,
) => <td {...props} className="p-2" />;
const Th = (
  props: React.DetailedHTMLProps<
    React.ThHTMLAttributes<HTMLTableDataCellElement>,
    HTMLTableDataCellElement
  >,
) => <th {...props} className="p-2 text-left" />;

export const Variants: Story = {
  argTypes: {
    variant: {
      control: false,
    },
  },
  render: () => {
    return (
      <div className="sb-unstyled">
        <table>
          <thead className="bg-whop-gray text-whop-fixed-white">
            <tr>
              <Th>variant</Th>
              <Th>className</Th>
              <Th>font-size</Th>
              <Th>font-weight</Th>
              <Th>line-height</Th>
              <Th>letter-spacing</Th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(fontSize).map(([key, value]) => {
              const typographyClassName = typographyClassNames[key];
              if (typographyClassName) {
                const [fontSize, { fontWeight, lineHeight, letterSpacing }] =
                  value;
                return (
                  <tr key={key}>
                    <Td>
                      <Text
                        as="span"
                        variant={key as keyof typeof typographyClassNames}
                      >
                        {key}
                      </Text>
                    </Td>
                    <Td>{typographyClassName}</Td>
                    <Td>{Math.floor(remToPx(fontSize))}px</Td>
                    <Td>{fontWeight}</Td>
                    <Td>{Math.floor(remToPx(lineHeight))}px</Td>
                    <Td>{letterSpacing}</Td>
                  </tr>
                );
              } else {
                throw new Error(`No style example for "${key}" typography`);
              }
            })}
          </tbody>
        </table>
      </div>
    );
  },
};
