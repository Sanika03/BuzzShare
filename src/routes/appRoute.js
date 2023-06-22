import { Navigate, Route, Routes } from "react-router-dom";

// pages
import  { Home }  from "../pages/home";
import { Explore } from "../pages/explore";
import  { Bookmark } from "../pages/bookmark";
import { UserProfile } from "../pages/userProfile";
import { Login } from "../pages/auth/login";
import { Signup } from "../pages/auth/signup";

// components
import { PrivateRoute } from "./privateRoute";
import { ScrollToTop } from "../component/scrollToTop";
import { SinglePost } from "../component/singlePost";
import { useAuth } from "../contexts/authContext";

export const AppRoutes = () => {
  const { token } = useAuth;
        
  return (
    <>
      <ScrollToTop />
        <Routes>
          <Route element={<PrivateRoute />}>
          <Route path="*" element={<Navigate to="/" replace />} />
            <Route path="/" element={<Home />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/post/:postId" element={<SinglePost />} />


            <Route path="/bookmarks" element={<Bookmark />} />
            <Route path="/profile/:username" element={<UserProfile />} />
          </Route>
       
          {!token ? (
            <>
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
            </>
          ) : (
            <>
              <Route path="/login" element={<Navigate to="/" replace />} />
              <Route path="/signup" element={<Navigate to="/" replace />} />
            </>
          )}
        </Routes>
    </>
  );
};
