export const navItems = [
  { id: 'dashboard', label: 'Dashboard', icon: 'M3 12h4l3-9 4 18 3-9h4' },
  { id: 'projects', label: 'Projects', icon: 'M4 7h16M4 12h10M4 17h7' },
  {
    id: 'team',
    label: 'Team',
    icon: 'M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z',
  },
  {
    id: 'billing',
    label: 'Billing',
    icon: 'M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6',
  },
  {
    id: 'settings',
    label: 'Settings',
    icon: 'M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z',
  },
];

export const team = [
  { name: 'Alissia Stone', email: 'a.stone@gmail.com', role: 'Admin', avatar: 'AS' },
  { name: 'Emma Bern', email: 'e.bern@gmail.com', role: 'Member', avatar: 'EB' },
  { name: 'Aaron Wave', email: 'a.flow@acme.com', role: 'Member', avatar: 'AW' },
  { name: 'Sarah Johnson', email: 's.johnson@gmail.com', role: 'Admin', avatar: 'SJ' },
];

export const kpis = [
  { label: 'Monthly revenue', value: '$24,500', delta: '+12.4%', up: true },
  { label: 'Active users', value: '8,431', delta: '+5.2%', up: true },
  { label: 'API requests', value: '2.1M', delta: '-1.8%', up: false },
  { label: 'Uptime', value: '99.99%', delta: '+0.01%', up: true },
];

export const revenueData = [
  { month: 'Jan', revenue: 18200, target: 18000 },
  { month: 'Feb', revenue: 21000, target: 20000 },
  { month: 'Mar', revenue: 19400, target: 21000 },
  { month: 'Apr', revenue: 24800, target: 22000 },
  { month: 'May', revenue: 23200, target: 24000 },
  { month: 'Jun', revenue: 28100, target: 25000 },
];

export const planMix = [
  { plan: 'Free', revenue: 4200 },
  { plan: 'Pro', revenue: 18300 },
  { plan: 'Enterprise', revenue: 5600 },
];

export const activity = [
  { title: 'New deployment', detail: 'api-gateway deployed to production', time: '2m ago' },
  { title: 'Invoice paid', detail: 'Invoice INV-2026-071 marked paid', time: '1h ago' },
  { title: 'Member invited', detail: 'Emma Bern was invited to the team', time: '3h ago' },
  { title: 'Usage alert', detail: 'API requests exceeded 2M threshold', time: '5h ago' },
];

export const invoices = [
  { id: 'INV-2026-071', date: 'Jul 1, 2026', amount: '$99.00', status: 'Paid' },
  { id: 'INV-2026-070', date: 'Jun 1, 2026', amount: '$99.00', status: 'Paid' },
  { id: 'INV-2026-069', date: 'May 1, 2026', amount: '$99.00', status: 'Paid' },
];

export const projects = [
  { name: 'API Gateway', status: 'Active', color: 'bg-nb-primary/10 text-nb-primary' },
  { name: 'Web App', status: 'Active', color: 'bg-emerald-500/10 text-emerald-600' },
  { name: 'Mobile API', status: 'Paused', color: 'bg-amber-500/10 text-amber-600' },
  { name: 'Data Pipeline', status: 'Active', color: 'bg-violet-500/10 text-violet-600' },
];
