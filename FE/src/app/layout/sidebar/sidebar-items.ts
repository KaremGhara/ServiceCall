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
    title: 'תכנאים',
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

  
  // Customer Modules

  {
    path: '/customer/customerDetails',
    title: 'Profile',
    moduleName: 'customer',
    iconType: 'material-icons-two-tone',
    icon: 'person',
    class: '',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    role: ['Customer'],
    submenu: [],
  },
  {
    path: '/customer/requestTech',
    title: 'Request Technician',
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

  // Student Modules

  {
    path: '/student/dashboard',
    title: 'MENUITEMS.STUDENT.LIST.DASHBOARD',
    moduleName: 'dashboard',
    iconType: 'material-icons-two-tone',
    icon: 'space_dashboard',
    class: '',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    role: ['Student'],
    submenu: [],
  },

 
];
