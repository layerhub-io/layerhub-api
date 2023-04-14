import Services from '../services/services';
import UsersHandler from './users';
import FontsHandler from './fonts';
import DesignsHandler from './designs';

class Handlers {
  public users: UsersHandler;
  public fonts: FontsHandler;
  public designs: DesignsHandler;

  constructor(services: Services) {
    this.users = new UsersHandler(services.users);
    this.fonts = new FontsHandler(services.fonts);
    this.designs = new DesignsHandler(services.designs);
  }
}

export default Handlers;
