import type { HomeCard } from "@/types/Card";
import "@/styles/Home/Card.css";

export function Card({ imgSrc, titleCard, descCard }: HomeCard) {
  return (
    <article className="card">
      <div className="card__img-background">
        <img src={imgSrc} className="card__img" />
      </div>
      <h4 className="card__title">{titleCard}</h4>
      <p className="card__description">{descCard}</p>
    </article>
  );
}

export default Card;
