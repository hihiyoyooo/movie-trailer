import { useEffect, useState } from "react";
import styled from "styled-components";
import MovieApi from "../../../apis/movieApi";
import MoveieListContent from "./Content/Content";
import MoveieListSidebar from "./Side/Side";
import MovieListTitle from "./Title/Title";

function MovieList() {
    const [movieList, setMovieList] = useState([]);
    useEffect(() => {
        MovieApi.getPopluarMovies({ params: { page: 1, language: "ko-ko" } })
            .then((res) => {
                setMovieList(res.data.results);
            })
            .catch((err) => {
                console.error(err);
            });
    }, []);

    return (
        <div>
            <MovieListTitle />
            <S.Container>
                <MoveieListSidebar />
                <MoveieListContent movieList={movieList} />
            </S.Container>
        </div>
    );
}

export default MovieList;

const Container = styled.div`
    display: flex;
`;
const S = {
    Container,
};
