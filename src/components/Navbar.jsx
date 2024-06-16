import { useEffect, useState } from 'react';

function Navbar() {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= window.innerHeight) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
    return () => {
      window.removeEventListener('scroll', changeNav);
    };
  }, []);

  return (
    <div className={`navbar ${!scrollNav && 'scrolled'}`}>
      <h3>Miguel Angel Moreno Villanueva</h3>
      <h3>Desarrollador Backend</h3>
    </div>
  );
}

export default Navbar;
