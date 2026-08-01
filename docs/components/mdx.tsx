import type { MDXComponents } from 'mdx/types';
import * as Nebula from '@nebula/ui';
import { Preview } from './preview';
import { SliderBasic, SliderWithLabel } from './slider-demo';
import { ComboboxDemo } from './combobox-demo';
import { LoginForm, LoginForm4, LoginForm5 } from './login-demo';
import { PricingSection, PricingTable } from './blocks/pricing';
import { BannerDismissible, BannerAlert } from './blocks/banners';
import { EmptyStateCentered, EmptyStateInline } from './blocks/empty-states';
import { GridListCards, GridListCompact } from './blocks/grid-lists';
import { PageShellTabs, PageShellSplit, PageShellWithNav, PageShellReports, PageShellHero, PageShellList } from './blocks/page-shells';
import { FilterBarBasic, FilterBarAdvanced } from './blocks/filterbar';
import { UsageCard, BillingTable } from './blocks/billing';
import { FormSingleColumn, FormFieldGroup } from './blocks/form-layout';
import { FeatureGrid, FeatureSplit } from './blocks/feature-sections';
import { SaaSTemplate } from './blocks/saas-template';

export function useMDXComponents(): MDXComponents {
  return {
    Preview,
    SliderBasic,
    SliderWithLabel,
    ComboboxDemo,
    LoginForm,
    LoginForm4,
    LoginForm5,
    PricingSection,
    PricingTable,
    BannerDismissible,
    BannerAlert,
    EmptyStateCentered,
    EmptyStateInline,
    GridListCards,
    GridListCompact,
    PageShellTabs,
    PageShellSplit,
    PageShellWithNav,
    PageShellReports,
    PageShellHero,
    PageShellList,
    FilterBarBasic,
    FilterBarAdvanced,
    UsageCard,
    BillingTable,
    FormSingleColumn,
    FormFieldGroup,
    FeatureGrid,
    FeatureSplit,
    SaaSTemplate,
    ...Nebula,
    ...({
      h1: ({ children, ...props }: any) => (
        <h1 className="scroll-m-20 text-3xl font-bold tracking-tight text-nb-fg" {...props}>
          {children}
        </h1>
      ),
      h2: ({ children, ...props }: any) => (
        <h2 className="mt-10 scroll-m-20 border-b border-nb-border pb-2 text-2xl font-semibold tracking-tight text-nb-fg first:mt-0" {...props}>
          {children}
        </h2>
      ),
      h3: ({ children, ...props }: any) => (
        <h3 className="mt-8 scroll-m-20 text-xl font-semibold tracking-tight text-nb-fg" {...props}>
          {children}
        </h3>
      ),
      h4: ({ children, ...props }: any) => (
        <h4 className="mt-6 scroll-m-20 text-lg font-semibold tracking-tight text-nb-fg" {...props}>
          {children}
        </h4>
      ),
      p: ({ children, ...props }: any) => (
        <p className="leading-7 [&:not(:first-child)]:mt-4" {...props}>
          {children}
        </p>
      ),
      code: ({ children, className, ...props }: any) => {
        const isInline = !className;
        return isInline ? (
          <code className="relative rounded bg-nb-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold text-nb-fg" {...props}>
            {children}
          </code>
        ) : (
          <code className={className} {...props}>
            {children}
          </code>
        );
      },
      pre: ({ children, ...props }: any) => (
        <pre className="mt-4 overflow-x-auto rounded-lg border border-nb-border bg-nb-muted p-4 text-sm" {...props}>
          {children}
        </pre>
      ),
      a: ({ children, href, ...props }: any) => (
        <a href={href} className="font-medium text-nb-primary underline underline-offset-4 hover:text-nb-primary/80" {...props}>
          {children}
        </a>
      ),
      ul: ({ children, ...props }: any) => (
        <ul className="my-4 ml-6 list-disc text-nb-fg" {...props}>{children}</ul>
      ),
      ol: ({ children, ...props }: any) => (
        <ol className="my-4 ml-6 list-decimal text-nb-fg" {...props}>{children}</ol>
      ),
      li: ({ children, ...props }: any) => (
        <li className="mt-2" {...props}>{children}</li>
      ),
      blockquote: ({ children, ...props }: any) => (
        <blockquote className="mt-4 border-l-4 border-nb-primary bg-nb-muted px-4 py-2 text-nb-muted-fg italic" {...props}>
          {children}
        </blockquote>
      ),
      hr: (props: any) => <hr className="my-6 border-nb-border" {...props} />,
      table: ({ children, ...props }: any) => (
        <div className="my-4 overflow-x-auto">
          <table className="w-full border-collapse text-sm" {...props}>{children}</table>
        </div>
      ),
      th: ({ children, ...props }: any) => (
        <th className="border border-nb-border bg-nb-muted px-3 py-2 text-left font-medium text-nb-fg" {...props}>
          {children}
        </th>
      ),
      td: ({ children, ...props }: any) => (
        <td className="border border-nb-border px-3 py-2 text-nb-fg" {...props}>
          {children}
        </td>
      ),
    } as Record<string, any>),
  } as unknown as MDXComponents;
}
