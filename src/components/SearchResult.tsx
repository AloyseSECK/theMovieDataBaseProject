import { Link } from "react-router-dom";

export const SearchResult = ({ result }: { result: any}, index : number) => {
    return (
        <div className="search-result" style={{
            padding: '10px', 
            width : "24vw",  
            backgroundColor: "#374151",
        }}>
            <Link className="Link" to={"Movie/" + result.id} key={index}>
                {result.title}
            </Link>
        </div>
        
        
    );
}