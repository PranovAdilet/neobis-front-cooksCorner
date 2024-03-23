import type {PropsWithChildren} from 'react';
import DashboardLayout from "@/components/dashboard-layout/DashboardLayout";

const Layout = ({children} : PropsWithChildren<unknown>) => {
    return <DashboardLayout>{children}</DashboardLayout>
};

export default Layout;