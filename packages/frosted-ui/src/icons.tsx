import * as React from 'react';

interface IconProps extends React.ComponentPropsWithoutRef<'svg'> {
  children?: never;
  color?: string;
}

const ThickCheckIcon = (props: IconProps) => {
  const { color = 'currentColor', ...restProps } = props;
  return (
    <svg width="9" height="9" viewBox="0 0 9 9" fill={color} xmlns="http://www.w3.org/2000/svg" {...restProps}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.53547 0.62293C8.88226 0.849446 8.97976 1.3142 8.75325 1.66099L4.5083 8.1599C4.38833 8.34356 4.19397 8.4655 3.9764 8.49358C3.75883 8.52167 3.53987 8.45309 3.3772 8.30591L0.616113 5.80777C0.308959 5.52987 0.285246 5.05559 0.563148 4.74844C0.84105 4.44128 1.31533 4.41757 1.62249 4.69547L3.73256 6.60459L7.49741 0.840706C7.72393 0.493916 8.18868 0.396414 8.53547 0.62293Z"
      />
    </svg>
  );
};
ThickCheckIcon.displayName = 'ThickCheckIcon';

const ThickChevronRightIcon = (props: IconProps) => {
  const { color = 'currentColor', ...restProps } = props;
  return (
    <svg width="9" height="9" viewBox="0 0 9 9" fill={color} xmlns="http://www.w3.org/2000/svg" {...restProps}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.23826 0.201711C3.54108 -0.0809141 4.01567 -0.0645489 4.29829 0.238264L7.79829 3.98826C8.06724 4.27642 8.06724 4.72359 7.79829 5.01174L4.29829 8.76174C4.01567 9.06455 3.54108 9.08092 3.23826 8.79829C2.93545 8.51567 2.91909 8.04108 3.20171 7.73826L6.22409 4.5L3.20171 1.26174C2.91909 0.958928 2.93545 0.484337 3.23826 0.201711Z"
      />
    </svg>
  );
};
ThickChevronRightIcon.displayName = 'ThickChevronRightIcon';

const ChevronRightIcon = (props: IconProps) => {
  const { color = 'currentColor', ...restProps } = props;
  return (
    <svg width="6" height="10" viewBox="0 0 6 10" xmlns="http://www.w3.org/2000/svg" fill={color} {...restProps}>
      <path d="M1.25 9.625C1.07422 9.625 0.917969 9.56641 0.800781 9.44922C0.546875 9.21484 0.546875 8.80469 0.800781 8.57031L4.10156 5.25L0.800781 1.94922C0.546875 1.71484 0.546875 1.30469 0.800781 1.07031C1.03516 0.816406 1.44531 0.816406 1.67969 1.07031L5.42969 4.82031C5.68359 5.05469 5.68359 5.46484 5.42969 5.69922L1.67969 9.44922C1.5625 9.56641 1.40625 9.625 1.25 9.625Z" />
    </svg>
  );
};
ChevronRightIcon.displayName = 'ChevronRightIcon';

const TriangleDownIcon = (props: IconProps) => {
  const { color = 'currentColor', ...restProps } = props;
  return (
    <svg width="6" height="7" viewBox="0 0 6 7" fill={color} xmlns="http://www.w3.org/2000/svg" {...restProps}>
      <g>
        <path
          d="M2.40796 5.71173L0.097794 2.74247C-0.137283 2.44033 0.0780299 2 0.460851 2H5.53896C5.92178 2 6.13709 2.44033 5.90201 2.74247L3.59185 5.71173C3.29158 6.09767 2.70823 6.09767 2.40796 5.71173Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
};
TriangleDownIcon.displayName = 'TriangleDownIcon';

const InfoCircledIcon = (props: IconProps) => {
  const { color = 'currentColor', ...restProps } = props;
  return (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" {...restProps}>
      <path
        d="M7.49991 0.876892C3.84222 0.876892 0.877075 3.84204 0.877075 7.49972C0.877075 11.1574 3.84222 14.1226 7.49991 14.1226C11.1576 14.1226 14.1227 11.1574 14.1227 7.49972C14.1227 3.84204 11.1576 0.876892 7.49991 0.876892ZM1.82707 7.49972C1.82707 4.36671 4.36689 1.82689 7.49991 1.82689C10.6329 1.82689 13.1727 4.36671 13.1727 7.49972C13.1727 10.6327 10.6329 13.1726 7.49991 13.1726C4.36689 13.1726 1.82707 10.6327 1.82707 7.49972ZM8.24992 4.49999C8.24992 4.9142 7.91413 5.24999 7.49992 5.24999C7.08571 5.24999 6.74992 4.9142 6.74992 4.49999C6.74992 4.08577 7.08571 3.74999 7.49992 3.74999C7.91413 3.74999 8.24992 4.08577 8.24992 4.49999ZM6.00003 5.99999H6.50003H7.50003C7.77618 5.99999 8.00003 6.22384 8.00003 6.49999V9.99999H8.50003H9.00003V11H8.50003H7.50003H6.50003H6.00003V9.99999H6.50003H7.00003V6.99999H6.50003H6.00003V5.99999Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};
InfoCircledIcon.displayName = 'InfoCircledIcon';

function CalendarIcon({ size }: { size: '1' | '2' | '3' | '4' }): React.JSX.Element {
  switch (size) {
    case '1':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
          <path
            d="M1.25 5.75H10.75M3.75 0.75V2.75M8.25 0.75V2.75M2.5 11.25H9.5C10.1904 11.25 10.75 10.6904 10.75 10V4C10.75 3.30964 10.1904 2.75 9.5 2.75H2.5C1.80964 2.75 1.25 3.30964 1.25 4V10C1.25 10.6904 1.80964 11.25 2.5 11.25Z"
            stroke="var(--gray-a11)"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case '2':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path
            d="M1.5 7.22222H14.5M4.62 1V3.07407M11.38 1V3.07407M4.1 15H11.9C13.3359 15 14.5 13.8393 14.5 12.4074V5.66667C14.5 4.23482 13.3359 3.07407 11.9 3.07407H4.1C2.66406 3.07407 1.5 4.23482 1.5 5.66667V12.4074C1.5 13.8393 2.66406 15 4.1 15Z"
            stroke="var(--gray-a11)"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case '3':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path
            d="M1.75 7.75H18.25M6.75 1.75V3.75M13.25 1.75V3.75M4.32 18.25H15.68C17.0994 18.25 18.25 17.0994 18.25 15.68V6.32C18.25 4.90063 17.0994 3.75 15.68 3.75H4.32C2.90063 3.75 1.75 4.90063 1.75 6.32V15.68C1.75 17.0994 2.90063 18.25 4.32 18.25Z"
            stroke="var(--gray-a11)"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case '4':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path
            d="M1.75 7.75H18.25M6.75 1.75V3.75M13.25 1.75V3.75M4.32 18.25H15.68C17.0994 18.25 18.25 17.0994 18.25 15.68V6.32C18.25 4.90063 17.0994 3.75 15.68 3.75H4.32C2.90063 3.75 1.75 4.90063 1.75 6.32V15.68C1.75 17.0994 2.90063 18.25 4.32 18.25Z"
            stroke="var(--gray-a11)"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
  }
}

export { CalendarIcon, ChevronRightIcon, InfoCircledIcon, ThickCheckIcon, ThickChevronRightIcon, TriangleDownIcon };
