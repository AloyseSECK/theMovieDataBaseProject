import { Link } from "react-router-dom";

export const SearchResult = ({ result }: { result: any}, index : number) => {
    return (
        <div className="search-result" style={{
            border: '1px solid #ccc', 
            padding: '10px', 
            borderRadius: '5px',
            boxShadow: '0 0 5px rgba(0, 0, 0, 0.1)',
        }}>
            <Link to={"Movie/" + result.id} key={index}>
                {result.title}
            </Link>
        </div>
    );
}
;