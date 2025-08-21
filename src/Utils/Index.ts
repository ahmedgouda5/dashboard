export const Sidebar = [
  {
    title: "Analytics",
    href: "/analytics",
  },
  {
    title: "Sales",
    href: "/sales",
  },
  {
    title: "Finance",
    href: "/finance",
  },
];


export const AppSidebar = [
  {
    title: "Products",
    href: "/products",
  },
  {
    title: "ProductsDetails",
    href: "/productsDetails",
  },
  {
    title: "Create product",
    href: "/CreateProduct",
  },
  {
    title: "Saller",
    href: "/Saller",
  },
  {
    title: "Orders",
    href: "/Orders",
  },
];

interface AnalyticsData {
  icon: string;
  title: string;
  many: number;
}

export const AnalyticsData: AnalyticsData[] = [
  {
    icon: "<IoMdEye />",
    title: "page view",
    many: 1000,
  },
  {
    icon: "<TbHandClick />",
    title: "clicks",
    many: 13000,
  },
  {
    icon: "<MdShowChart />",
    title: "conversion",
    many: 14000,
  },
  {
    icon: "<FaCircleUser />",
    title: "New Users",
    many: 9.5,
  },
];



// navbar

