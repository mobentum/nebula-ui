import * as Nebula from '@mobentum/nebula-ui';
import type { MDXComponents } from 'mdx/types';
import {
  AccountSettingsTabs,
  NotificationSettings,
  ProfileSettings,
} from './blocks/account-settings';
import { BadgeShowcase, BadgeStatuses, BadgeWithIcons } from './blocks/badges';
import { BannerAlert, BannerDismissible, BannerTop } from './blocks/banners';
import { BillingTable, PlanComparison, UsageCard } from './blocks/billing';
import { ConfirmDialog, FormDialog, InviteDialog } from './blocks/dialogs';
import { EmptyStateCentered, EmptyStateFullPage, EmptyStateInline } from './blocks/empty-states';
import { FeatureAlternating, FeatureGrid, FeatureSplit } from './blocks/feature-sections';
import { AvatarUpload, FileUpload, FileUploadProgress } from './blocks/file-upload';
import { FilterBarAdvanced, FilterBarBasic, FilterBarCompact } from './blocks/filterbar';
import {
  FormCreateWorkspace,
  FormFieldGroup,
  FormPackageSelect,
  FormRegister,
  FormSettings,
  FormSingleColumn,
} from './blocks/form-layout';
import { GridListAvatars, GridListCards, GridListCompact } from './blocks/grid-lists';
import { KpiCards, KpiChangeList, KpiCompact, KpiComposition } from './blocks/kpi-cards';
import {
  CommandNav,
  CompactSidebarNav,
  FloatingNav,
  SidebarHeaderNav,
  SidebarNav,
  TabsNav,
  TopNav,
} from './blocks/navigation-layouts';
import { ActivityFeed, OnboardingSteps, WelcomeBanner } from './blocks/onboarding';
import {
  PageShellHero,
  PageShellList,
  PageShellReports,
  PageShellSplit,
  PageShellTabs,
  PageShellWithNav,
} from './blocks/page-shells';
import { PricingSection, PricingTable, PricingTiers } from './blocks/pricing';
import { SaaSTemplate } from './blocks/saas-template';
import { IncidentFeed, ServiceList, UptimeStatus } from './blocks/status-monitoring';
import { TablePagination, TableStandard, TableWithActions } from './blocks/tables';
import { UserAvatarGroup, UserCards, UserList } from './blocks/users';
import { AreaChartDemo } from './charts/area-chart-demo';
import { BarChartDemo } from './charts/bar-chart-demo';
import { BarChartStackedDemo } from './charts/bar-chart-stacked-demo';
import { BarListDemo } from './charts/bar-list-demo';
import { CategoryBarDemo } from './charts/category-bar-demo';
import { ComboChartDemo } from './charts/combo-chart-demo';
import { DonutChartDemo } from './charts/donut-chart-demo';
import { LineChartDemo } from './charts/line-chart-demo';
import { SparkChartDemo } from './charts/spark-chart-demo';
import { TrackerDemo } from './charts/tracker-demo';
import { ComboboxDemo } from './combobox-demo';
import { WorkflowBuilderDemo } from './flow/workflow-builder-demo';
import { UseControllableStateDemo } from './hooks/use-controllable-state-demo';
import { UseDebouncedValueDemo } from './hooks/use-debounced-value-demo';
import { UseMediaQueryDemo } from './hooks/use-media-query-demo';
import { UseOnClickOutsideDemo } from './hooks/use-on-click-outside-demo';
import { UsePreviousDemo } from './hooks/use-previous-demo';
import { UseToggleDemo } from './hooks/use-toggle-demo';
import { LoginForm, LoginForm4, LoginForm5 } from './login-demo';
import { Preview } from './preview';
import { SliderBasic, SliderWithLabel } from './slider-demo';

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
    PricingTiers,
    BannerDismissible,
    BannerAlert,
    BannerTop,
    EmptyStateCentered,
    EmptyStateInline,
    EmptyStateFullPage,
    GridListCards,
    GridListCompact,
    GridListAvatars,
    PageShellTabs,
    PageShellSplit,
    PageShellWithNav,
    PageShellReports,
    PageShellHero,
    PageShellList,
    FilterBarBasic,
    FilterBarAdvanced,
    FilterBarCompact,
    UsageCard,
    PlanComparison,
    BillingTable,
    FormSingleColumn,
    FormFieldGroup,
    FormRegister,
    FormSettings,
    FormPackageSelect,
    FormCreateWorkspace,
    FeatureGrid,
    FeatureSplit,
    FeatureAlternating,
    SaaSTemplate,
    AccountSettingsTabs,
    ProfileSettings,
    NotificationSettings,
    BadgeShowcase,
    BadgeStatuses,
    BadgeWithIcons,
    ConfirmDialog,
    InviteDialog,
    FormDialog,
    FileUpload,
    FileUploadProgress,
    AvatarUpload,
    KpiCards,
    KpiComposition,
    KpiCompact,
    KpiChangeList,
    CommandNav,
    CompactSidebarNav,
    FloatingNav,
    SidebarHeaderNav,
    SidebarNav,
    TabsNav,
    TopNav,
    ActivityFeed,
    OnboardingSteps,
    WelcomeBanner,
    IncidentFeed,
    UptimeStatus,
    ServiceList,
    TablePagination,
    TableStandard,
    TableWithActions,
    UserAvatarGroup,
    UserList,
    UserCards,
    UseToggleDemo,
    UseControllableStateDemo,
    UseDebouncedValueDemo,
    UsePreviousDemo,
    UseMediaQueryDemo,
    UseOnClickOutsideDemo,
    LineChartDemo,
    AreaChartDemo,
    BarChartDemo,
    BarChartStackedDemo,
    BarListDemo,
    ComboChartDemo,
    DonutChartDemo,
    SparkChartDemo,
    CategoryBarDemo,
    TrackerDemo,
    WorkflowBuilderDemo,
    ...Nebula,
    ...({
      h1: ({ children, ...props }: any) => (
        <h1 className="scroll-m-20 text-3xl font-bold tracking-tight text-nb-fg" {...props}>
          {children}
        </h1>
      ),
      h2: ({ children, ...props }: any) => (
        <h2
          className="mt-10 scroll-m-20 border-b border-nb-border pb-2 text-2xl font-semibold tracking-tight text-nb-fg first:mt-0"
          {...props}
        >
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
          <code
            className="relative rounded bg-nb-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold text-nb-fg"
            {...props}
          >
            {children}
          </code>
        ) : (
          <code className={className} {...props}>
            {children}
          </code>
        );
      },
      pre: ({ children, ...props }: any) => (
        <pre
          className="mt-4 overflow-x-auto rounded-lg border border-nb-border bg-nb-muted p-4 text-sm"
          {...props}
        >
          {children}
        </pre>
      ),
      a: ({ children, href, ...props }: any) => (
        <a
          href={href}
          className="font-medium text-nb-primary underline underline-offset-4 hover:text-nb-primary/80"
          {...props}
        >
          {children}
        </a>
      ),
      ul: ({ children, ...props }: any) => (
        <ul className="my-4 ml-6 list-disc text-nb-fg" {...props}>
          {children}
        </ul>
      ),
      ol: ({ children, ...props }: any) => (
        <ol className="my-4 ml-6 list-decimal text-nb-fg" {...props}>
          {children}
        </ol>
      ),
      li: ({ children, ...props }: any) => (
        <li className="mt-2" {...props}>
          {children}
        </li>
      ),
      blockquote: ({ children, ...props }: any) => (
        <blockquote
          className="mt-4 border-l-4 border-nb-primary bg-nb-muted px-4 py-2 text-nb-muted-fg italic"
          {...props}
        >
          {children}
        </blockquote>
      ),
      hr: (props: any) => <hr className="my-6 border-nb-border" {...props} />,
      table: ({ children, ...props }: any) => (
        <div className="my-4 overflow-x-auto">
          <table className="w-full border-collapse text-sm" {...props}>
            {children}
          </table>
        </div>
      ),
      th: ({ children, ...props }: any) => (
        <th
          className="border border-nb-border bg-nb-muted px-3 py-2 text-left font-medium text-nb-fg"
          {...props}
        >
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
