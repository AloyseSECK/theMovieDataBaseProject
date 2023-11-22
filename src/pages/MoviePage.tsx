import { useParams, Link } from "react-router-dom";
import {
  ActorsList,
  ActorCard,
  ActorImage,
  ActorInfo,
} from "../design/actorsDesign/ActorsDesign";
import {
  Images,
  ImagesList,
  ImageCard,
  Credits,
} from "../design/movieImagesDesign/MovieImagesDesign";
import {
  Presentation,
  PresentationCard,
  Title,
  SubTitle,
  DescriptionHeader,
  DescriptionFooter,
  MoviePageDesign,
  Main,
  LeftArrow,
} from "../design/MoviePageDesign";

import { useMovieDetails } from "../hooks/useMovieDetails";
import { useMovieCredits } from "../hooks/useMovieCredits";
import { useMovieImages } from "../hooks/useMovieImages";

interface CastMember {
  name: string;
  profile_path: string;
  character: string;
}
interface CrewMember {
  name: string;
  profile_path: string;
  job: string;
}
const base_url_image = "https://image.tmdb.org/t/p/original";
const defaultImageUrl = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png";

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
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImgUrl})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          filter: "blur(15px)",
          position: "fixed",
          width: "100%",
          height: "100%",
          zIndex: -1,
        }}
      />
      <MoviePageDesign>
        <div style={{ marginBottom: "15px" }} className="leftArrow">
          <Link to={"/"} style={{ color: "white", fill: "white" }}>
            {" "}
            {LeftArrow} Back{" "}
          </Link>
        </div>

        <Presentation>
          <PresentationCard
            src={base_url_image + movieDetails.data.poster_path}
            alt="img"
          />
          <div>
            <Title>{movieDetails.data.original_title} </Title>
            <DescriptionHeader>{movieDetails.data.overview}</DescriptionHeader>
            <DescriptionFooter>
              {formatGenres(movieDetails.data.genres)}
              <br />
              {formatDate(movieDetails.data.release_date)}
            </DescriptionFooter>
          </div>
        </Presentation>
        <Credits>
          <SubTitle> Credits </SubTitle>
          <ActorsList>
            {movieCredits.data.cast.slice(0, 10).map((results: CastMember, index: number) => (
                <ActorCard key={index}>
                  <ActorImage src={base_url_image + results.profile_path} />
                  <ActorInfo> {results.name} </ActorInfo>
                  <ActorInfo> {results.character} </ActorInfo>
                </ActorCard>
              ))}
              {movieCredits.data.crew
                .filter((member: CrewMember) => member.job === "Director" || member.job === "Original Music Composer")
                .map((results: CrewMember, index: number) => (
                  <ActorCard key={index}>
                    <ActorImage src={results.profile_path ? base_url_image + results.profile_path : defaultImageUrl} />
                    <ActorInfo> {results.name} </ActorInfo>
                    <ActorInfo> {results.job} </ActorInfo>
                  </ActorCard>
                ))
              }
          </ActorsList>
        </Credits>
        <Images>
          <SubTitle> Images </SubTitle>
          <ImagesList>
            {movieImages.data.backdrops.map((results: any, index: number) => (
              <ImageCard
                key={index++}
                src={base_url_image + results.file_path}
              />
            ))}
          </ImagesList>
        </Images>
      </MoviePageDesign>
    </Main>
  );
};

export function formatDate(dateString: string): string {
  const options: Intl.DateTimeFormatOptions = {
    day: "numeric",
    month: "short",
    year: "numeric",
  };
  const date = new Date(dateString);
  return date.toLocaleDateString("fr-FR", options);
}

function formatGenres(genres: any[]): string {
  return genres.map((genre) => genre.name).join(", ");
}
