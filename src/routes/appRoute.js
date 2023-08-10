import { Navigate, Route, Routes } from "react-router-dom";

// pages
import { Home }  from "../pages/home";
import { Explore } from "../pages/explore";
import { Bookmark } from "../pages/bookmark";
import { UserProfile } from "../pages/userProfile";
import { Login } from "../pages/auth/login";
import { Signup } from "../pages/auth/signup";
import { SinglePost } from "../pages/singlePost";

// components
import { PrivateRoute } from "./privateRoute";
import { ScrollToTop } from "../component/scrollToTop";

export const AppRoutes = () => {
        
  return (
    <>
      <ScrollToTop />
        <Routes>
          <Route path="*" element={<Navigate to="/" replace />} />
          <Route path="/" element={<PrivateRoute><Home /></PrivateRoute>} />
          <Route path="/explore" element={<PrivateRoute><Explore /></PrivateRoute>} />
          <Route path="/bookmarks" element={<PrivateRoute><Bookmark /></PrivateRoute>} />
          <Route path="/profile/:username" element={<PrivateRoute><UserProfile /></PrivateRoute>} />
          <Route path="/post/:_id" element={<PrivateRoute><SinglePost /></PrivateRoute>} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
    </>
  );
};
