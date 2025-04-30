'use client';
import { Primitive } from '@radix-ui/react-primitive';

import { useCallbackRef } from '@radix-ui/react-use-callback-ref';
import classNames from 'classnames';
import * as React from 'react';
import { avatarPropDefs } from './avatar.props';

import { useLayoutEffect } from 'react';
import type { GetPropDefTypes, PropsWithoutColor } from '../helpers';
import { getInitials } from '../helpers/get-initials';

type ImageLoadingStatus = 'idle' | 'loading' | 'loaded' | 'error';

function resolveLoadingStatus(image: HTMLImageElement | null, src?: string): ImageLoadingStatus {
  if (!image) {
    return 'idle';
  }
  if (!src) {
    return 'error';
  }
  if (image.src !== src) {
    image.src = src;
  }
  return image.complete && image.naturalWidth > 0 ? 'loaded' : 'loading';
}

function useImageLoadingStatus(src?: string, referrerPolicy?: React.HTMLAttributeReferrerPolicy) {
  const isHydrated = useIsHydrated();
  const image = React.useRef<HTMLImageElement | null>(null);
  const img = (() => {
    if (!isHydrated) return null;
    if (!image.current) {
      image.current = new window.Image();
    }
    return image.current;
  })();

  const [loadingStatus, setLoadingStatus] = React.useState<ImageLoadingStatus>(() => resolveLoadingStatus(img, src));

  useLayoutEffect(() => {
    setLoadingStatus(resolveLoadingStatus(img, src));
  }, [img, src]);

  useLayoutEffect(() => {
    const updateStatus = (status: ImageLoadingStatus) => () => {
      setLoadingStatus(status);
    };

    if (!img) return;

    const handleLoad = updateStatus('loaded');
    const handleError = updateStatus('error');
    img.addEventListener('load', handleLoad);
    img.addEventListener('error', handleError);
    if (referrerPolicy) {
      img.referrerPolicy = referrerPolicy;
    }

    return () => {
      img.removeEventListener('load', handleLoad);
      img.removeEventListener('error', handleError);
    };
  }, [img, referrerPolicy]);

  return loadingStatus;
}

function subscribe() {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  return () => {};
}

function useIsHydrated() {
  return React.useSyncExternalStore(
    subscribe,
    () => true,
    () => false,
  );
}
function AvatarImage({
  onLoadingStatusChange,
  ...props
}: React.ComponentPropsWithoutRef<typeof Primitive.img> & {
  onLoadingStatusChange?: (status: ImageLoadingStatus) => void;
}) {
  const imageLoadingStatus = useImageLoadingStatus(props.src, props.referrerPolicy);
  const handleLoadingStatusChange = useCallbackRef((status: ImageLoadingStatus) => {
    onLoadingStatusChange?.(status);
  });

  useLayoutEffect(() => {
    if (imageLoadingStatus !== 'idle') {
      handleLoadingStatusChange(imageLoadingStatus);
    }
  }, [imageLoadingStatus, handleLoadingStatusChange]);

  return <img {...props} data-status={imageLoadingStatus} />;
}
type AvatarOwnProps = GetPropDefTypes<typeof avatarPropDefs>;
interface AvatarProps extends PropsWithoutColor<typeof AvatarImage>, AvatarOwnProps {
  // TODO: See if we can automate making prop defs with `required: true` non nullable
  fallback: NonNullable<AvatarOwnProps['fallback']>;
}

const Avatar = (props: AvatarProps) => {
  const {
    className,
    style,
    size = avatarPropDefs.size.default,
    color = avatarPropDefs.color.default,
    highContrast = avatarPropDefs.highContrast.default,
    fallback: fallbackProp,
    variant = avatarPropDefs.variant.default,
    ...imageProps
  } = props;

  const fallback = React.useMemo(() => {
    if (typeof fallbackProp !== 'string') return fallbackProp;
    try {
      const initials = getInitials(fallbackProp);
      const initialsSvg = (
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          xmlns="http://www.w3.org/2000/svg"
          className="fui-AvatarInitials"
        >
          {/* Text initials */}
          <text
            x="20"
            y="20"
            textAnchor="middle"
            dominantBaseline="central"
            fill="currentColor"
            fontSize={18}
            fontWeight="500"
          >
            {initials}
          </text>
        </svg>
      );
      return initialsSvg;
    } catch (error) {
      console.error('Error generating initials:', error);
      return fallbackProp;
    }
  }, [fallbackProp]);

  return (
    <span
      data-accent-color={color}
      className={classNames(
        'fui-AvatarRoot',
        className,
        `fui-r-size-${size}`,
        { 'fui-high-contrast': highContrast },
        `fui-variant-${variant}`,
      )}
      style={style}
    >
      <AvatarImage className="fui-AvatarImage" {...imageProps} />

      <span
        className={classNames('fui-AvatarFallback', {
          'fui-one-letter': typeof fallback === 'string' && fallback.length === 1,
          'fui-two-letters': typeof fallback === 'string' && fallback.length === 2,
        })}
      >
        {fallback}
      </span>
    </span>
  );
};
Avatar.displayName = 'Avatar';

export { Avatar };
export type { AvatarProps };
