import { useParams, Link } from "react-router-dom";
import { ActorsList, ActorCard, ActorImage, ActorInfo,} from "../design/actorsDesign/ActorsDesign"
import { Images, ImagesList, ImageCard, Credits, } from "../design/movieImagesDesign/MovieImagesDesign"
import {
  Presentation,
  PresentationCard,
  Title,
  SubTitle,
  DescriptionHeader,
  DescriptionFooter,
  MoviePageDesign,
  Main,
} from "../design/MoviePageDesign";


import { useMovieDetails } from "../hooks/useMovieDetails";
import { useMovieCredits } from "../hooks/useMovieCredits";
import { useMovieImages } from "../hooks/useMovieImages";

interface CastMember {
  name: string;
  profile_path: string;
  character: string;
}

const base_url_image = "https://image.tmdb.org/t/p/original";

export const MoviePage = () => {
  const { movieId } = useParams();

  if (!movieId) {
    return <span>Invalid movie ID</span>;
  }

  const movieDetails = useMovieDetails(movieId);
  const movieCredits = useMovieCredits(movieId);
  const movieImages = useMovieImages(movieId);

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

  const backgroundImgUrl = base_url_image + movieDetails.data.backdrop_path;
  return (
    <Main>
      <div
        style={{
          backgroundImage: `url(${backgroundImgUrl})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          filter: "blur(10px)",
          position: "fixed", 
          width: "100%",
          height: "100%",
          zIndex: -1, 
        }}
      />
      <MoviePageDesign>
        <div>
          <Link to={"/"}> Back </Link>
        </div>
  
        <Presentation>
          <PresentationCard
            src={base_url_image + movieDetails.data.poster_path}
            alt="img"
          />
          <div>
            <Title>{movieDetails.data.original_title} </Title>
            <DescriptionHeader>
              {" "}
              {movieDetails.data.overview}{" "}
            </DescriptionHeader>
            <DescriptionFooter>
              {movieDetails.data.genres.map(
                (results: any) => results.name + " "
              )}
              <br />
              {movieDetails.data.release_date}
            </DescriptionFooter>
          </div>
        </Presentation>
        <Credits>
          <SubTitle> Credits </SubTitle>
          <ActorsList>
            {movieCredits.data.cast.map(
              (results: CastMember, index: number) => (
                <ActorCard>
                  <ActorImage
                    key={index}
                    src={base_url_image + results.profile_path}
                  />
                  <ActorInfo> {results.name} </ActorInfo>
                  <ActorInfo> {results.character} </ActorInfo>
                </ActorCard>
              )
            )}
          </ActorsList>
        </Credits>
        <Images>
          <SubTitle> Images </SubTitle>
          <ImagesList>
            <ImageCard src={base_url_image + movieDetails.data.backdrop_path} />
            {movieImages.data.backdrops.map((results: any, index: number) => (
              <ImageCard
                key={index++}
                src={base_url_image + results.file_path}
              ></ImageCard>
            ))}
          </ImagesList>
        </Images>
      </MoviePageDesign>
    </Main>
  );
};