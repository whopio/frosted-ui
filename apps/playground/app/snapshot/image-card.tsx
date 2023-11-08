'use client';

import { DownloadIcon, HeartFilledIcon, PlusIcon } from '@radix-ui/react-icons';
import {
  Button,
  Flex,
  IconButton,
  Popover,
  RadioGroupItem,
  RadioGroupRoot,
  Text,
} from '@whop/frosted-ui';
import * as React from 'react';
import styles from './page.module.css';
// TODO: tooltips not working
function ImageCard({ id }: { id: string | number }) {
  const [open, setOpen] = React.useState(false);
  return (
    // TODO: why this has to be wrapped to prevent Tooltip.Provider error?
    <div className={styles.imageCard}>
      <img
        src={`https://images.unsplash.com/photo-${id}?w=400&h=400&dpr=2&auto=format&fit=crop&w=2574&q=70`}
        style={{
          display: 'block',
          width: '100%',
          objectFit: 'cover',
          height: 400,
        }}
      />
      <div
        className={styles.imageCardOverlay}
        data-visible={open ? '' : undefined}
      >
        <div
          style={{
            position: 'absolute',
            top: 'var(--space-3)',
            right: 'var(--space-3)',
          }}
        >
          <IconButton
            size="3"
            highContrast
            radius="full"
            style={{ marginRight: 'var(--space-3)' }}
          >
            <HeartFilledIcon />
          </IconButton>
          <IconButton size="3" highContrast radius="full">
            <PlusIcon />
          </IconButton>
        </div>
        <Popover.Root open={open} onOpenChange={setOpen}>
          <Popover.Trigger>
            <IconButton
              size="3"
              highContrast
              radius="full"
              style={{
                position: 'absolute',
                bottom: 'var(--space-3)',
                right: 'var(--space-3)',
              }}
            >
              <DownloadIcon />
            </IconButton>
          </Popover.Trigger>
          <Popover.Content align="center" className={styles.downloadPopover}>
            <div
              style={{
                boxSizing: 'border-box',
                width: 200,
                padding: 'var(--space-4)',
              }}
            >
              <Text as="p" size="3" style={{ marginBottom: 'var(--space-2)' }}>
                Choose a size:
              </Text>
              <RadioGroupRoot defaultValue="Small" mb="4">
                <Flex gap="2" direction="column">
                  {['Small', 'Medium', 'Large'].map((size) => (
                    <Text as="label" size="2" key={size}>
                      <Flex gap="2">
                        <RadioGroupItem value={size} /> {size}
                      </Flex>
                    </Text>
                  ))}
                </Flex>
              </RadioGroupRoot>

              <Popover.Close>
                <Button size="2" variant="soft">
                  Download <DownloadIcon />
                </Button>
              </Popover.Close>
            </div>
          </Popover.Content>
        </Popover.Root>
      </div>
    </div>
  );
}

export { ImageCard };
