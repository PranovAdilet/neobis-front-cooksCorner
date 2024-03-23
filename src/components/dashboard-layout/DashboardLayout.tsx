import React, {PropsWithChildren} from 'react';
import Sidebar from "./dashboard-sidebar/Sidebar";

const DashboardLayout = ({children} : PropsWithChildren<unknown>) => {
    return (
        <div className='grid grid-cols-[6rem,auto]'>
            <Sidebar/>
            <main>
                {children}
            </main>
        </div>
    );
};

export default DashboardLayout;