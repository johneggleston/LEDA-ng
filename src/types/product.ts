import { ItemProperty } from '../common/types/ipfs-types';
import { Author } from './author';
import { Bid } from './bid';
import { Collection } from './collection';
import { HighestBid } from './highest-bid';
import { History } from './history';
import { Image } from './image';
import { Price } from './price';
import { Tag } from './tag';
import CollectionDifType from '../common/minting/enums/collection-type.enum';
import { ICollection } from './ICollection';
import { CollectionCreateType } from './collection-type';

export type CollectionType = {
  collectionName: string;
  collectionDescription?: string;
  type: CollectionDifType;
};

export type ItemRequest = {
  address: string;
  collection: CollectionCreateType;
  blob: File;
  isLazy: boolean;
  tags: string[];
  description: string;
  name: string;
  itemProperties: ItemProperty[];
  royalty: number;
  size: string;
};

export type Product2 = {
  id: number;
  title: string;
  slug: string;
  publishedAt: string;
  price: Price;
  likeCount: number;
  categories: string[];
  images: Image[];
  auctionDate?: string;
  authors: Author[];
  bitCount: number;
  owner: Author;
  collection: Collection;
  highestBid: HighestBid;
  tags: Tag[];
  bids: Bid[];
  history: History[];
};
