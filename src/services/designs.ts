import { nanoid } from 'nanoid';

import Design from '../database/models/design';

class DesignsService {
  public create = async (params: CreateDesignDto) => {
    const payload = {
      ...params,
      id: nanoid()
    };
    const design = await Design.query().insert(payload).returning('*');

    return design;
  };

  public async findMany(params: FindDesignParams) {
    const query = Design.query();
    if (params.userId) {
      query.where('userId', params.userId);
    }
    if (params.published) {
      query.where('published', params.published);
    }

    const designs = await query;
    return { designs };
  }
}

export default DesignsService;
