import Dashboard from "../../pages/dashboard/Dashboard";
import UserProfile from "../../pages/dashboard/UserProfile";
import TableList from "../../pages/dashboard/TableList";
import Typography from "../../pages/dashboard/Typography";
import Maps from "../../pages/dashboard/Maps";
import Notifications from "../../pages/dashboard/Notifications";
import Jobs from "../../pages/dashboard/JobTable";

const dashboardRoutes = [
    {
        path: "/dashboard",
        name: "Dashboard",
        icon: "fa fa-chart-pie",
        component: Dashboard,
        layout: "/admin",
    },
    {
        path: "/user",
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
        path: "/jobs",
        name: "JOBS",
        icon: "fa fa-clipboard",
        component: Jobs,
        layout: "/admin",
    },
];

export default dashboardRoutes;
