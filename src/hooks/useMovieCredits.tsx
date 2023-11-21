import { useQuery } from "@tanstack/react-query";
import { getMovieCredits } from "../services/query";


export const useMovieCredits = (movieId : string) => {
    return useQuery({
        queryKey: ["credits_" + movieId],
        queryFn: () => getMovieCredits(movieId),
      });
    }