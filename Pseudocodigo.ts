export class RegisteredUser {
  email: string;
  password: string;
  registration: any;
  adult: boolean;
  private services: PayableService[];

  constructor(
    email: string,
    pw: string,
    reg: any,
    adult: boolean,
    s: PayableService[]
  ) {
    this.email = email;
    this.password = pw;
    this.registration = reg;
    this.adult = adult;
    this.services = s;
  }

  getServices(): PayableService[] {
    return this.services;
  }
}

interface PayableService {
  getServicePrice(): number;
}

type Timestamp = any;

//////////////// another file

export class Service {
  timestamp: Timestamp;
  private priceableMultimediaContent: PriceableMultimediaContent;

  constructor(priceableMultimediaContent: PriceableMultimediaContent) {
    this.priceableMultimediaContent = priceableMultimediaContent;
  }

  getMultimediaContent(): PriceableMultimediaContent {
    return this.priceableMultimediaContent;
  }

  getServicePrice(): number {
    return this.getMultimediaContent().multimediaContentPrice.getFinalPrice();
  }
}

///////////////// another file

export class PriceableMultimediaContent {
  multimediaContentPrice: MultimediaContentPrice;
  content: MultimediaContent;

  constructor(price: MultimediaContentPrice, content: MultimediaContent) {
    this.multimediaContentPrice = price;
    this.content = content;
  }
}

export class MultimediaContent {
  // fields title/duration/adult/...
}

interface PremiumMarkup {
  addPremiumMarkup(base: number): number;
}

export class MultimediaContentPrice {
  private price: number;
  private premiumMarkup?: PremiumMarkup;

  constructor(price: number, premium?: PremiumMarkup) {
    this.price = price;
    this.premiumMarkup = premium;
  }

  getFinalPrice(): number {
    return this.premiumMarkup
      ? this.premiumMarkup.addPremiumMarkup(this.price)
      : this.price;
  }
}

/////////////////////// another file

export class PremiumContentPrice {
  private additionalFee: number;

  constructor(fee: number) {
    this.additionalFee = fee;
  }

  addPremiumMarkup(base: number): number {
    return base + this.additionalFee;
  }
}

/////////////////////// another file

export class TotalPriceCalculator {
  getTotal(registeredUser: RegisteredUser): number {
    return registeredUser
      .getServices()
      .reduce((accum, service) => accum + service.getServicePrice(), 0);
  }
}
