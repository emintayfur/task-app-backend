import PriorityId from '../enums/priorityId';
import { pathWithStaticFolder } from '../utils/url';

export interface IPriority {
  id: PriorityId;
  name: string;
  linearClassName?: string;
  prefixEmoji?: string;
  color?: {
    primary: string;
    secondary: string;
  };
  faviconPath?: {
    svg: string;
    png: string;
  };
  level: 1 | 2 | 3 | 4; // 4 En yüksek öncelikli; 1 En düşük öncelikli.
}

export const PRIORITY_URGENT: IPriority = {
  id: PriorityId.urgent,
  prefixEmoji: '💣',
  name: 'Acil',
  linearClassName: 'bg-linear-red',
  color: {
    primary: '#C86E5A',
    secondary: '#FFDED7',
  },
  faviconPath: {
    svg: pathWithStaticFolder('favicon/red/icon.svg'),
    png: pathWithStaticFolder('favicon/red/icon.png'),
  },
  level: 4,
};

export const PRIORITY_IMPORTANT: IPriority = {
  id: PriorityId.important,
  prefixEmoji: '🛑',
  name: 'Önemli',
  linearClassName: 'bg-linear-orange',
  color: {
    primary: '#DC8B2C',
    secondary: '#FFE1BE',
  },
  faviconPath: {
    svg: pathWithStaticFolder('favicon/orange/icon.svg'),
    png: pathWithStaticFolder('favicon/orange/icon.png'),
  },
  level: 3,
};

export const PRIORITY_NORMAL: IPriority = {
  id: PriorityId.normal,
  prefixEmoji: '📌',
  name: 'Normal',
  linearClassName: 'bg-linear-blue',
  color: {
    primary: '#6C63FF',
    secondary: '#D7E1FE',
  },
  faviconPath: {
    svg: pathWithStaticFolder('favicon/blue/icon.svg'),
    png: pathWithStaticFolder('favicon/blue/icon.png'),
  },
  level: 2,
};

const Priority: { [keys in PriorityId]: IPriority } = {
  [PriorityId.urgent]: PRIORITY_URGENT,
  [PriorityId.important]: PRIORITY_IMPORTANT,
  [PriorityId.normal]: PRIORITY_NORMAL,
};

export default Priority;
