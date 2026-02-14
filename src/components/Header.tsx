import "@/styles/Header.css";
import { NavBar } from "@/components/NavBar";
import { HeaderProfile } from "@/components/HeaderProfile";

export function Header() {
  return (
    <header className="header">
      <h1 className="header__title">
        <svg
          className="header__logo"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polyline points="16 18 22 12 16 6"></polyline>
          <polyline points="8 6 2 12 8 18"></polyline>
        </svg>
        DevJobs
      </h1>
      <NavBar />
      <HeaderProfile />
    </header>
  );
}
