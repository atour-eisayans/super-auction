import { Item } from '../../item/domain/item';
import { LocalizedString } from '../../shared/domain/localized-string';
import { AuctionRuleKey } from '../../shared/enum/auction-rule-key.enum';
import { AuctionState } from '../../shared/enum/auction-state.enum';

export type AuctionLimit = Record<AuctionRuleKey, unknown>;

interface AuctionProperties {
  id: string;
  name: LocalizedString;
  item: Item;
  currentPrice?: number;
  startAt?: Date;
  endedAt?: Date;
  state: AuctionState;
  limits?: AuctionLimit;
}

export class Auction implements AuctionProperties {
  public readonly id: string;
  public readonly name: LocalizedString;
  public readonly item: Item;
  public readonly currentPrice?: number;
  public readonly startAt?: Date;
  public readonly endedAt?: Date;
  public readonly state: AuctionState;
  public readonly limits?: AuctionLimit;

  constructor(input: AuctionProperties) {
    this.id = input.id;
    this.name = input.name;
    this.item = input.item;
    this.currentPrice = input.currentPrice;
    this.startAt = input.startAt;
    this.endedAt = input.endedAt;
    this.state = input.state;
    this.limits = input.limits;
  }
}
