import React, { useEffect, useState } from 'react';

const OMDB_API_KEY = '3f236ba0'; // Replace with your actual OMDb API key

const ArchiveMovies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchMovies = async () => {
    setLoading(true);
    const res = await fetch(
      'https://archive.org/advancedsearch.php?q=collection%3Amovies&fl[]=identifier,title,year&rows=10&page=1&output=json'
    );
    const data = await res.json();
    const docs = data.response.docs;

    const moviesWithPosters = await Promise.all(
      docs.map(async (item) => {
        const archiveId = item.identifier;
        const archiveTitle = item.title;

        // Get video file
        const metaRes = await fetch(`https://archive.org/metadata/${archiveId}`);
        const metaData = await metaRes.json();
        const files = metaData.files;

        const mp4 = files.find((f) => f.name.endsWith('.mp4'));
        const downloadUrl = mp4
          ? `https://archive.org/download/${archiveId}/${mp4.name}`
          : null;

        // Get real poster & title from OMDb
        const omdbRes = await fetch(
          `https://www.omdbapi.com/?t=${encodeURIComponent(archiveTitle)}&apikey=${OMDB_API_KEY}`
        );
        const omdb = await omdbRes.json();

        const realTitle = omdb.Response === 'True' ? omdb.Title : archiveTitle;
        const poster =
          omdb.Response === 'True' && omdb.Poster !== 'N/A'
            ? omdb.Poster
            : 'https://via.placeholder.com/300x450?text=No+Poster';
        const year = omdb.Response === 'True' ? omdb.Year : item.year;

        return {
          title: realTitle,
          poster,
          year,
          downloadUrl,
          pageUrl: `https://archive.org/details/${archiveId}`,
        };
      })
    );

    setMovies(moviesWithPosters);
    setLoading(false);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">🎬 Archive.org + OMDb Movies</h1>
      {loading ? (
        <p>Loading movies...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {movies.map((movie, index) => (
            <div key={index} className="bg-white rounded shadow overflow-hidden">
              <img
                src={movie.poster}
                alt={movie.title}
                className="w-full h-[400px] object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-bold">{movie.title}</h2>
                <p className="text-sm text-gray-600 mb-2">Year: {movie.year || 'Unknown'}</p>
                <div className="flex gap-2">
                  <a
                    href={movie.pageUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 text-sm"
                  >
                    Watch
                  </a>
                  {movie.downloadUrl && (
                    <a
                      href={movie.downloadUrl}
                      download
                      className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 text-sm"
                    >
                      Download
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ArchiveMovies;
