import { days as daysV1, type Day } from './trip';
import { daysV2 } from './trip-v2';

export interface Version {
  id: 'v1' | 'v2';
  name: string;
  short: string;
  summary: string;
  base: string;
  days: Day[];
}

export const versions: Version[] = [
  {
    id: 'v1',
    name: 'Plan 1',
    short: 'Taipei first · car from Chiayi',
    summary: 'Taipei on day 1, high-speed rail to Chiayi and a rental car from there, back by HSR from Taichung on the last day.',
    base: 'Taipei (28 Nov) · Alishan (29 & 30 Nov) · Sun Moon Lake (1 Dec)',
    days: daysV1,
  },
  {
    id: 'v2',
    name: 'Plan 2',
    short: 'Car from the airport · Taipei last',
    summary: 'Rental car from Taoyuan Airport on arrival, Taichung sights on the way to Chiayi, Taipei sightseeing on the last day.',
    base: 'Chiayi (28 Nov) · Alishan (29 & 30 Nov) · Sun Moon Lake (1 Dec)',
    days: daysV2,
  },
];
