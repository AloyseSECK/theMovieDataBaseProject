import { useState } from 'react';
import { SearchBarDesign } from '../design/SearchBarDesign';
import { apiUrl } from '../services/baseUrls';
const bearerToken = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNTY3OTRlMDU1ZjRiMDA0OWVkYjAwNzYwNmU3YTJiMCIsInN1YiI6IjY1NGE1MDM3MWFjMjkyN2IyZjI3MjgxZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Zh5RQtn5g1oHuAfOyZmiNqBgPdAp5MWxY3jYPoJdjqM';


export const SearchBar = ({ setResults }: { setResults: React.Dispatch<React.SetStateAction<any>> }) => {
    const [_, setInput] = useState('');
    const HandleChange = async (input: string) => {
        setInput(input);
        const response =  await fetch(apiUrl + "search/movie?query=" + input , {
            method: 'GET',
            headers: {
              'Authorization': `Bearer ${bearerToken}`,
              'Content-Type': 'application/json',
            },
          })
        const data = await response.json();
        console.log(data.results);
        setResults(data.results);
    }

    return <SearchBarDesign type="text" placeholder="🔎 Search for movie" onChange={(e) => HandleChange(e.target.value)} />
};

