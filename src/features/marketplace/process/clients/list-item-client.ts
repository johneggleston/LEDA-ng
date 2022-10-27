import ItemService from '../../../leda-nft/services/item.service';
import MarketplaceService from '../../services/marketplace.service';
import ListItemCommand from '../commands/list-item/list-item-command';
import StoreListItemCommand from '../commands/list-item/store-list-item-command';
import IClient from '../interfaces/client.interface';
import ListItemInvoker from '../invokers/list-item-invoker';
import MarketplaceState from '../types/marketplace-state';

export default class ListItemClient implements IClient {
  private readonly invoker: ListItemInvoker;

  constructor(state: MarketplaceState) {
    const marketplaceService = new MarketplaceService();
    const itemService = new ItemService();
    const listItemCommand = new ListItemCommand(marketplaceService);
    const storeListItemCommand = new StoreListItemCommand(itemService);

    this.invoker = new ListItemInvoker(state, listItemCommand, storeListItemCommand);
  }

  async execute(): Promise<MarketplaceState> {
    return this.invoker.execute();
  }
}