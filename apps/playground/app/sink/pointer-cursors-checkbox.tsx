'use client';
import { Box, Checkbox, Text } from 'frosted-ui';
import React from 'react';

export function PointerCursorsCheckbox() {
  const [checked, setChecked] = React.useState(false);

  return (
    <Box>
      <label>
        <Checkbox mr="2" onCheckedChange={(value) => setChecked(!!value)} />
        <Text size="2">Use pointer cursors</Text>
      </label>
      {checked && (
        <style>
          {`
            .frosted-ui {
              --cursor-button: pointer;
              --cursor-checkbox: pointer;
              --cursor-disabled: default;
              --cursor-link: pointer;
              --cursor-menu-item: pointer;
              --cursor-radio: pointer;
              --cursor-slider-thumb: grab;
              --cursor-slider-thumb-active: grabbing;
              --cursor-switch: pointer;
            }
          `}
        </style>
      )}
    </Box>
  );
}
