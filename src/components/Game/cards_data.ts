import { ICard, IMiddleCard, ISpecialCard } from './data.ts';

export enum Special {
  QUESTION = 'QUESTION',
  TAX_INCOME = 'TAX_INCOME',
  TAX_LUXURY = 'TAX_LUXURY',
}

export enum MonopolyType {
  PERFUME = 'perfume',
  CLOTHES = 'clothes',
  SOCIAL = 'social',
  DRINK = 'drink',
  AIRLINE = 'airline',
  RESTAURANT = 'restaurant',
  HOTEL = 'hotel',
  ELECTRONIC = 'electronic',
  CARS = 'cars',
}

export const CarMercedes: IMiddleCard = {
  type: MonopolyType.CARS,
  name: 'Mercedes',
  buy: 2000,
  pledge: 100,
  ransom: 1200,
  rent: [250, 500, 1000, 2000],
  upgrade: 500,
  url: '/cards/mercedes.svg',
};
export const CarAudi: IMiddleCard = {
  type: MonopolyType.CARS,
  name: 'Audi',
  buy: 2000,
  pledge: 100,
  ransom: 1200,
  rent: [250, 500, 1000, 2000],
  upgrade: 500,
  url: '/cards/audi.svg',
};
export const CarFord: IMiddleCard = {
  type: MonopolyType.CARS,
  name: 'Ford',
  buy: 2000,
  pledge: 100,
  ransom: 1200,
  rent: [250, 500, 1000, 2000],
  upgrade: 500,
  url: '/cards/ford.svg',
};
export const CarLandRover: IMiddleCard = {
  type: MonopolyType.CARS,
  name: 'Land Rover',
  buy: 2000,
  pledge: 100,
  ransom: 1200,
  rent: [250, 500, 1000, 2000],
  upgrade: 500,
  url: '/cards/land_rover.svg',
};

export const PerfumeChanel: ICard = {
  type: MonopolyType.PERFUME,
  name: 'Chanel',
  buy: 600,
  pledge: 300,
  ransom: 360,
  rent: [20, 100, 300, 900, 1600, 2500],
  upgrade: 500,
  url: '/cards/chanel.svg',
};
export const PerfumeBoss: ICard = {
  type: MonopolyType.PERFUME,
  name: 'Boss',
  buy: 600,
  pledge: 300,
  ransom: 360,
  rent: [40, 200, 600, 1800, 3200, 4500],
  upgrade: 500,
  url: '/cards/hugo_boss.svg',
};

export const ClothesAdidas: ICard = {
  type: MonopolyType.CLOTHES,
  name: 'Adidas',
  buy: 1000,
  pledge: 500,
  ransom: 600,
  rent: [60, 300, 900, 2700, 4000, 5500],
  upgrade: 500,
  url: '/cards/adidas.svg',
};
export const ClothesPuma: ICard = {
  type: MonopolyType.CLOTHES,
  name: 'Puma',
  buy: 1000,
  pledge: 500,
  ransom: 600,
  rent: [60, 300, 900, 2700, 4000, 5500],
  upgrade: 500,
  url: '/cards/puma.svg',
};
export const ClothesLacoste: ICard = {
  type: MonopolyType.CLOTHES,
  name: 'Lacoste',
  buy: 1200,
  pledge: 600,
  ransom: 720,
  rent: [80, 400, 1000, 3000, 4500, 6000],
  upgrade: 500,
  url: '/cards/lacoste.svg',
};

export const SocialVK: ICard = {
  type: MonopolyType.SOCIAL,
  name: 'Вконтакте',
  buy: 1400,
  pledge: 700,
  ransom: 840,
  rent: [100, 500, 1500, 4500, 6250, 7500],
  upgrade: 750,
  url: '/cards/vk.svg',
};
export const SocialFacebook: ICard = {
  type: MonopolyType.SOCIAL,
  name: 'Facebook',
  buy: 1400,
  pledge: 700,
  ransom: 840,
  rent: [100, 500, 1500, 4500, 6250, 7500],
  upgrade: 750,
  url: '/cards/facebook.svg',
};
export const SocialTwitter: ICard = {
  type: MonopolyType.SOCIAL,
  name: 'Twitter',
  buy: 1400,
  pledge: 800,
  ransom: 960,
  rent: [120, 600, 1800, 5000, 7000, 9000],
  upgrade: 750,
  url: '/cards/twitter.svg',
};

export const DrinkCocaCola: ICard = {
  type: MonopolyType.DRINK,
  name: 'Coca-Cola',
  buy: 1800,
  pledge: 900,
  ransom: 1080,
  rent: [140, 700, 2000, 5500, 7500, 9500],
  upgrade: 1000,
  url: '/cards/coca_cola.svg',
};
export const DrinkPepsi: ICard = {
  type: MonopolyType.DRINK,
  name: 'Pepsi',
  buy: 1800,
  pledge: 900,
  ransom: 1080,
  rent: [140, 700, 2000, 5500, 7500, 9500],
  upgrade: 1000,
  url: '/cards/pepsi.svg',
};
export const DrinkFanta: ICard = {
  type: MonopolyType.DRINK,
  name: 'Fanta',
  buy: 2000,
  pledge: 900,
  ransom: 1080,
  rent: [160, 800, 2200, 6000, 8000, 10000],
  upgrade: 1000,
  url: '/cards/fanta.svg',
};

export const AirlineAmerican: ICard = {
  type: MonopolyType.AIRLINE,
  name: 'American Airlines',
  buy: 2200,
  pledge: 1100,
  ransom: 1320,
  rent: [180, 900, 2500, 7000, 8750, 10500],
  upgrade: 1250,
  url: '/cards/american_airlines.svg',
};
export const AirlineLufthansa: ICard = {
  type: MonopolyType.AIRLINE,
  name: 'Lufthansa',
  buy: 2200,
  pledge: 1100,
  ransom: 1320,
  rent: [180, 900, 2500, 7000, 8750, 10500],
  upgrade: 1250,
  url: '/cards/lufthansa.svg',
};
export const AirlineBritish: ICard = {
  type: MonopolyType.AIRLINE,
  name: 'British Airways',
  buy: 2400,
  pledge: 1200,
  ransom: 1400,
  rent: [200, 1000, 3000, 7500, 9250, 11000],
  upgrade: 1250,
  url: '/cards/british_airways.svg',
};

export const RestaurantMacDonald: ICard = {
  type: MonopolyType.RESTAURANT,
  name: "Mac Donald's",
  buy: 2600,
  pledge: 1300,
  ransom: 1560,
  rent: [220, 1100, 3300, 8000, 9750, 11500],
  upgrade: 1250,
  url: '/cards/british_airways.svg', // TODO find mac donald's image
};
export const RestaurantBurgerKing: ICard = {
  type: MonopolyType.RESTAURANT,
  name: 'Burger King',
  buy: 2600,
  pledge: 1300,
  ransom: 1560,
  rent: [220, 1100, 3300, 8000, 9750, 11500],
  upgrade: 1250,
  url: '/cards/burger_king.svg',
};
export const RestaurantKFC: ICard = {
  type: MonopolyType.RESTAURANT,
  name: 'KFC',
  buy: 2800,
  pledge: 1300,
  ransom: 1560,
  rent: [240, 1200, 3600, 8500, 10250, 12000],
  upgrade: 1250,
  url: '/cards/kfc.svg',
};

export const HotelHolidayInn: ICard = {
  type: MonopolyType.HOTEL,
  name: 'Holiday Inn',
  buy: 3000,
  pledge: 1500,
  ransom: 1800,
  rent: [260, 1300, 3900, 9000, 11000, 12750],
  upgrade: 1750,
  url: '/cards/holiday_inn.svg',
};
export const HotelRadissonBlu: ICard = {
  type: MonopolyType.HOTEL,
  name: 'Radisson Blu',
  buy: 3000,
  pledge: 1500,
  ransom: 1800,
  rent: [260, 1300, 3900, 9000, 11000, 12750],
  upgrade: 1750,
  url: '/cards/radisson_blu.svg',
};
export const HotelNovotel: ICard = {
  type: MonopolyType.HOTEL,
  name: 'Novotel',
  buy: 3200,
  pledge: 1600,
  ransom: 1920,
  rent: [280, 1500, 4500, 10000, 12000, 14000],
  upgrade: 1750,
  url: '/cards/novotel.svg',
};

export const ElectronicApple: ICard = {
  type: MonopolyType.ELECTRONIC,
  name: 'Novotel',
  buy: 3200,
  pledge: 1600,
  ransom: 1920,
  rent: [280, 1500, 4500, 10000, 12000, 14000],
  upgrade: 1750,
  url: '/cards/apple.svg',
};

export const ElectronicNokia: ICard = {
  type: MonopolyType.ELECTRONIC,
  name: 'Nokia',
  buy: 3200,
  pledge: 1600,
  ransom: 1920,
  rent: [280, 1500, 4500, 10000, 12000, 14000],
  upgrade: 1750,
  url: '/cards/nokia.svg',
};

export const SpecialQuestion: ISpecialCard<Special.QUESTION> = {
  url: '/cards/chance.png',
  name: 'Question',
  type: Special.QUESTION,
};
export const SpecialTaxIncome: ISpecialCard<Special.TAX_INCOME> = {
  url: '/cards/tax_income.png',
  name: 'Tax Income',
  type: Special.TAX_INCOME,
};
export const SpecialTaxLuxury: ISpecialCard<Special.TAX_LUXURY> = {
  url: '/cards/tax_luxury.png',
  name: 'Tax Luxury',
  type: Special.TAX_LUXURY,
};
