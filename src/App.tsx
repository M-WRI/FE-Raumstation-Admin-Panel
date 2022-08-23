// COMPONENTS
import { Layout } from "./components/Layout.component";
import { Routes, Route } from "react-router-dom";
// VIEWS
import { Dashboard } from "./views/Dashboard.view";
import { ErrorPage } from "./views/404.view";
import { BlockPosts } from "./views/BlockPosts.view";
import { Users } from "./views/Users.view";
import { EditProfile } from "./views/EditProfile";

const App = (): JSX.Element => {
  return (
    <Layout>
      <Routes>
        <Route path="/">
          {/* DASHBOARD */}
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="dashboard/edit-profile" element={<EditProfile />} />
          {/* BLOG */}
          <Route path="blog-posts" element={<BlockPosts />} />
          {/* USERS */}
          <Route path="users" element={<Users />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Layout>
  );
};

export default App;
