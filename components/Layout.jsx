import Header from './Header/Header';
import Footer from './Footer/Footer';

const Layout = ({ children }) => (
  <div className="flex flex-col min-h-screen">
    <Header />
    <main className="flex-grow p-4">{children}</main>
    <Footer />
  </div>
);

export default Layout;
