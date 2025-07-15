import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

export default function Slider() {
  const [movies, setMovies] = useState([]);
  const API_KEY = '3f236ba0';

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?s=Avengers&apikey=${API_KEY}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.Search) {
          const movieData = data.Search.map((movie, index) => ({
            id: movie.imdbID,
            title: movie.Title,
            img: movie.Poster,
            index: index + 1,
          }));
          setMovies(movieData);
        } else {
          console.error('No movies found:', data.Error);
        }
      })
      .catch((error) => console.error('Error fetching movies:', error));
  }, []);

  return (
    <div className="w-full bg-[#000000] py-4">
      <div className="relative container">
        <h2 className="text-white text-3xl md:text-4xl font-bold py-4 mt-10">Trending Now</h2>
        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={16}
          slidesPerView={4}
          breakpoints={{
            1280: { slidesPerView: 4 },
            1024: { slidesPerView: 3 },
            768: { slidesPerView: 3 },
            540: { slidesPerView: 2 },
            0: { slidesPerView: 1 },
          }}
          className="w-full py-10"
        >
          {movies.map((movie) => (
            <SwiperSlide key={movie.id}>
              <div className="relative flex flex-col items-center my-10 mx-5 transition-transform duration-300 hover:scale-105 z-10">
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-80 z-8"></div>
                <span
                  className="absolute left-20 sm:left-1 bottom-16 z-20"
                  style={{
                    WebkitTextStroke: '2px white',
                    color: 'black',
                    fontSize: '120px',
                    fontWeight: 900,
                    lineHeight: '1',
                  }} >
                  {movie.index}
                </span>
                <img
                  src={
                    movie.img !== 'N/A'
                      ? movie.img
                      : 'https://via.placeholder.com/200x280?text=No+Image'
                  }
                  alt={movie.title}
                  className="rounded-md object-cover shadow-md w-[250px]  md:w-[230px] h-[300px] md:h-[300px] z-10"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style>{`
        .swiper-button-next,
        .swiper-button-prev {
          color: white;
          background-color: rgba(255, 255, 255, 0.1);
          width: 20px;
          height: 110px;
          border-radius: 5px;
          top: 50%;
          transform: translateY(-50%);
        }

        .swiper-button-next::after,
        .swiper-button-prev::after {
          font-size: 18px;
          font-weight: bold;
        }

        .swiper-button-next:hover,
        .swiper-button-prev:hover {
          background-color: rgba(255, 255, 255, 0.3);
        }

        .swiper-slide {
          overflow: visible;
        }
      `}</style>
    </div>
  );
}
