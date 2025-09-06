import useGenres from "../hooks/useGenres";

const GenreList = () => {
    const { genres } = useGenres(); // Access 'genres' from the hook

    return (
        <ul>
           {genres.map((genre) => <li key={genre.id}>{genre.name}</li>)}
        </ul>
    );
}

export default GenreList;