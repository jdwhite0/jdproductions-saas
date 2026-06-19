/***************************  MENU ITEMS - FOUNDER / ADMIN  ***************************/
const admin = {
  id: 'group-admin', title: 'Founder', icon: 'IconShieldLock', type: 'group',
  children: [
    { id: 'admin-overview', title: 'Admin Overview', type: 'item', url: '/admin', icon: 'IconChartBar' },
    { id: 'admin-accounts', title: 'Accounts', type: 'item', url: '/admin/accounts', icon: 'IconUsers' },
    { id: 'admin-subscriptions', title: 'Subscriptions & Revenue', type: 'item', url: '/admin/subscriptions', icon: 'IconReportMoney' },
    { id: 'admin-system', title: 'System', type: 'item', url: '/admin/system', icon: 'IconSettings' }
  ]
};
export default admin;
