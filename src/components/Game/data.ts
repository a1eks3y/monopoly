import {
  AirlineAmerican,
  AirlineBritish,
  AirlineLufthansa,
  CarAudi,
  CarFord,
  CarLandRover,
  CarMercedes,
  ClothesAdidas,
  ClothesLacoste,
  ClothesPuma,
  DrinkCocaCola,
  DrinkFanta,
  DrinkPepsi,
  ElectronicApple,
  ElectronicNokia,
  HotelHolidayInn,
  HotelNovotel,
  HotelRadissonBlu,
  MonopolyType,
  PerfumeBoss,
  PerfumeChanel,
  RestaurantBurgerKing,
  RestaurantKFC,
  RestaurantMacDonald,
  SocialFacebook,
  SocialTwitter,
  SocialVK,
  Special,
  SpecialQuestion,
  SpecialTaxIncome,
  SpecialTaxLuxury,
} from './cards_data.ts';

interface IBaseCard {
  url: string;
  name: string;
}

export interface ICard extends IBaseCard {
  type: MonopolyType;
  upgrade: number;
  buy: number;
  pledge: number;
  ransom: number;
  rent: [number, number, number, number, number, number];
}

export interface IMiddleCard extends IBaseCard {
  type: MonopolyType;
  upgrade: number;
  buy: number;
  pledge: number;
  ransom: number;
  rent: [number, number, number, number];
}

export interface ISpecialCard<T extends Special = Special> extends IBaseCard {
  type: T;
}

type ISpecialCards = {
  [T in Special]: ISpecialCard<T>;
};

interface WithColor<T> {
  cards: T;
  fill: string;
}

export const gameData: {
  sortedCards: Omit<Record<MonopolyType, WithColor<ICard[]>>, MonopolyType.CARS> & {
    [MonopolyType.CARS]: WithColor<Record<'top' | 'left' | 'right' | 'bottom', IMiddleCard>>;
    specialCards: ISpecialCards;
  };
  board: Record<'top' | 'left' | 'right' | 'bottom', (ICard | ISpecialCard | IMiddleCard)[]>;
} = {
  sortedCards: {
    [MonopolyType.PERFUME]: {
      cards: [PerfumeChanel, PerfumeBoss],
      fill: 'rgb(236, 135, 193)',
    },
    [MonopolyType.CLOTHES]: {
      cards: [ClothesAdidas, ClothesPuma, ClothesLacoste],
      fill: 'rgb(224, 180, 57)',
    },
    [MonopolyType.SOCIAL]: {
      cards: [SocialVK, SocialFacebook, SocialTwitter],
      fill: 'rgb(55, 188, 157)',
    },
    [MonopolyType.DRINK]: {
      cards: [DrinkCocaCola, DrinkPepsi, DrinkFanta],
      fill: 'rgb(75, 137, 220)',
    },
    [MonopolyType.AIRLINE]: {
      cards: [AirlineAmerican, AirlineLufthansa, AirlineBritish],
      fill: 'rgb(140, 193, 82)',
    },
    [MonopolyType.RESTAURANT]: {
      cards: [RestaurantMacDonald, RestaurantBurgerKing, RestaurantKFC],
      fill: 'rgb(79, 193, 233)',
    },
    [MonopolyType.HOTEL]: {
      cards: [HotelHolidayInn, HotelRadissonBlu, HotelNovotel],
      fill: 'rgb(150, 123, 220)',
    },
    [MonopolyType.ELECTRONIC]: {
      cards: [ElectronicApple, ElectronicNokia],
      fill: 'rgb(101, 109, 120)',
    },
    [MonopolyType.CARS]: {
      fill: 'rgb(218, 69, 83)',
      cards: {
        top: CarMercedes,
        right: CarAudi,
        bottom: CarFord,
        left: CarLandRover,
      },
    },
    specialCards: {
      [Special.QUESTION]: SpecialQuestion,
      [Special.TAX_INCOME]: SpecialTaxIncome,
      [Special.TAX_LUXURY]: SpecialTaxLuxury,
    },
  },
  board: {
    top: [
      PerfumeChanel,
      SpecialQuestion,
      PerfumeBoss,
      SpecialTaxIncome,
      CarMercedes,
      ClothesAdidas,
      SpecialQuestion,
      ClothesPuma,
      ClothesLacoste,
    ],
    right: [
      SocialVK,
      SpecialQuestion,
      SocialFacebook,
      SocialTwitter,
      CarAudi,
      DrinkCocaCola,
      SpecialQuestion,
      DrinkPepsi,
      DrinkFanta,
    ],
    bottom: [
      AirlineAmerican,
      SpecialQuestion,
      AirlineLufthansa,
      AirlineBritish,
      CarFord,
      RestaurantMacDonald,
      RestaurantBurgerKing,
      SpecialQuestion,
      RestaurantKFC,
    ],
    left: [
      HotelHolidayInn,
      HotelRadissonBlu,
      SpecialQuestion,
      HotelNovotel,
      CarLandRover,
      SpecialTaxLuxury,
      ElectronicApple,
      SpecialQuestion,
      ElectronicNokia,
    ],
  },
};
