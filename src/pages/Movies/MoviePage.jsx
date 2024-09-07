import React, {useEffect,useState} from "react";
import { useSearchMovieQuery } from "../../hooks/useSearchMovie";
import { useNavigate, useSearchParams } from "react-router-dom";
import MovieCard from "../../common/MovieCard/MovieCard";
import { Container, Row, Col } from "react-bootstrap";
import "./MoviePage.style.css"
import ReactPaginate from 'react-paginate';

// 경로 2개
// nav바에서 클릭 => popularMovie 보여줌
// keyword 입력 => keyword관련 영화보여줌
// 페이지네이션 설치
// page state 만들기
// 페이지네이션 클릭할때마다 page 바꿔주기
// page 값이 바뀔때마다 useSearchMovie에 page까지 넣어서 fetch

const MoviePage = () => {
  const [query] = useSearchParams();
  const [page,setPage] = useState(1);
  const keyword = query.get("q");
  const navigate = useNavigate();

  const { data, isLoading, isError, error } = useSearchMovieQuery({
    keyword,
    page,
   });

  const handlePageClick = (selected) => {
    setPage(selected.selected + 1);
  };

  useEffect(() => {
    if(!isLoading && data?.results?.length === 0) {
      const timer = setTimeout(() => {
        navigate("/");  
      },3000);

      return () => clearTimeout(timer);
    }
  }, [isLoading, isError, data, navigate]);
  
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  const movies = data?.results || [];

  return (
    <Container>
      <Row className="movieBox">
        {movies.length > 0 && (
        <Col lg={4} xs={12}>
          Filter
        </Col>
        )}
        <Col lg={8} xs={12}>
          <Row>
            {/* 검색 결과가 있을 때 */}
            {movies.length > 0 ? (
              movies.map((movie, index) => (
                <Col key={index} lg={4} xs={12}>
                  <MovieCard movie={movie} />
                </Col>
              ))
            ) : (
              /* 검색 결과가 없을 때 */
              <Col xs={12}>
                <div className="noResult">No results found for "{keyword}". You will be redirected to the homepage in 3 seconds.</div>
              </Col>
            )}
          </Row>
          <ReactPaginate className="pagination"
            nextLabel="next >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            marginPagesDisplayed={2}
            pageCount={data?.total_pages || 0}
            previousLabel="< previous"
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="page-item"
            previousLinkClassName="page-link"
            nextClassName="page-item"
            nextLinkClassName="page-link"
            breakLabel="..."
            breakClassName="page-item"
            breakLinkClassName="page-link"
            containerClassName="pagination"
            activeClassName="active"
            renderOnZeroPageCount={null}
            forcePage={page-1}
            />
        </Col>
      </Row>
    </Container>
  );
};

export default MoviePage;
