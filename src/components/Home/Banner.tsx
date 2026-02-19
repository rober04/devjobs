import "@/styles/Home/Banner.css";

export function Banner() {
  return (
    <section className="banner">
      <h1 className="banner__title">Find the job of your dreams</h1>
      <h3 className="banner__subtitle">
        Join the biggest community of developers and find your next opportunity.
      </h3>
      <HomeSearchBar />
    </section>
  );
}

export default Banner;
