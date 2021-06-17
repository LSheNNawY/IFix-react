import Dashboard from "../../pages/dashboard/Dashboard";
import UserProfile from "../../pages/dashboard/UserProfile";
import TableList from "../../pages/dashboard/TableList";
import Typography from "../../pages/dashboard/Typography";
import Maps from "../../pages/dashboard/Maps";
import Notifications from "../../pages/dashboard/Notifications";
import Professions from "../../pages/dashboard/professions/Index"
import Jobs from "../../pages/dashboard/JobTable";
import Admins from "../../pages/dashboard/Admins";
import Users from "../../pages/dashboard/Users";
import Employees from "../../pages/dashboard/Employees";

const dashboardRoutes = [
    {
        path: "/dashboard",
        name: "Dashboard",
        icon: "fa fa-chart-pie",
        component: Dashboard,
        layout: "/admin",
    },
    {
        path: "/profile",
        name: "User Profile",
        icon: "fa fa-user-circle",
        component: UserProfile,
        layout: "/admin",
    },
    {
        path: "/table",
        name: "Table List",
        icon: "fa fa-clipboard",
        component: TableList,
        layout: "/admin",
    },
    {
        path: "/typography",
        name: "Typography",
        icon: "fa fa-scroll",
        component: Typography,
        layout: "/admin",
    },
    {
        path: "/maps",
        name: "Maps",
        icon: "fa fa-map-marker-alt",
        component: Maps,
        layout: "/admin",
    },
    {
        path: "/notifications",
        name: "Notifications",
        icon: "fa fa-bullhorn",
        component: Notifications,
        layout: "/admin",
    },
    {
        path: "/professions",
        name: "Professions",
        icon: "fa fa-bullhorn",
        component: Professions,
        layout: "/admin",
    },
    {
        path: "/jobs",
        name: "JOBS",
        icon: "fa fa-clipboard",
        component: Jobs,
        layout: "/admin",
    },
    {
        path: "/admins",
        name: "Admins",
        icon: "fa fa-user-shield",
        component: Admins,
        layout: "/admin",
    },
    {
        path: "/employees",
        name: "Employees",
        icon: "fa fa-users",
        component: Employees,
        layout: "/admin",
    },
    {
        path: "/users",
        name: "Clients",
        icon: "fa fa-user-tie",
        component: Users,
        layout: "/admin",
    },
];

export default dashboardRoutes;