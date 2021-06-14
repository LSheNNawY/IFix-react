import Dashboard from "../../pages/dashboard/Dashboard";
import UserProfile from "../../pages/dashboard/UserProfile";
import TableList from "../../pages/dashboard/TableList";
import Typography from "../../pages/dashboard/Typography";
import Maps from "../../pages/dashboard/Maps";
import Notifications from "../../pages/dashboard/Notifications";
import Professions from "../../pages/dashboard/professions/index"
import ProfessionsCreate from "../../pages/dashboard/professions/create"


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
        path: "/professions",
        name: "Professions",
        icon: "fa fa-bullhorn",
        component: Professions,
        layout: "/admin",
    },
    {
        path: "/new",
        name: "Professions.new",
        icon: "fa fa-bullhorn",
        component:ProfessionsCreate ,
        layout: "/admin",
    }

];

export default dashboardRoutes;