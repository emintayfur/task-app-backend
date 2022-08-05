import { STATIC_PATH_NAME } from '../constants/static';

export const cleanPath = (path) => {
  let returnedPath = path;
  if (returnedPath[0] === '/') returnedPath = path.slice(1);

  return returnedPath;
};

export const pathWithStaticFolder = (path: string) =>
  `${cleanPath(STATIC_PATH_NAME)}/${cleanPath(path)}`;
