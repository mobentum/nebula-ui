'use client';

import { Button, CardRoot } from '@nebula/ui';
import { CloudArrowUp, FileArrowUp, FileText, X } from '@phosphor-icons/react';

const files = [
  { name: 'annual-report.pdf', size: '2.4 MB', status: 'Uploaded' },
  { name: 'team-photo.png', size: '840 KB', status: 'Uploaded' },
  { name: 'budget-v3.xlsx', size: '1.1 MB', status: 'Scanning' },
];

export function FileUpload() {
  return (
    <CardRoot className="w-full max-w-md p-6">
      <div className="flex flex-col items-center justify-center rounded-lg border border-dashed border-nb-border bg-nb-bg/50 px-6 py-10 text-center">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-nb-primary/10 text-nb-primary">
          <CloudArrowUp className="h-6 w-6" aria-hidden />
        </div>
        <p className="mt-4 text-sm font-medium text-nb-fg">Drag &amp; drop files here</p>
        <p className="mt-1 text-xs text-nb-muted-fg">or upload from your computer</p>
        <Button size="sm" className="mt-4">
          <FileArrowUp className="-ml-1 mr-1.5 h-4 w-4" aria-hidden />
          Choose files
        </Button>
        <p className="mt-3 text-[11px] text-nb-muted-fg">PNG, JPG, PDF up to 10MB</p>
      </div>

      <ul className="mt-4 space-y-2">
        {files.map((file) => (
          <li
            key={file.name}
            className="flex items-center gap-3 rounded-lg border border-nb-border px-3 py-2.5"
          >
            <FileText className="h-5 w-5 shrink-0 text-nb-muted-fg" aria-hidden />
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium text-nb-fg">{file.name}</p>
              <p className="text-xs text-nb-muted-fg">
                {file.size} · {file.status}
              </p>
            </div>
            <button
              type="button"
              className="flex h-7 w-7 items-center justify-center rounded-md text-nb-muted-fg transition-colors hover:bg-nb-accent hover:text-nb-fg"
              aria-label={`Remove ${file.name}`}
            >
              <X className="h-4 w-4" aria-hidden />
            </button>
          </li>
        ))}
      </ul>
    </CardRoot>
  );
}
