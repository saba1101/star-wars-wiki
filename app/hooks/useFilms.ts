// "use client";

// import { useState } from "react";

// type Film = Record<string, unknown>;

// export const useFilms = () => {
//   const [films, setFilms] = useState<Film[]>([]);
//   fetch("https://swapi.info/api/planets/1").then((rs) => {
//     rs.json().then((data) => {
//       console.log(data);
//       setFilms(Array.isArray(data) ? data : [data]);
//     });
//   });
//   return JSON.stringify(films);
// };
