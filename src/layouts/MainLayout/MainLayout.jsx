import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

export default function MainLayout({ page }) {
  return (
    <>
      <Header page={page} />
      <main className="pt-30">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
