import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

export default function MainLayout({ page }) {
  return (
    <>
      <Header page={page} />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
