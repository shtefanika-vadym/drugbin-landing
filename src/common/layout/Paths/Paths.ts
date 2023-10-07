export interface INavigation {
  route: string
  title: string
  icon?: any
}

export enum PathsEnum {
  home = '/home',
  collect = '/collect',
  history = '/history',
  documents = '/documents',
  donations = '/donations',
  create = '/create-new',
  values = '/#values',
  about = '/#about-us',
  proces = '/proces',
  contact = '/#contact',
}

export const NAVIGATION_ITEMS: INavigation[] = [
  {
    route: PathsEnum.home,
    title: 'Home',
  },
  {
    route: PathsEnum.history,
    title: 'History',
  },
  {
    route: PathsEnum.documents,
    title: 'Documents',
  },
  {
    route: PathsEnum.donations,
    title: 'Donation',
  },
]

export const NAVIGATION_ITEMS_RECYCLE: INavigation[] = [
  {
    route: PathsEnum.home,
    title: 'Home',
  },
]

export const NAVIGATION_DESKTOP: INavigation[] = [
  {
    route: PathsEnum.about,
    title: 'Despre noi',
  },
  {
    route: PathsEnum.values,
    title: 'Valorile noastre',
  },
  {
    route: PathsEnum.proces,
    title: 'Proces',
  },
  {
    route: PathsEnum.contact,
    title: 'Contact',
  },
]

export const NAVIGATION_MOBILE: INavigation[] = [
  {
    route: PathsEnum.about,
    title: 'Despre noi',
    icon: require('common/assets/about.svg'),
  },
  {
    route: PathsEnum.values,
    title: 'Valorile noastre',
  },
  {
    route: PathsEnum.proces,
    title: 'Proces',
  },
  {
    route: PathsEnum.contact,
    title: 'Contact',
  },
  {
    route: PathsEnum.collect,
    title: 'Colecteaza',
  },
]
