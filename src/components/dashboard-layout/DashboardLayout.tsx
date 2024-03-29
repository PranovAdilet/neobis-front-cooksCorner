import React, {PropsWithChildren} from 'react';
import Sidebar from "./dashboard-sidebar/Sidebar";
import styles from './dashboard-sidebar/Sidebar.module.scss'

const DashboardLayout = ({children} : PropsWithChildren<unknown>) => {
    return (
        <div className={styles.parent}>
            <Sidebar/>
            <main>
                {children}
            </main>
        </div>
    );
};

export default DashboardLayout;
