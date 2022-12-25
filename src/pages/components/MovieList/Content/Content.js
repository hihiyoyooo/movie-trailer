import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";
import MovieCard from "../../../../components/Card/Card";
import usePopularMovieQuery from "../../../../queries/usePopularMovieQurey";

function MoveieListContent() {
    const {
        data: movieList,
        fetchNextPage,
        isFetching,
    } = usePopularMovieQuery();
    const [ref, inView] = useInView();
    // ref = useRef // html 요소 선택
    // inView // 감지됨에 따라 변화되는 옵션 값

    console.log(movieList);

    useEffect(() => {
        if (!inView || isFetching) return;
        fetchNextPage();
    }, [inView, fetchNextPage, isFetching]);

    return (
        <S.Wrapper>
            <S.Container>
                {movieList &&
                    movieList.pages.map((page, index) => (
                        <React.Fragment key={index}>
                            {page.data.results.map((movie, index) => (
                                <MovieCard movie={movie} key={index} />
                            ))}
                        </React.Fragment>
                    ))}
                <div ref={ref} />
            </S.Container>
        </S.Wrapper>
    );
}

export default MoveieListContent;

const Wrapper = styled.div`
    min-height: 100vh;
    width: calc(100% - 340px);
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 0 64px;
`;

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const S = {
    Wrapper,
    Container,
};
