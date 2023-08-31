import React from "react";
import PropTypes from "prop-types";

import { ReactComponent as HeartFilled } from "assets/icons/heart-filled.svg";
import { ReactComponent as Heart } from "assets/icons/heart.svg";

import * as S from "./styles";

function Card({ images, name, isFavorite, onFavorite, ...rest }) {
  return (
    <S.Container>
      <S.Thumbnail src={`${images?.lg}`} alt={name} data-testid="hero-card" />
      <S.Content>
        <S.Name>{name}</S.Name>
        <S.Button
          onClick={onFavorite}
          aria-label={isFavorite ? "Favorito" : "Favoritar"}
        >
          {isFavorite ? <HeartFilled /> : <Heart />}
        </S.Button>
      </S.Content>
    </S.Container>
  );
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
  isFavorite: PropTypes.bool.isRequired,
  onFavorite: PropTypes.func.isRequired,
};

export default Card;
