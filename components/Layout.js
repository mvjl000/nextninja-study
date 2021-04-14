import Footer from './Footer';
import NavBar from './NavBar';

const Layout = ({ children }) => {
  return (
    <div class="content">
      <NavBar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
