'use client';

import React from 'react';
import { Toaster as ReactHotToaster } from 'react-hot-toast';
import { CustomToastBar } from '../toast';

export const Toaster = () => {
  return (
    <ReactHotToaster
      position="top-center"
      gutter={8}
      toastOptions={{
        style: {
          background: 'transparent',
          boxShadow: 'none',
          border: 'none',
          padding: '0',
        },
        success: {
          iconTheme: {
            primary: '#4AB325',
            secondary: '#ffffff',
          },
        },
        error: {
          iconTheme: {
            primary: '#ff3333',
            secondary: '#ffffff',
          },
        },
        loading: {
          iconTheme: {
            primary: '#0e0e0f',
            secondary: '#d2d1d1',
          },
        },
      }}
    >
      {(t) => <CustomToastBar t={t} />}
    </ReactHotToaster>
  );
};
