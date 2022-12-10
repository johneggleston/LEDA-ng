/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from 'ethers';
import type { FunctionFragment, Result, EventFragment } from '@ethersproject/abi';
import type { Listener, Provider } from '@ethersproject/providers';
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from '../../../common/types/CommonContractTypes';

export interface MarketplaceInterface extends utils.Interface {
  functions: {
    'buyItem(uint256)': FunctionFragment;
    'changeItemStatus(uint256,uint8)': FunctionFragment;
    'feePercentage()': FunctionFragment;
    'getContractBalance()': FunctionFragment;
    'getItemsCount()': FunctionFragment;
    'getItemsSold()': FunctionFragment;
    'getListedAgain(uint256,uint256)': FunctionFragment;
    'getListingFees(uint256)': FunctionFragment;
    'initialize(uint256)': FunctionFragment;
    'items(uint256)': FunctionFragment;
    'listingFeePercentage()': FunctionFragment;
    'makeItem(address,uint256,uint256)': FunctionFragment;
    'onERC721Received(address,address,uint256,bytes)': FunctionFragment;
    'owner()': FunctionFragment;
    'pause()': FunctionFragment;
    'paused()': FunctionFragment;
    'proxiableUUID()': FunctionFragment;
    'renounceOwnership()': FunctionFragment;
    'setFeePercentage(uint256)': FunctionFragment;
    'setListingFeesPercentage(uint256)': FunctionFragment;
    'transferOwnership(address)': FunctionFragment;
    'unpause()': FunctionFragment;
    'upgradeTo(address)': FunctionFragment;
    'upgradeToAndCall(address,bytes)': FunctionFragment;
    'withdraw()': FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | 'buyItem'
      | 'changeItemStatus'
      | 'feePercentage'
      | 'getContractBalance'
      | 'getItemsCount'
      | 'getItemsSold'
      | 'getListedAgain'
      | 'getListingFees'
      | 'initialize'
      | 'items'
      | 'listingFeePercentage'
      | 'makeItem'
      | 'onERC721Received'
      | 'owner'
      | 'pause'
      | 'paused'
      | 'proxiableUUID'
      | 'renounceOwnership'
      | 'setFeePercentage'
      | 'setListingFeesPercentage'
      | 'transferOwnership'
      | 'unpause'
      | 'upgradeTo'
      | 'upgradeToAndCall'
      | 'withdraw'
  ): FunctionFragment;

  encodeFunctionData(functionFragment: 'buyItem', values: [PromiseOrValue<BigNumberish>]): string;
  encodeFunctionData(
    functionFragment: 'changeItemStatus',
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(functionFragment: 'feePercentage', values?: undefined): string;
  encodeFunctionData(functionFragment: 'getContractBalance', values?: undefined): string;
  encodeFunctionData(functionFragment: 'getItemsCount', values?: undefined): string;
  encodeFunctionData(functionFragment: 'getItemsSold', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'getListedAgain',
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: 'getListingFees',
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: 'initialize',
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(functionFragment: 'items', values: [PromiseOrValue<BigNumberish>]): string;
  encodeFunctionData(functionFragment: 'listingFeePercentage', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'makeItem',
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: 'onERC721Received',
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(functionFragment: 'owner', values?: undefined): string;
  encodeFunctionData(functionFragment: 'pause', values?: undefined): string;
  encodeFunctionData(functionFragment: 'paused', values?: undefined): string;
  encodeFunctionData(functionFragment: 'proxiableUUID', values?: undefined): string;
  encodeFunctionData(functionFragment: 'renounceOwnership', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'setFeePercentage',
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: 'setListingFeesPercentage',
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: 'transferOwnership',
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: 'unpause', values?: undefined): string;
  encodeFunctionData(functionFragment: 'upgradeTo', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(
    functionFragment: 'upgradeToAndCall',
    values: [PromiseOrValue<string>, PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(functionFragment: 'withdraw', values?: undefined): string;

  decodeFunctionResult(functionFragment: 'buyItem', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'changeItemStatus', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'feePercentage', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getContractBalance', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getItemsCount', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getItemsSold', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getListedAgain', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getListingFees', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'initialize', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'items', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'listingFeePercentage', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'makeItem', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'onERC721Received', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'owner', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'pause', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'paused', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'proxiableUUID', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'renounceOwnership', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setFeePercentage', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setListingFeesPercentage', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'transferOwnership', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'unpause', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'upgradeTo', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'upgradeToAndCall', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'withdraw', data: BytesLike): Result;

  events: {
    'AdminChanged(address,address)': EventFragment;
    'BeaconUpgraded(address)': EventFragment;
    'Initialized(uint8)': EventFragment;
    'LogBuyItem(uint256,address,uint256,uint256,address,address)': EventFragment;
    'LogChangePrice(uint256,address,uint256)': EventFragment;
    'LogChangeStatus(uint256,address,uint8)': EventFragment;
    'LogCreateItem(uint256,address,uint256,uint256,address,address)': EventFragment;
    'LogSetFeePercentage(uint256)': EventFragment;
    'LogSettListingFeesPercentage(uint256)': EventFragment;
    'OwnershipTransferred(address,address)': EventFragment;
    'Paused(address)': EventFragment;
    'Unpaused(address)': EventFragment;
    'Upgraded(address)': EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: 'AdminChanged'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'BeaconUpgraded'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'Initialized'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'LogBuyItem'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'LogChangePrice'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'LogChangeStatus'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'LogCreateItem'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'LogSetFeePercentage'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'LogSettListingFeesPercentage'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'OwnershipTransferred'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'Paused'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'Unpaused'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'Upgraded'): EventFragment;
}

export interface AdminChangedEventObject {
  previousAdmin: string;
  newAdmin: string;
}
export type AdminChangedEvent = TypedEvent<[string, string], AdminChangedEventObject>;

export type AdminChangedEventFilter = TypedEventFilter<AdminChangedEvent>;

export interface BeaconUpgradedEventObject {
  beacon: string;
}
export type BeaconUpgradedEvent = TypedEvent<[string], BeaconUpgradedEventObject>;

export type BeaconUpgradedEventFilter = TypedEventFilter<BeaconUpgradedEvent>;

export interface InitializedEventObject {
  version: number;
}
export type InitializedEvent = TypedEvent<[number], InitializedEventObject>;

export type InitializedEventFilter = TypedEventFilter<InitializedEvent>;

export interface LogBuyItemEventObject {
  _itemId: BigNumber;
  _nft: string;
  _tokenId: BigNumber;
  _price: BigNumber;
  _seller: string;
  _buyer: string;
}
export type LogBuyItemEvent = TypedEvent<
  [BigNumber, string, BigNumber, BigNumber, string, string],
  LogBuyItemEventObject
>;

export type LogBuyItemEventFilter = TypedEventFilter<LogBuyItemEvent>;

export interface LogChangePriceEventObject {
  _itemId: BigNumber;
  _sender: string;
  _newPrice: BigNumber;
}
export type LogChangePriceEvent = TypedEvent<
  [BigNumber, string, BigNumber],
  LogChangePriceEventObject
>;

export type LogChangePriceEventFilter = TypedEventFilter<LogChangePriceEvent>;

export interface LogChangeStatusEventObject {
  _itemID: BigNumber;
  _seller: string;
  _newStatus: number;
}
export type LogChangeStatusEvent = TypedEvent<
  [BigNumber, string, number],
  LogChangeStatusEventObject
>;

export type LogChangeStatusEventFilter = TypedEventFilter<LogChangeStatusEvent>;

export interface LogCreateItemEventObject {
  _itemId: BigNumber;
  _nft: string;
  _tokenId: BigNumber;
  _price: BigNumber;
  _seller: string;
  _creator: string;
}
export type LogCreateItemEvent = TypedEvent<
  [BigNumber, string, BigNumber, BigNumber, string, string],
  LogCreateItemEventObject
>;

export type LogCreateItemEventFilter = TypedEventFilter<LogCreateItemEvent>;

export interface LogSetFeePercentageEventObject {
  _feePercentage: BigNumber;
}
export type LogSetFeePercentageEvent = TypedEvent<[BigNumber], LogSetFeePercentageEventObject>;

export type LogSetFeePercentageEventFilter = TypedEventFilter<LogSetFeePercentageEvent>;

export interface LogSettListingFeesPercentageEventObject {
  _listingFeePercentage: BigNumber;
}
export type LogSettListingFeesPercentageEvent = TypedEvent<
  [BigNumber],
  LogSettListingFeesPercentageEventObject
>;

export type LogSettListingFeesPercentageEventFilter =
  TypedEventFilter<LogSettListingFeesPercentageEvent>;

export interface OwnershipTransferredEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  OwnershipTransferredEventObject
>;

export type OwnershipTransferredEventFilter = TypedEventFilter<OwnershipTransferredEvent>;

export interface PausedEventObject {
  account: string;
}
export type PausedEvent = TypedEvent<[string], PausedEventObject>;

export type PausedEventFilter = TypedEventFilter<PausedEvent>;

export interface UnpausedEventObject {
  account: string;
}
export type UnpausedEvent = TypedEvent<[string], UnpausedEventObject>;

export type UnpausedEventFilter = TypedEventFilter<UnpausedEvent>;

export interface UpgradedEventObject {
  implementation: string;
}
export type UpgradedEvent = TypedEvent<[string], UpgradedEventObject>;

export type UpgradedEventFilter = TypedEventFilter<UpgradedEvent>;

export interface Marketplace extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: MarketplaceInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    buyItem(
      _itemId: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    changeItemStatus(
      _itemId: PromiseOrValue<BigNumberish>,
      _newStatus: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    feePercentage(overrides?: CallOverrides): Promise<[BigNumber]>;

    getContractBalance(overrides?: CallOverrides): Promise<[BigNumber]>;

    getItemsCount(overrides?: CallOverrides): Promise<[BigNumber]>;

    getItemsSold(overrides?: CallOverrides): Promise<[BigNumber]>;

    getListedAgain(
      _itemId: PromiseOrValue<BigNumberish>,
      _newPrice: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getListingFees(
      _price: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    initialize(
      _feePercentage: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    items(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, string, BigNumber, BigNumber, string, string, BigNumber, number] & {
        itemId: BigNumber;
        nftAddress: string;
        tokenId: BigNumber;
        price: BigNumber;
        seller: string;
        creator: string;
        creatorRoyalties: BigNumber;
        status: number;
      }
    >;

    listingFeePercentage(overrides?: CallOverrides): Promise<[BigNumber]>;

    makeItem(
      _nft: PromiseOrValue<string>,
      _tokenId: PromiseOrValue<BigNumberish>,
      _price: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    onERC721Received(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<BigNumberish>,
      arg3: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    pause(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>;

    paused(overrides?: CallOverrides): Promise<[boolean]>;

    proxiableUUID(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setFeePercentage(
      _feePercentage: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setListingFeesPercentage(
      _listingFeePercentage: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    unpause(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    upgradeTo(
      newImplementation: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    upgradeToAndCall(
      newImplementation: PromiseOrValue<string>,
      data: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    withdraw(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  buyItem(
    _itemId: PromiseOrValue<BigNumberish>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  changeItemStatus(
    _itemId: PromiseOrValue<BigNumberish>,
    _newStatus: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  feePercentage(overrides?: CallOverrides): Promise<BigNumber>;

  getContractBalance(overrides?: CallOverrides): Promise<BigNumber>;

  getItemsCount(overrides?: CallOverrides): Promise<BigNumber>;

  getItemsSold(overrides?: CallOverrides): Promise<BigNumber>;

  getListedAgain(
    _itemId: PromiseOrValue<BigNumberish>,
    _newPrice: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getListingFees(
    _price: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  initialize(
    _feePercentage: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  items(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, string, BigNumber, BigNumber, string, string, BigNumber, number] & {
      itemId: BigNumber;
      nftAddress: string;
      tokenId: BigNumber;
      price: BigNumber;
      seller: string;
      creator: string;
      creatorRoyalties: BigNumber;
      status: number;
    }
  >;

  listingFeePercentage(overrides?: CallOverrides): Promise<BigNumber>;

  makeItem(
    _nft: PromiseOrValue<string>,
    _tokenId: PromiseOrValue<BigNumberish>,
    _price: PromiseOrValue<BigNumberish>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  onERC721Received(
    arg0: PromiseOrValue<string>,
    arg1: PromiseOrValue<string>,
    arg2: PromiseOrValue<BigNumberish>,
    arg3: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  pause(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>;

  paused(overrides?: CallOverrides): Promise<boolean>;

  proxiableUUID(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setFeePercentage(
    _feePercentage: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setListingFeesPercentage(
    _listingFeePercentage: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  unpause(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>;

  upgradeTo(
    newImplementation: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  upgradeToAndCall(
    newImplementation: PromiseOrValue<string>,
    data: PromiseOrValue<BytesLike>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  withdraw(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>;

  callStatic: {
    buyItem(_itemId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;

    changeItemStatus(
      _itemId: PromiseOrValue<BigNumberish>,
      _newStatus: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    feePercentage(overrides?: CallOverrides): Promise<BigNumber>;

    getContractBalance(overrides?: CallOverrides): Promise<BigNumber>;

    getItemsCount(overrides?: CallOverrides): Promise<BigNumber>;

    getItemsSold(overrides?: CallOverrides): Promise<BigNumber>;

    getListedAgain(
      _itemId: PromiseOrValue<BigNumberish>,
      _newPrice: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    getListingFees(
      _price: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    initialize(
      _feePercentage: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    items(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, string, BigNumber, BigNumber, string, string, BigNumber, number] & {
        itemId: BigNumber;
        nftAddress: string;
        tokenId: BigNumber;
        price: BigNumber;
        seller: string;
        creator: string;
        creatorRoyalties: BigNumber;
        status: number;
      }
    >;

    listingFeePercentage(overrides?: CallOverrides): Promise<BigNumber>;

    makeItem(
      _nft: PromiseOrValue<string>,
      _tokenId: PromiseOrValue<BigNumberish>,
      _price: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    onERC721Received(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<BigNumberish>,
      arg3: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    pause(overrides?: CallOverrides): Promise<void>;

    paused(overrides?: CallOverrides): Promise<boolean>;

    proxiableUUID(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    setFeePercentage(
      _feePercentage: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    setListingFeesPercentage(
      _listingFeePercentage: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    transferOwnership(newOwner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;

    unpause(overrides?: CallOverrides): Promise<void>;

    upgradeTo(newImplementation: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;

    upgradeToAndCall(
      newImplementation: PromiseOrValue<string>,
      data: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    withdraw(overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    'AdminChanged(address,address)'(previousAdmin?: null, newAdmin?: null): AdminChangedEventFilter;
    AdminChanged(previousAdmin?: null, newAdmin?: null): AdminChangedEventFilter;

    'BeaconUpgraded(address)'(beacon?: PromiseOrValue<string> | null): BeaconUpgradedEventFilter;
    BeaconUpgraded(beacon?: PromiseOrValue<string> | null): BeaconUpgradedEventFilter;

    'Initialized(uint8)'(version?: null): InitializedEventFilter;
    Initialized(version?: null): InitializedEventFilter;

    'LogBuyItem(uint256,address,uint256,uint256,address,address)'(
      _itemId?: null,
      _nft?: PromiseOrValue<string> | null,
      _tokenId?: null,
      _price?: null,
      _seller?: PromiseOrValue<string> | null,
      _buyer?: PromiseOrValue<string> | null
    ): LogBuyItemEventFilter;
    LogBuyItem(
      _itemId?: null,
      _nft?: PromiseOrValue<string> | null,
      _tokenId?: null,
      _price?: null,
      _seller?: PromiseOrValue<string> | null,
      _buyer?: PromiseOrValue<string> | null
    ): LogBuyItemEventFilter;

    'LogChangePrice(uint256,address,uint256)'(
      _itemId?: null,
      _sender?: null,
      _newPrice?: null
    ): LogChangePriceEventFilter;
    LogChangePrice(_itemId?: null, _sender?: null, _newPrice?: null): LogChangePriceEventFilter;

    'LogChangeStatus(uint256,address,uint8)'(
      _itemID?: null,
      _seller?: null,
      _newStatus?: null
    ): LogChangeStatusEventFilter;
    LogChangeStatus(_itemID?: null, _seller?: null, _newStatus?: null): LogChangeStatusEventFilter;

    'LogCreateItem(uint256,address,uint256,uint256,address,address)'(
      _itemId?: null,
      _nft?: PromiseOrValue<string> | null,
      _tokenId?: null,
      _price?: null,
      _seller?: PromiseOrValue<string> | null,
      _creator?: null
    ): LogCreateItemEventFilter;
    LogCreateItem(
      _itemId?: null,
      _nft?: PromiseOrValue<string> | null,
      _tokenId?: null,
      _price?: null,
      _seller?: PromiseOrValue<string> | null,
      _creator?: null
    ): LogCreateItemEventFilter;

    'LogSetFeePercentage(uint256)'(_feePercentage?: null): LogSetFeePercentageEventFilter;
    LogSetFeePercentage(_feePercentage?: null): LogSetFeePercentageEventFilter;

    'LogSettListingFeesPercentage(uint256)'(
      _listingFeePercentage?: null
    ): LogSettListingFeesPercentageEventFilter;
    LogSettListingFeesPercentage(
      _listingFeePercentage?: null
    ): LogSettListingFeesPercentageEventFilter;

    'OwnershipTransferred(address,address)'(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;

    'Paused(address)'(account?: null): PausedEventFilter;
    Paused(account?: null): PausedEventFilter;

    'Unpaused(address)'(account?: null): UnpausedEventFilter;
    Unpaused(account?: null): UnpausedEventFilter;

    'Upgraded(address)'(implementation?: PromiseOrValue<string> | null): UpgradedEventFilter;
    Upgraded(implementation?: PromiseOrValue<string> | null): UpgradedEventFilter;
  };

  estimateGas: {
    buyItem(
      _itemId: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    changeItemStatus(
      _itemId: PromiseOrValue<BigNumberish>,
      _newStatus: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    feePercentage(overrides?: CallOverrides): Promise<BigNumber>;

    getContractBalance(overrides?: CallOverrides): Promise<BigNumber>;

    getItemsCount(overrides?: CallOverrides): Promise<BigNumber>;

    getItemsSold(overrides?: CallOverrides): Promise<BigNumber>;

    getListedAgain(
      _itemId: PromiseOrValue<BigNumberish>,
      _newPrice: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getListingFees(
      _price: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    initialize(
      _feePercentage: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    items(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;

    listingFeePercentage(overrides?: CallOverrides): Promise<BigNumber>;

    makeItem(
      _nft: PromiseOrValue<string>,
      _tokenId: PromiseOrValue<BigNumberish>,
      _price: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    onERC721Received(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<BigNumberish>,
      arg3: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    pause(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<BigNumber>;

    paused(overrides?: CallOverrides): Promise<BigNumber>;

    proxiableUUID(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setFeePercentage(
      _feePercentage: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setListingFeesPercentage(
      _listingFeePercentage: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    unpause(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<BigNumber>;

    upgradeTo(
      newImplementation: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    upgradeToAndCall(
      newImplementation: PromiseOrValue<string>,
      data: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    withdraw(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<BigNumber>;
  };

  populateTransaction: {
    buyItem(
      _itemId: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    changeItemStatus(
      _itemId: PromiseOrValue<BigNumberish>,
      _newStatus: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    feePercentage(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getContractBalance(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getItemsCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getItemsSold(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getListedAgain(
      _itemId: PromiseOrValue<BigNumberish>,
      _newPrice: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getListingFees(
      _price: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    initialize(
      _feePercentage: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    items(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    listingFeePercentage(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    makeItem(
      _nft: PromiseOrValue<string>,
      _tokenId: PromiseOrValue<BigNumberish>,
      _price: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    onERC721Received(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<BigNumberish>,
      arg3: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pause(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<PopulatedTransaction>;

    paused(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    proxiableUUID(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setFeePercentage(
      _feePercentage: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setListingFeesPercentage(
      _listingFeePercentage: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    unpause(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    upgradeTo(
      newImplementation: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    upgradeToAndCall(
      newImplementation: PromiseOrValue<string>,
      data: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    withdraw(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
