import { useQuery } from "@tanstack/react-query";
import { getMovieDetails } from "../services/query";

export const useMovieDetails = (movieId: string) => {  
    return useQuery({
        queryKey: ["movies_"+ movieId],
        queryFn: () => getMovieDetails(movieId),
      });   
}