import { RouteInfo } from './sidebar.metadata';
export const ROUTES: RouteInfo[] = [
  {
    path: '',
    title: 'MENUITEMS.MAIN.TEXT',
    moduleName: '',
    iconType: '',
    icon: '',
    class: '',
    groupTitle: true,
    badge: '',
    badgeClass: '',
    role: ['All'],
    submenu: [],
  },

  // Admin Modules

 
  {
    path: '/admin/allTechnician',
    title: 'טכנאי',
    moduleName: 'Show technician',
    iconType: 'material-icons-two-tone',
    icon: 'space_dashboard',
    class: '',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    role: ['Admin'],
    submenu: [],
  },
  {
    path: '/admin/allCustomers',
    title: 'לקחות',
    moduleName: 'Show technician',
    iconType: 'material-icons-two-tone',
    icon: 'space_dashboard',
    class: '',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    role: ['Admin'],
    submenu: [],
  },
  {
    path: '/admin/allRequests',
    title: 'פניות',
    moduleName: 'Show technician',
    iconType: 'material-icons-two-tone',
    icon: 'space_dashboard',
    class: '',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    role: ['Admin'],
    submenu: [],
  },
  {
    path: '/admin/AttachTechician',
    title: 'לצרף טכנאי ל פניות',
    moduleName: 'Attach techician',
    iconType: 'material-icons-two-tone',
    icon: 'space_dashboard',
    class: '',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    role: ['Admin'],
    submenu: [],
  },

  
  // Customer Modules

  {
    path: '/customer/requestTech',
    title: 'בקשה חדשה',
    moduleName: 'customer',
    iconType: 'material-icons-two-tone',
    icon: 'space_dashboard',
    class: '',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    role: ['Customer'],
    submenu: [],
  },
  {
    path: '/customer/customerRequests',
    title: 'בקשות שלי',
    moduleName: 'customer',
    iconType: 'material-icons-two-tone',
    icon: 'space_dashboard',
    class: '',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    role: ['Customer'],
    submenu: [],
  },

  // Technician Modules


  {
    path:'/technician/myRequests',
    title: 'פניות שלי',
    moduleName: 'technician',
    iconType: 'material-icons-two-tone',
    icon: 'person',
    class: '',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    role: ['Technician'],
    submenu: [],
  },


 
];
