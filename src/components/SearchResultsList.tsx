import { SearchResult } from "./SearchResult";

export const SearchResultsList = ({ results }: { results: any[] }) => {
    return (
        <div className="results-list" style = {{overflowY:"auto", maxHeight:"300px"}}>
            {results.map((result, id) => {
                return <SearchResult result={result} key={id} />;
            })}
        </div>
    );
};