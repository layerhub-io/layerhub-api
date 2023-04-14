import UsersService from './users';
import FontsService from './fonts';
import DesignsService from './designs';

class Services {
  public config: AppConfig;
  public users: UsersService;
  public fonts: FontsService;
  public designs: DesignsService;
  constructor(config: AppConfig) {
    this.config = config;
    this.users = new UsersService();
    this.fonts = new FontsService();
    this.designs = new DesignsService();
  }
}

export default Services;
