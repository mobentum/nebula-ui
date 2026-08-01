'use client';

import { Button, Input, DividerRoot, DividerLine, DividerLabel } from '@nebula/ui';

function GoogleIcon(props: React.ComponentProps<'svg'>) {
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
      <path d="M3.06364 7.50914C4.70909 4.24092 8.09084 2 12 2C14.6954 2 16.959 2.99095 18.6909 4.60455L15.8227 7.47274C14.7864 6.48185 13.4681 5.97727 12 5.97727C9.39542 5.97727 7.19084 7.73637 6.40455 10.1C6.2045 10.7 6.09086 11.3409 6.09086 12C6.09086 12.6591 6.2045 13.3 6.40455 13.9C7.19084 16.2636 9.39542 18.0227 12 18.0227C13.3454 18.0227 14.4909 17.6682 15.3864 17.0682C16.4454 16.3591 17.15 15.3 17.3818 14.05H12V10.1818H21.4181C21.5364 10.8363 21.6 11.5182 21.6 12.2273C21.6 15.2727 20.5091 17.8363 18.6181 19.5773C16.9636 21.1046 14.7 22 12 22C8.09084 22 4.70909 19.7591 3.06364 16.4909C2.38638 15.1409 2 13.6136 2 12C2 10.3864 2.38638 8.85911 3.06364 7.50914Z" />
    </svg>
  );
}

function GitHubIcon(props: React.ComponentProps<'svg'>) {
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
      <path d="M12.001 2C6.47598 2 2.00098 6.475 2.00098 12C2.00098 16.425 4.86348 20.1625 8.83848 21.4875C9.33848 21.575 9.52598 21.275 9.52598 21.0125C9.52598 20.775 9.51348 19.9875 9.51348 19.15C7.00098 19.6125 6.35098 18.5375 6.15098 17.975C6.03848 17.6875 5.55098 16.8 5.12598 16.5625C4.77598 16.375 4.27598 15.9125 5.11348 15.9C5.90098 15.8875 6.46348 16.625 6.65098 16.925C7.55098 18.4375 8.98848 18.0125 9.56348 17.75C9.65098 17.1 9.91348 16.6625 10.201 16.4125C7.97598 16.1625 5.65098 15.3 5.65098 11.475C5.65098 10.3875 6.03848 9.4875 6.67598 8.7875C6.57598 8.5375 6.22598 7.5125 6.77598 6.1375C6.77598 6.1375 7.61348 5.875 9.52598 7.1625C10.326 6.9375 11.176 6.825 12.026 6.825C12.876 6.825 13.726 6.9375 14.526 7.1625C16.4385 5.8625 17.276 6.1375 17.276 6.1375C17.826 7.5125 17.476 8.5375 17.376 8.7875C18.0135 9.4875 18.401 10.375 18.401 11.475C18.401 15.3125 16.0635 16.1625 13.8385 16.4125C14.201 16.725 14.5135 17.325 14.5135 18.2625C14.5135 19.6 14.501 20.675 14.501 21.0125C14.501 21.275 14.6885 21.5875 15.1885 21.4875C19.259 20.1133 21.9999 16.2963 22.001 12C22.001 6.475 17.526 2 12.001 2Z" />
    </svg>
  );
}

function LogoIcon(props: React.ComponentProps<'svg'>) {
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
      <path d="M10.9999 2.04938L11 5.07088C7.6077 5.55612 5 8.47352 5 12C5 15.866 8.13401 19 12 19C13.5723 19 15.0236 18.4816 16.1922 17.6064L18.3289 19.7428C16.605 21.1536 14.4014 22 12 22C6.47715 22 2 17.5228 2 12C2 6.81468 5.94662 2.55115 10.9999 2.04938ZM21.9506 13.0001C21.7509 15.0111 20.9555 16.8468 19.7433 18.3283L17.6064 16.1922C18.2926 15.2759 18.7595 14.1859 18.9291 13L21.9506 13.0001ZM13.0011 2.04948C17.725 2.51902 21.4815 6.27589 21.9506 10.9999L18.9291 10.9998C18.4905 7.93452 16.0661 5.50992 13.001 5.07103L13.0011 2.04948Z" />
    </svg>
  );
}

/* ─── Login 1 (simple email) ─── */

export function LoginForm() {
  return (
    <div className="flex min-h-[500px] w-full flex-col justify-center px-4 py-10">
      <div className="mx-auto w-full max-w-sm">
        <h3 className="text-center text-xl font-semibold text-nb-fg">Log in or create account</h3>
        <form onSubmit={(e) => e.preventDefault()} className="mt-6">
          <label htmlFor="login-email" className="text-sm font-medium text-nb-fg">Email</label>
          <Input type="email" id="login-email" placeholder="john@company.com" className="mt-2" />
          <Button type="submit" className="mt-4 w-full">Sign in</Button>
        </form>
        <DividerRoot className="my-6">
          <DividerLine />
          <DividerLabel>or with</DividerLabel>
          <DividerLine />
        </DividerRoot>
        <a href="#" className="inline-flex w-full items-center justify-center gap-2 rounded-md border border-nb-border bg-nb-bg px-4 py-2 text-sm font-medium text-nb-fg shadow-sm hover:bg-nb-accent transition-colors">
          <GoogleIcon className="h-5 w-5" aria-hidden />
          <span>Sign in with Google</span>
        </a>
        <p className="mt-4 text-xs text-nb-muted-fg text-center">
          By signing in, you agree to our{' '}
          <a href="#" className="underline underline-offset-4 hover:text-nb-fg">terms of service</a> and{' '}
          <a href="#" className="underline underline-offset-4 hover:text-nb-fg">privacy policy</a>.
        </p>
      </div>
    </div>
  );
}

/* ─── Login 4 (company + social + email/password) ─── */

export function LoginForm4() {
  return (
    <div className="flex min-h-[500px] w-full flex-col justify-center px-4 py-10">
      <div className="mx-auto w-full max-w-md">
        <div className="flex items-center gap-2.5">
          <LogoIcon className="h-7 w-7 text-nb-fg" aria-hidden />
          <p className="font-medium text-nb-fg">Company</p>
        </div>
        <h3 className="mt-6 text-xl font-semibold text-nb-fg">Sign in to your account</h3>
        <p className="mt-2 text-sm text-nb-muted-fg">
          Don&apos;t have an account?{' '}
          <a href="#" className="font-medium text-nb-primary hover:text-nb-primary/80">Sign up</a>
        </p>
        <div className="mt-8 flex flex-col gap-2 sm:flex-row">
          <a href="#" className="flex w-full items-center justify-center gap-2 rounded-md border border-nb-border bg-nb-bg px-4 py-2 text-sm font-medium text-nb-fg shadow-sm hover:bg-nb-accent transition-colors">
            <GitHubIcon className="h-5 w-5" aria-hidden />
            <span>Login with GitHub</span>
          </a>
          <a href="#" className="flex w-full items-center justify-center gap-2 rounded-md border border-nb-border bg-nb-bg px-4 py-2 text-sm font-medium text-nb-fg shadow-sm hover:bg-nb-accent transition-colors">
            <GoogleIcon className="h-4 w-4" aria-hidden />
            <span>Login with Google</span>
          </a>
        </div>
        <DividerRoot className="my-6">
          <DividerLine />
          <DividerLabel>or</DividerLabel>
          <DividerLine />
        </DividerRoot>
        <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
          <div>
            <label htmlFor="login4-email" className="text-sm font-medium text-nb-fg">Email</label>
            <Input type="email" id="login4-email" placeholder="john@company.com" className="mt-2" />
          </div>
          <div>
            <label htmlFor="login4-password" className="text-sm font-medium text-nb-fg">Password</label>
            <Input type="password" id="login4-password" placeholder="Password" className="mt-2" />
          </div>
          <Button type="submit" className="w-full">Sign in</Button>
        </form>
        <p className="mt-6 text-sm text-nb-muted-fg text-center">
          Forgot your password?{' '}
          <a href="#" className="font-medium text-nb-primary hover:text-nb-primary/80">Reset password</a>
        </p>
      </div>
    </div>
  );
}

/* ─── Login 5 (register) ─── */

export function LoginForm5() {
  return (
    <div className="flex min-h-[500px] w-full flex-col justify-center px-4 py-10">
      <div className="mx-auto w-full max-w-md">
        <LogoIcon className="mx-auto h-10 w-10 text-nb-fg" aria-hidden />
        <h3 className="mt-6 text-center text-xl font-bold text-nb-fg">Create new account for workspace</h3>
      </div>
      <div className="mt-8 mx-auto w-full max-w-md rounded-lg border border-nb-border bg-nb-card p-6 shadow-sm">
        <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
          <div>
            <label htmlFor="reg-name" className="text-sm font-medium text-nb-fg">Name</label>
            <Input type="text" id="reg-name" placeholder="Name" className="mt-2" />
          </div>
          <div>
            <label htmlFor="reg-email" className="text-sm font-medium text-nb-fg">Email</label>
            <Input type="email" id="reg-email" placeholder="john@company.com" className="mt-2" />
          </div>
          <div>
            <label htmlFor="reg-password" className="text-sm font-medium text-nb-fg">Password</label>
            <Input type="password" id="reg-password" placeholder="Password" className="mt-2" />
          </div>
          <div>
            <label htmlFor="reg-confirm" className="text-sm font-medium text-nb-fg">Confirm password</label>
            <Input type="password" id="reg-confirm" placeholder="Password" className="mt-2" />
          </div>
          <div className="flex items-start gap-3">
            <input id="reg-newsletter" type="checkbox" className="mt-1 h-4 w-4 rounded border-nb-border text-nb-primary focus:ring-nb-primary" />
            <label htmlFor="reg-newsletter" className="text-sm text-nb-muted-fg">Sign up to our newsletter</label>
          </div>
          <Button type="submit" className="w-full">Create account</Button>
          <p className="text-center text-xs text-nb-muted-fg">
            By signing in, you agree to our{' '}
            <a href="#" className="font-medium text-nb-primary hover:text-nb-primary/80">Terms of use</a> and{' '}
            <a href="#" className="font-medium text-nb-primary hover:text-nb-primary/80">Privacy policy</a>
          </p>
        </form>
      </div>
      <p className="mt-6 text-center text-sm text-nb-muted-fg">
        Already have an account?{' '}
        <a href="#" className="font-medium text-nb-primary hover:text-nb-primary/80">Sign in</a>
      </p>
    </div>
  );
}
