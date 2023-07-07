export const baseUrl = "https://api.themoviedb.org/3";
export const apiKey = "e24d698170aac0f3ff4cc4a78e0b5339"
export const trendingMoviesEndpoint = `/trending/movie/week?api_key=${apiKey}`
export const popularMoviesEndpoint = `/movie/top_rated?api_key=${apiKey}`
export const popularSeriesEndpoint = `/tv/popular?api_key=${apiKey}`
export const popularAnimationsEndpoint = `/discover/movie?api_key=${apiKey}&with_genres=16&sort_by=popularity.desc`

export const baseImgUrl = "https://image.tmdb.org/t/p/original"