import { GlobalConfig } from '../../../../src/globals/config/types';

export const menuSlug = 'menu';

export const MenuGlobal: GlobalConfig = {
  slug: menuSlug,
  label: 'Where are my eyes? Ö',
  fields: [
    {
      name: 'globalText',
      type: 'text',
    },
  ],
};
