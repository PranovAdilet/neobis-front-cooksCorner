import React from 'react';
import Profile from "@/app/(sidebar)/profile/Profile";
import {Metadata} from "next";
import {NO_INDEX_PAGE} from "@/constants/seo.constance";

export const metadata: Metadata = {
    title: 'Profile',
    ...NO_INDEX_PAGE
}

const ProfilePage = () => {
    return <Profile/>
};

export default ProfilePage;