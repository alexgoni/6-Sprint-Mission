import { Link } from "react-router-dom";
import { addCommas } from "utils/commas";
import * as S from "./Card.style";
import { ReactComponent as HeartIcon } from "assets/icon/ic_heart.svg";

export default function Card({ data }) {
  const { id, images = [], name: title, price, favoriteCount } = data;

  return (
    <Link to={`/items/${id}`}>
      <S.CardContainer>
        <S.ProductImg src={images[0]} alt="product-img" />
        <S.CardTitle>{title}</S.CardTitle>
        <S.ProductPrice>{`${addCommas(price)}원`}</S.ProductPrice>
        <S.LikeCount>
          <HeartIcon width={16} height={16} strokeWidth={1.2} />
          <span>{favoriteCount}</span>
        </S.LikeCount>
      </S.CardContainer>
    </Link>
  );
}
