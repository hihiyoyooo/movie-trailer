import { useInfiniteQuery } from "@tanstack/react-query";
import MovieApi from "../apis/movieApi";
import qureyKey from "../conts/qureKey";

const usePopularMovieQuery = () => {
    const { data, fetchNextPage } = useInfiniteQuery(
        [qureyKey.POPLUAR_MOVIE_LIST],
        (
            { papgParam = 1 } // 쿼리키
        ) => MovieApi.getPopluarMovies({ params: { page: papgParam } }), // 콜백함수
        {
            // 다음 요청 시 페이지 + 1
            getNextPageParam: (lastPage) => {
                return lastPage.data.page + 1;
            },
        }
    );
    return { data, fetchNextPage };
};

export default usePopularMovieQuery;
