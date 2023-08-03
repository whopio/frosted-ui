'use client';

import React, {
  ElementType,
  ForwardedRef,
  ImgHTMLAttributes,
  forwardRef,
  useCallback,
  useEffect,
  useState,
} from 'react';
import { cn } from '../../lib/classnames';

export type AvatarShape = 'circle' | 'square';

export type AvatarSize = 16 | 24 | 32 | 40 | 48 | 56 | 64 | 72 | 80 | 128;

const AvatarFallback = ({ size }: { size: AvatarSize }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 96 96"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M34.4375 39.4375C34.4375 36.8594 36.8984 34.75 40.0625 34.75H56.9375C59.9844 34.75 62.5625 36.8594 62.5625 39.4375V42.25C62.5625 48.4609 57.5234 53.5 51.3125 53.5H45.6875C39.4766 53.5 34.4375 48.4609 34.4375 42.25V39.4375ZM41.4688 43.6562L42.4062 46.5859C42.5234 47.0547 43.1094 47.0547 43.2266 46.5859L44.2812 43.6562L47.0938 42.7188C47.5625 42.6016 47.5625 42.0156 47.0938 41.8984L44.2812 40.8438L43.2266 38.0312C43.1094 37.5625 42.5234 37.5625 42.4062 38.0312L41.4688 40.8438L38.5391 41.8984C38.0703 42.0156 38.0703 42.6016 38.5391 42.7188L41.4688 43.6562Z"
        fill="#535961"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M96 0H0V96H96V0ZM44.75 83.5H41.9866C41.6562 83.4444 41.3273 83.3844 41 83.3199V77.875C41 76.9375 41.8203 76 42.875 76C43.8125 76 44.75 76.9375 44.75 77.875V83.5ZM37.25 76V82.3676C31.8507 80.6805 26.9979 77.7561 23.0234 73.9263C24.7725 67.7643 29.3441 62.8057 35.2578 60.5312C39.0078 63.2266 43.5781 64.75 48.5 64.75C53.3047 64.75 57.875 63.2266 61.625 60.5312C67.2977 62.713 71.8005 67.3646 73.7297 73.179C69.8617 77.1311 65.0905 80.1957 59.75 82.0388V76C59.75 74.0078 57.9922 72.25 56 72.25H41C38.8906 72.25 37.25 74.0078 37.25 76ZM54.125 76C53.0703 76 52.25 76.9375 52.25 77.875C52.25 78.9297 53.0703 79.75 54.125 79.75C55.0625 79.75 56 78.9297 56 77.875C56 76.9375 55.0625 76 54.125 76ZM29.75 49.75H31.2734C34.2031 56.4297 40.7656 61 48.5 61C56.1172 61 62.6797 56.4297 65.6094 49.75H67.25C68.1875 49.75 69.125 48.9297 69.125 47.875V36.625C69.125 35.6875 68.1875 34.75 67.25 34.75H65.6094C62.6797 28.1875 56.1172 23.5 48.5 23.5C40.7656 23.5 34.2031 28.1875 31.2734 34.75H29.75C28.6953 34.75 27.875 35.6875 27.875 36.625V47.875C27.875 48.9297 28.6953 49.75 29.75 49.75Z"
        fill="#535961"
      />
    </svg>
  );
};

type AsProp<C extends ElementType> = {
  as?: C;
};

type PropsOf<C extends ElementType> = C extends React.ComponentType<infer P>
  ? P
  : C extends keyof JSX.IntrinsicElements
  ? JSX.IntrinsicElements[C]
  : Record<string, never>;

export interface AvatarProps
  extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'width' | 'height'> {
  username?: string | null;
  shape?: AvatarShape;
  size?: AvatarSize;
  showFallback?: boolean;
  isLoading?: boolean;
}

type AvatarComponentProps<C extends ElementType> = PropsOf<C> &
  AvatarProps &
  AsProp<C>;

export const Avatar = forwardRef(function Avatar<C extends ElementType = 'img'>(
  {
    src,
    username,
    shape = 'circle',
    size = 32,
    showFallback: _showFallback = false,
    isLoading = false,
    className,
    as,
    ...props
  }: AvatarComponentProps<C>,
  ref: ForwardedRef<unknown>,
) {
  const Component: ElementType = as || 'img';

  const { onError, onLoad, alt, style, ...rest } = props;

  const imageSource =
    src ||
    `https://ui-avatars.com/api/?name=${username}&background=535961&color=fff`;
  const [showFallback, setShowFallback] = useState(_showFallback);

  useEffect(() => {
    if (!src) {
      setShowFallback(true);
    } else if (!_showFallback) {
      setShowFallback(false);
    }
  }, [src]);

  const handleLoadingComplete = useCallback((result: HTMLImageElement) => {
    onLoad?.(result);
    if (result.naturalWidth === 0) {
      // In the case of a broken image
      setShowFallback(true);
    }
  }, []);
  const handleOnError = useCallback(() => {
    onError && onError();
    setShowFallback(true);
  }, []);

  const imageClasses = cn(
    'border-whop-stroke border-[0.5px]',
    {
      'rounded-full': shape === 'circle',
      rounded: shape === 'square' && size === 16,
      'rounded-md': shape === 'square' && size === 24,
      'rounded-lg': shape === 'square' && size === 32,
      'rounded-[10px]': shape === 'square' && size === 40,
      'rounded-xl': shape === 'square' && size === 48,
      'rounded-[14px]': shape === 'square' && size === 56,
      'rounded-2xl': shape === 'square' && size === 64,
      'rounded-[18px]': shape === 'square' && size === 72,
      'rounded-[20px]': shape === 'square' && size === 80,
      'rounded-[32px]': shape === 'square' && size === 128,
    },
    className,
  );

  const imageSize = cn({
    'w-4 h-4': size === 16,
    'w-6 h-6': size === 24,
    'w-8 h-8': size === 32,
    'w-10 h-10': size === 40,
    'w-12 h-12': size === 48,
    'w-14 h-14': size === 56,
    'w-16 h-16': size === 64,
    'w-[72px] h-[72px]': size === 72,
    'w-20 h-20': size === 80,
    'w-[128px] h-[128px]': size === 128,
  });

  if (isLoading) {
    return (
      <div
        className={cn(
          'bg-whop-gray/10 animate-pulse overflow-hidden',
          imageSize,
          imageClasses,
        )}
      />
    );
  }

  if (showFallback) {
    return (
      <div
        className={cn(
          'bg-whop-background flex w-fit items-center justify-center overflow-hidden',
          imageSize,
          imageClasses,
        )}
      >
        <AvatarFallback size={size} />
      </div>
    );
  }

  return (
    <Component
      ref={ref}
      className={imageClasses}
      src={imageSource}
      onLoad={handleLoadingComplete}
      onError={handleOnError}
      alt={alt || username || 'Avatar'}
      width={size}
      height={size}
      style={{
        width: size,
        height: size,
        style,
      }}
      {...rest}
    />
  );
}) as <C extends ElementType = 'img'>(
  p: AvatarComponentProps<C> & { ref?: ForwardedRef<unknown> },
) => React.ReactElement | null;
