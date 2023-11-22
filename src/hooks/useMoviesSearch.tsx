import { useQuery } from "@tanstack/react-query";
import { getMoviesSearch } from "../services/query";

export const useMoviesSearch = (input : string) =>{
    return useQuery({
        queryKey: [input],
        queryFn: () => getMoviesSearch(input),
      });
}