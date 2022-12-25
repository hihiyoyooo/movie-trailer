import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import ReplaceImage from "../../assets/imgs/unknown.png";
import { flexCenter } from "../../styles/common";

function MovieCard({ movie }) {
    const IMAGE_URL = useRef(process.env.REACT_APP_IMAGE_URL);
    const [movieOverView, setMovieOverView] = useState("");
    useEffect(() => {
        if (!movie) return;
        if (movie.overview.length > 100) {
            setMovieOverView(movie.overview.slice(0, 100) + "...");
        } else {
            setMovieOverView(movieOverView);
        }
    }, [movie, movieOverView]);

    return (
        <div>
            <S.Wrapper>
                <S.Poster>
                    <img
                        src={
                            movie.poster_path
                                ? IMAGE_URL.current + movie.poster_path
                                : ReplaceImage
                        }
                        alt="car"
                    />
                </S.Poster>
                <S.DescBox>
                    <h1>{movie.title}</h1>
                    <div>{movie.vote_average}</div>
                    <p>{movie.overview}</p>
                </S.DescBox>
            </S.Wrapper>
        </div>
    );
}
export default MovieCard;

const Wrapper = styled.div`
    width: 340px;
    height: 610px;
    margin: 8px;
    overflow: hidden;
`;

const Poster = styled.div`
    ${flexCenter}
    & img {
        width: 260px;
        aspect-ratio: 9 / 16;
    }
`;
const DescBox = styled.div`
    width: 260px;
    margin: 0 auto;
`;

const S = {
    Wrapper,
    Poster,
    DescBox,
};
