import { Category } from '../types/category';

export const useCategory = ( id: number ): Category => {
  const dummy = {
    id: 1,
    name: 'category-1',
    slug: 'slug-1',
  };

  return dummy;
}
