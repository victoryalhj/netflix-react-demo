import { useQuery } from "@tanstack/react-query";
import api from "../utils/api"

const fetchMovieDetail = async (movieId) => {
  try {
    const response = await api.get(`/movie/${movieId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const useMovieDetailQuery = (movieId) => {
  return useQuery({
    queryKey: ["movie-detail", movieId],
    queryFn: () => fetchMovieDetail(movieId),
    staleTime: 300000
  });
};