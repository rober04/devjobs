import "@/styles/Home/CardSection.css";

export function CardSection() {
  return (
    <section className="cards">
      <h2 className="cards__title">Why DevJobs?</h2>
      <h3 className="cards__subtitle">
        DevJobs is the main job board for developers. We connect developers with
        the best companies around the world.
      </h3>
      <section className="cards__container">
        <HomeCard
          imgSrc={"./public/work.svg"}
          titleCard="Find your dreamed job"
          descCard="Search for thousands of job offers from the best compannies around the world."
        />
        <HomeCard
          imgSrc={"./public/community.svg"}
          titleCard="Connect with the best compannies"
          descCard="Connect with the compannies that are searching for your skills."
        />
        <HomeCard
          imgSrc={"./public/company.svg"}
          titleCard="Get the salary you deserve"
          descCard="Get the salary you deserver with our salary calculator."
        />
      </section>
    </section>
  );
}

export default CardSection;
