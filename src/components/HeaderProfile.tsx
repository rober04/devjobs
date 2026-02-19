import "@/styles/HeaderProfile.css";

export function HeaderProfile() {
  return (
    <section className="header__profile">
      <button className="header__button job">Post a job offer</button>
      <button className="header__button login">Log In</button>
    </section>
  );
}

export default HeaderProfile;
