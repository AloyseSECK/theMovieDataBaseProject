import { useQuery } from "@tanstack/react-query";
import { getMovieImages } from "../services/query";

export const useMovieImages = (movieId : string) =>{
    return useQuery({
        queryKey: ["images_" + movieId],
        queryFn: () => getMovieImages(movieId),
      });
}