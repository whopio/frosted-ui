import * as React from 'react';
import { PictogramProps, PictogramVariant } from './types';

export type BarChartPictogramProps = PictogramProps;

const FILLS: Record<PictogramVariant, Record<number, string>> = {
  light: { '7': '#FA4616', '8': '#E7552F' },
  dark: { '7': '#FA4616', '8': '#E7552F' },
  orange: { '7': '#6196C1', '8': '#639DCC' },
  auto: { '7': 'light-dark(#FA4616, #FA4616)', '8': 'light-dark(#E7552F, #E7552F)' },
};

export const BarChartPictogram = ({ variant = 'auto', ...props }: BarChartPictogramProps) => {
  const f = FILLS[variant];
  return (
    <svg
      width="240"
      height="240"
      viewBox="0 0 240 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-pictogram="true"
      {...props}
    >
      <path d="M52.1914 173.335L105.149 202.645L192.299 154.486L138.174 127.9L52.1914 173.335Z" fill="#1E1E1E" />
      <path d="M137.518 47.1855V148.736L163.279 163.843L163.054 61.0496L137.518 47.1855Z" fill="#C1FA81" />
      <path d="M155.447 38.5295L137.518 47.1835L163.054 61.0476L180.4 51.6567L155.447 38.5295Z" fill="#BDED88" />
      <path d="M163.279 163.843L180.4 155.774V51.6577L163.055 61.0487L163.279 163.843Z" fill="#222" />
      <path d="M101.428 92.6648V163.28L126.127 177.769L125.92 105.955L101.428 92.6648Z" fill="#354B98" />
      <path d="M118.622 84.3647L101.428 92.6641L125.92 105.954L142.547 96.9517L118.622 84.3647Z" fill="#405AB4" />
      <path d="M126.128 177.767L142.547 170.03V96.9507L125.92 105.953L126.128 177.767Z" fill="#222" />
      <path d="M65.2217 127.127V172.985L89.9212 187.473L89.7135 140.417L65.2217 127.127Z" style={{ fill: f[7] }} />
      <path
        d="M82.416 118.827L65.2217 127.126L89.7135 140.416L106.341 131.414L82.416 118.827Z"
        style={{ fill: f[8] }}
      />
      <path d="M89.9206 187.473L106.34 179.737V131.415L89.7129 140.417L89.9206 187.473Z" fill="#222" />
      <path d="M52.1914 173.333V191.997L105.43 221.211L105.149 202.644L52.1914 173.333Z" fill="#B6B5B0" />
      <path d="M192.3 154.485L105.15 202.644L105.431 221.213L192.3 172.632V154.485Z" fill="#3C3C3C" />
    </svg>
  );
};

BarChartPictogram.category = 'Pictograms';

export default BarChartPictogram;
