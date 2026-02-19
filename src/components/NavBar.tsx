import "@/styles/NavBar.css";

export function NavBar() {
  return (
    <nav className="navbar">
      <a href="/" className="navbar__link">
        Home
      </a>
      <a href="/search" className="navbar__link">
        Search
      </a>
      <a href="/jobs" className="navbar__link">
        Jobs
      </a>
      <a href="/companies" className="navbar__link">
        Companies
      </a>
    </nav>
  );
}
