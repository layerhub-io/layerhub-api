import { Knex } from 'knex';
import { nanoid } from 'nanoid';

const table = 'categories';

export async function seed(knex: Knex): Promise<void> {
  await knex(table).del();
  const category1 = nanoid();
  const category2 = nanoid();
  const category3 = nanoid();
  const category4 = nanoid();
  const category5 = nanoid();
  const category6 = nanoid();
  const category7 = nanoid();

  return knex(table).insert([
    {
      id: category1,
      name: 'Branding',
      parentId: null,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: nanoid(),
      name: 'Business Cards',
      parentId: category1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: nanoid(),
      name: 'Logos',
      parentId: category1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: nanoid(),
      name: 'Letterheads',
      parentId: category1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: nanoid(),
      name: 'ID  Cards',
      parentId: category1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: nanoid(),
      name: 'Stickers',
      parentId: category1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: category2,
      name: 'Marketing & events',
      parentId: null,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: nanoid(),
      name: 'Brochures',
      parentId: category2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: nanoid(),
      name: 'Presentations',
      parentId: category2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: nanoid(),
      name: 'Posters',
      parentId: category2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: nanoid(),
      name: 'Flyers',
      parentId: category2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: nanoid(),
      name: 'Menus',
      parentId: category2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: nanoid(),
      name: 'Price Lists',
      parentId: category2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: nanoid(),
      name: 'Labels',
      parentId: category2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: nanoid(),
      name: 'Gift Certificates',
      parentId: category2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: nanoid(),
      name: 'Loyalty Cards',
      parentId: category2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: nanoid(),
      name: 'Gift Tags',
      parentId: category2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: nanoid(),
      name: 'Rack Cards',
      parentId: category2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: nanoid(),
      name: 'Customer Review',
      parentId: category2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: category3,
      name: 'Social media',
      parentId: null,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: nanoid(),
      name: 'Facebook Posts',
      parentId: category3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: nanoid(),
      name: 'Blog Graphics',
      parentId: category3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: nanoid(),
      name: 'Instagram Posts',
      parentId: category3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: nanoid(),
      name: 'Instagram Stories',
      parentId: category3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: nanoid(),
      name: 'Twitter Posts',
      parentId: category3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: nanoid(),
      name: 'Youtube Thumnbnail',
      parentId: category3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: nanoid(),
      name: 'Facebook Stories',
      parentId: category3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: nanoid(),
      name: 'Instagram Reel Covers',
      parentId: category3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: nanoid(),
      name: 'Podcast Covers',
      parentId: category3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: nanoid(),
      name: 'Notion Cover',
      parentId: category3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: nanoid(),
      name: 'Profile Picture',
      parentId: category3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: nanoid(),
      name: 'Twich Background',
      parentId: category3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: nanoid(),
      name: 'Facebook Ads',
      parentId: category3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: category4,
      name: 'Banners & headers',
      parentId: null,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: nanoid(),
      name: 'Banners',
      parentId: category4,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: nanoid(),
      name: 'Blog Banners',
      parentId: category4,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: nanoid(),
      name: 'YouTube Banners',
      parentId: category4,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: nanoid(),
      name: 'Twitter Headers',
      parentId: category4,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: nanoid(),
      name: 'Facebook Headers & Covers',
      parentId: category4,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: nanoid(),
      name: 'Linkedin Banners',
      parentId: category4,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: nanoid(),
      name: 'Email Banners',
      parentId: category4,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: category5,
      name: 'Business organization',
      parentId: null,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: nanoid(),
      name: 'Calendars',
      parentId: category5,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: nanoid(),
      name: 'Invoices',
      parentId: category5,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: nanoid(),
      name: 'Diagrams',
      parentId: category5,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: nanoid(),
      name: 'Infographics',
      parentId: category5,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: nanoid(),
      name: 'Timelines',
      parentId: category5,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: nanoid(),
      name: 'Schedules',
      parentId: category5,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: nanoid(),
      name: 'Checklists',
      parentId: category5,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: nanoid(),
      name: 'Signs',
      parentId: category5,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: category6,
      name: 'Personal',
      parentId: null,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: nanoid(),
      name: 'Book Covers',
      parentId: category6,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: nanoid(),
      name: 'CD Covers',
      parentId: category6,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: nanoid(),
      name: 'Invitations',
      parentId: category6,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: nanoid(),
      name: 'Postcards & Cards',
      parentId: category6,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: nanoid(),
      name: 'Computer Desktop Wallpapers',
      parentId: category6,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: nanoid(),
      name: 'Mobile Wallpapers',
      parentId: category6,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: nanoid(),
      name: 'Photo Collages',
      parentId: category6,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: nanoid(),
      name: 'Meme',
      parentId: category6,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: nanoid(),
      name: 'Zoom Background',
      parentId: category6,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: nanoid(),
      name: 'Name Tag',
      parentId: category6,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: nanoid(),
      name: 'Resumes',
      parentId: category6,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: nanoid(),
      name: 'Recipes',
      parentId: category6,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: category7,
      name: 'Education',
      parentId: null,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: nanoid(),
      name: 'Worksheets',
      parentId: category7,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: nanoid(),
      name: 'Certificates',
      parentId: category7,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: nanoid(),
      name: 'Lesson Plans',
      parentId: category7,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: nanoid(),
      name: 'Planners',
      parentId: category7,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: nanoid(),
      name: 'School Schedule',
      parentId: category7,
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ]);
}
