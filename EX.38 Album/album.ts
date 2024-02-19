function make_album(artist: string, title: string, tracks?: number) {
    const album: { artist: string, title: string, tracks?: number } = {
        artist: artist,
        title:  title,
    };
    if (tracks ==undefined) {
        return album;
    } else {
        album.tracks = tracks;
        return album;
    }
}
// Function to create an album with artist and title
const album1 = make_album('Asim Azhar', 'Jo Tu Na Mila Mujhe');
console.log(album1);
// Function call to create an album without specifying tracks
const album2 = make_album('Artist 1', 'Album Title 1');
console.log(album2);
// Function call to create an album with tracks
const album3 = make_album('Atif Aslam', 'Rafta Rafta', 10);
  