import React from 'react';
import {
  Typography as T,
  typographyClassNames,
} from '../src/components/Typography/Typography';
import { fontSize } from '../src/lib/font-sizes';

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

const Typography = () => {
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
            const styleSupported = typographyClassNames[key];
            if (styleSupported) {
              const [fontSize, { fontWeight, lineHeight, letterSpacing }] =
                value;
              const className = 'text-' + key;
              return (
                <tr key={key}>
                  <Td>
                    <T
                      as="span"
                      variant={key as keyof typeof typographyClassNames}
                    >
                      {key}
                    </T>
                  </Td>
                  <Td>{className}</Td>
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
};

export default Typography;
