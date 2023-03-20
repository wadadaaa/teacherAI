import Footer from "./Footer";
import Header from "./Header";

const DefaultLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow p-8">{children}</main>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
