import { faXmark } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { ToastBar, toast, type Toast } from 'react-hot-toast';
import { IconButton } from '../IconButton';

export const CustomToastBar = ({ t }: { t: Toast }) => {
  return (
    <ToastBar toast={t}>
      {({ icon, message }) => {
        // const { type } = t;
        return (
          <div className="flex items-start justify-between gap-2 w-full bg-whop-background border border-whop-stroke rounded-md min-w-[250px] p-2 text-whop-black shadow-md">
            <div className="flex items-baseline gap-1">
              {icon}
              <p className="text-text2">{message}</p>
            </div>
            {t.type !== 'loading' && (
              <IconButton
                icon={faXmark}
                size="xs"
                variant="secondary"
                colorScheme="black"
                onClick={() => toast.dismiss(t.id)}
              />
            )}
          </div>
        );
      }}
    </ToastBar>
  );
};
