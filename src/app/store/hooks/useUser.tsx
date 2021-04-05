import { User } from '../types/user';

export const useUser = (id: number): User => {
    const dummy = {
        id: 1,
        name: 'محمد شرف',
        avatar: 'https://picsum.photos/200/300',
    };

    return dummy;
}
