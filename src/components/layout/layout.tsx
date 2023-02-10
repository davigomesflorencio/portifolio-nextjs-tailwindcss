import PagesMetaHead from "../PagesMetaHead";
import AppFooter from "../shared/AppFooter";
import AppHeader from "../shared/AppHeader";

const Layout = ({ children }: any) => {
  return (
    <>
      <PagesMetaHead />
      <AppHeader />
      <div>{children}</div>
      <AppFooter />
    </>
  );
};

export default Layout;
