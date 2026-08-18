'use client';

import { Toast as ToastPrimitive } from '@base-ui/react/toast';
import { ToastRoot, ToastTitle, ToastDescription, ToastClose, ToastViewport } from './toast';
import { cn } from '../../lib/cn';

const { createToastManager, useToastManager, Provider: ToastProvider } = ToastPrimitive;

const manager = createToastManager();

export type ToastVariant = 'default' | 'destructive' | 'success';

export interface ToastOptions {
  title?: React.ReactNode;
  description?: React.ReactNode;
  variant?: ToastVariant;
  action?: React.ReactNode;
  duration?: number;
}

function normalizeOptions({ title, description, variant = 'default', duration = 5000 }: ToastOptions) {
  return {
    title,
    description,
    type: variant,
    timeout: duration,
  };
}

export interface ToastReturn {
  id: string;
  dismiss: () => void;
  update: (updates: ToastOptions) => void;
}

export function toast(options: ToastOptions): ToastReturn {
  const id = manager.add(normalizeOptions(options));
  return {
    id,
    dismiss: () => manager.close(id),
    update: (updates) => manager.update(id, normalizeOptions(updates)),
  };
}

export function useToast() {
  const { toasts, add, close, update } = useToastManager();
  return {
    toasts,
    toast: (options: ToastOptions): ToastReturn => {
      const id = add(normalizeOptions(options));
      return {
        id,
        dismiss: () => close(id),
        update: (updates) => update(id, normalizeOptions(updates)),
      };
    },
    dismiss: close,
  };
}

const toastVariantClass: Record<ToastVariant, string> = {
  default: 'border-nb-border bg-nb-bg text-nb-fg',
  destructive: 'border-nb-destructive bg-nb-destructive text-nb-destructive-fg',
  success: 'border-nb-success bg-nb-success text-nb-success-fg',
};

function ToastList() {
  const { toasts } = useToastManager();
  return (
    <ToastViewport>
      {toasts.map((t) => (
        <ToastRoot
          key={t.id}
          toast={t}
          className={cn(
            'pointer-events-auto relative flex w-full items-start gap-3 overflow-hidden rounded-lg border p-4 pr-8 text-sm shadow-lg data-closing:animate-out data-swipe-end:animate-out',
            toastVariantClass[(t.type as ToastVariant) ?? 'default'],
          )}
        >
          <div className="grid gap-1">
            {t.title && <ToastTitle>{t.title}</ToastTitle>}
            {t.description && <ToastDescription>{t.description}</ToastDescription>}
          </div>
          <ToastClose />
        </ToastRoot>
      ))}
    </ToastViewport>
  );
}

export function Toaster() {
  return (
    <ToastProvider toastManager={manager}>
      <ToastList />
    </ToastProvider>
  );
}