import { useParams, Link } from "react-router-dom";
import {
  Presentation,
  ActorsList,
  ActorCard,
  ActorImage,
  ActorInfo,
  Images,
  ImagesList,
  ImageCard,
  PresentationCard,
  Title,
  SubTitle,
  Credits,
  DescriptionHeader,
  DescriptionFooter,
  MoviePageDesign,
} from "../design/MoviePageDesign";
import {
  getMovieDetails,
  getMovieCredits,
  getMovieImages,
} from "../services/query";
import { useQuery } from "@tanstack/react-query";

interface CastMember {
  name: string;
  profile_path: string;
  character: string;
}
interface BackDrop {
  file_path: string;
}

const base_url_image = "https://image.tmdb.org/t/p/original";

export const MoviePage = () => {
  const { movieId } = useParams();

  if (!movieId) {
    return <span>Invalid movie ID</span>;
  }

  const movieDetails = useQuery({
    queryKey: ["movies"],
    queryFn: () => getMovieDetails(movieId),
  });

  const movieCredits = useQuery({
    queryKey: ["credits"],
    queryFn: () => getMovieCredits(movieId),
  });
  const movieImages = useQuery({
    queryKey: ["credits"],
    queryFn: () => getMovieImages(movieId),
  });

  if (
    movieDetails.isPending ||
    movieCredits.isPending ||
    movieImages.isPending
  ) {
    return <span>Loading...</span>;
  }

  // Penser à faire un switch
  if (movieDetails.isError) {
    return <span>Error: {movieDetails.error.message}</span>;
  }
  if (movieCredits.isError) {
    return <span>Error: {movieCredits.error.message}</span>;
  }
  if (movieImages.isError) {
    return <span>Error: {movieImages.error.message}</span>;
  }

  return (
    //return button logic
    <MoviePageDesign
      style={{}} // Mettre un Background Image
    >
      <div>
        <Link to={"/"}> Back </Link>
      </div>
      <Presentation>
        <PresentationCard
          src={base_url_image + movieDetails.data.poster_path}
          alt="img"
        />
        <div>
          <Title> Five Nights at Freddy's </Title>
          <DescriptionHeader>
            Recently fired and desperate for work, a troubled young man named
            Mike agrees to take a position as a night security guard at an
            abandoned theme restaurant: Freddy Fazbear's Pizzeria. But he soon
            discovers that nothing at Freddy's is what it seems Horror, Mystery
            25 oct. 2023
          </DescriptionHeader>
          <DescriptionFooter>
            Horror, Mystery
            <br />
            25 oct. 2023
          </DescriptionFooter>
        </div>
      </Presentation>
      <Credits>
        <SubTitle> Credits </SubTitle>
        <ActorsList>
          {movieCredits.data.cast.map((results: CastMember, index: number) => (
            <ActorCard>
              <ActorImage
                key={index}
                src={base_url_image + results.profile_path}
              />
              <ActorInfo> {results.name} </ActorInfo>
              <ActorInfo> {results.character} </ActorInfo>
            </ActorCard>
          ))}
        </ActorsList>
      </Credits>
      <Images>
        <SubTitle> Images </SubTitle>
        <ImagesList>
          <ImageCard src="https://images.unsplash.com/photo-1550684376-efcbd6e3f031?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          <ImageCard src="https://images.unsplash.com/photo-1550684376-efcbd6e3f031?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />

          {/* {movieImages.data.backdrops.map((results: BackDrop, index: number) => (
            <ImageCard
              key={index}
              src={results.file_path}
            ></ImageCard>
          ))} */}
        </ImagesList>
      </Images>
    </MoviePageDesign>
  );
};
