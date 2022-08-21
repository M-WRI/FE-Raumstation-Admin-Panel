// COMPONENTS
import { Layout } from "./components/Layout.component";
import { Routes, Route } from "react-router-dom";
// VIEWS
import { Dashboard } from "./views/Dashboard.view";
import { ErrorPage } from "./views/404.view";
import { BlockPosts } from "./views/BlockPosts.view";
import { Users } from "./views/Users.view";

const App = (): JSX.Element => {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/">
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="blog-posts" element={<BlockPosts />} />
            <Route path="users" element={<Users />} />
          </Route>
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Layout>
    </>
  );
};

export default App;
