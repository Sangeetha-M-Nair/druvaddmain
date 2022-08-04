import React, { useState } from "react";
import Sidebar from "./componenets/homepage/Sidebar";
import LoginPage from "./componenets/LoginPage";
import { UserContext } from "./componenets/userContex";
import { Routes, Route } from 'react-router-dom';
import UserProfile from './componenets/userProfile';
import HomePage from './componenets/homePage';
import Edit from './componenets/edit';
import AddCompany from './componenets/addCompany';
import ViewCompany from './componenets/viewCompany';
import { CompanyContext } from "./componenets/companyContext";
import AddJob from "./componenets/AddJob";
import ViewJobs from "./componenets/viewJobs";
import './App.css';
import HrAdmin from "./componenets/addHrAdmin";
import JobHrAdmin from "./componenets/JobHrAdmin";
import ContentAdmin from "./componenets/ContentAdminAdd";
import CreatePost from "./componenets/createPost";
import { DarkProfile } from "./componenets/DarkProfile";
import HomePage2 from "./componenets/homePage2";
import HomePage3 from "./componenets/homePage3";
import ViewCompanies from "./componenets/viewCompanies";
import YoutubDetails from "./componenets/youTubeId";
import CompanyPost from "./componenets/CompanyCreatePost";
import Twitter from "../src/Twitter";
import ProfileSocial from "./componenets/ProfileSocial";
import AddEducation from "./componenets/addEducation";
import MaterialUIPickers from "./componenets/datePicker";
import { JobSignIn } from "./componenets/job/JobSignIn";
import Admin from "./componenets/admin/Admin";
import CompanyAdmin from "./componenets/admin/CompanyAdmin";
import UserAdmin from "./componenets/admin/userAdmin";
import ViewFullPost from "./componenets/homepage/ViewFullPost";
//import Blue from "./componenets/bluenew/Blue";
import CreateGroup from "./componenets/group/createGroup";
import ViewGroupsToJoin from "./componenets/group/viewGroupsToJoin";
import ViewMyGroups from "./componenets/group/myGroups";
import ViewOneGroup from "./componenets/group/ViewOneGroup";
import JoinRequest from "./componenets/group/joinRequests";
import CreateGroupPost from "./componenets/group/createGroupPost";
import ViewPendingPosts from "./componenets/group/viewPendingPosts";
import ViewGroupPosts from "./componenets/group/viewGroupPosts";
import Balance from "./componenets/promo code/Balance";
import { Job2 } from "./componenets/job2/job2";
import Blue from "./componenets/Blue/Blue";
import ViewFriendRequest from "./viewFriendRequests";
import ViewFriendsNotInGroup from "./componenets/group/viewFriendsNotInGroup";
import Countrystatecity from "./componenets/csc/Countrystatecity";
import ViewGroupInvites from "./componenets/group/ViewGroupInvites";
import Main from "./componenets/groupDesigned/Main";
import Chatting_Section from "./componenets/chat/Chating_Section";


function App() {
    const [user, setUser] = useState(null);
    const [company, setCompany] = useState(null);
    const [page, setpage] = useState('')
    const [youtube, setyoutube] = useState(false)
    const [instagram, setinstagram] = useState(false)
    return (
        <UserContext.Provider value={{ user, setUser }}>
            <CompanyContext.Provider value={{ company, setCompany }}>
                <Routes>

                    <Route path='/' element={<HomePage />} />
                    <Route path='/profile/:id' element={<UserProfile />}>
                        <Route path="viewFriendRequest" element={<ViewFriendRequest/>}/>    
                        <Route path="viewGroupInvites" element={<ViewGroupInvites/>}/>
                    </Route>
                    <Route path="/job2" element={<Job2/>}/>
                    <Route path='/login' element={<LoginPage />} />
                    <Route path='/edit' element={<Edit />} />
                    <Route path='/addCompany' element={<AddCompany />} />
                    <Route path="/viewCompany/:id" element={<ViewCompany />} />
                    <Route path="/:id/addHrAdmin" element={<HrAdmin />}></Route>
                    <Route path="/:id/addContentAdmin" element={<ContentAdmin />}></Route>
                    <Route path="/:id/addJob" element={<AddJob />} />
                    <Route path="/:id/jobs" element={<ViewJobs />}></Route>
                    <Route path="/:id/jobs/:jobid/addHr" element={<JobHrAdmin />} />
                    <Route path="/:id/createpost" element={<CreatePost />}></Route>
                    <Route path="/darkProfile" element={<DarkProfile />}></Route>
                    <Route path="/homePage2" element={<HomePage2 />}></Route>
                    <Route path="/homepage3" element={<HomePage3 />}></Route>
                    <Route path="/viewCompanies/:id" element={<ViewCompanies />} />
                    <Route path="/companyPost" element={<CompanyPost />} />
                    <Route path="/twitter" element={<Twitter />} />
                    <Route path="/youtubeDetails" element={<YoutubDetails />} />
                    <Route path='/profile2/:id' element={<ProfileSocial />} />
                    <Route path = "/addEducation" element={<AddEducation/>} />
                    <Route path="/muid" element={<MaterialUIPickers/>}/>
                    <Route path="/jobSignIn/:id" element={<JobSignIn/>}/>
                    <Route path="/sideBar" element={<Sidebar/>}></Route>
                    <Route path="/blue" element={<Blue/>}/>
                    <Route path = "/post/:id" element={<ViewFullPost/>}/> 
                    <Route path="/createGroup/:id" element={<CreateGroup/>}/>
                    <Route path="/joingroups" element={<ViewGroupsToJoin/>}/>
                    <Route path="/myGroups" element={<ViewMyGroups/>}/>
                    <Route path="/balance" element={<Balance/>}/>
                    <Route path="/group/:gid" element={<ViewOneGroup/>}> {/* gid = _id of the group*/}
                        <Route path="joinRequests" element={<JoinRequest/>}/>
                        <Route path="createGroupPost" element={<CreateGroupPost/>}/>
                        <Route path="viewPendingPosts" element={<ViewPendingPosts/>}/>
                        <Route path="viewGroupPosts" element={<ViewGroupPosts/>}/>
                        <Route path="viewFriendsNotInGroup" element={<ViewFriendsNotInGroup/>}/>
                    </Route>
                    <Route path="/admin" element={<Admin/>}>
                        <Route path="companyTable" element={<CompanyAdmin/>}/>
                        <Route path="userTable" element={<UserAdmin/>}/>
                    </Route>
                    <Route path="/csc" element={<Countrystatecity/>}/>
                    <Route path="/main/:id" element={<Main/>}/>
                    <Route path='/chat/:id' element={<Chatting_Section />} />

                </Routes>
            </CompanyContext.Provider>
        </UserContext.Provider>
    )
}

export default App;