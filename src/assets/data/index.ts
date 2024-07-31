export type CategoryType = {
  id: string;
  name: string;
  image: string;
};

export const CATEGORIES: CategoryType[] = [
  {
    id: '1',
    name: 'Nos burgers',
    image: 'https://source.unsplash.com/featured/?electronics',
  },
  {
    id: '2',
    name: 'Nos pizzas',
    image: 'https://source.unsplash.com/featured/?clothing',
  },
  {
    id: '3',
    name: 'Nos menus',
    image: 'https://source.unsplash.com/featured/?shoes',
  },
  {
    id: '4',
    name: 'Nos boissons',
    image: 'https://source.unsplash.com/featured/?furniture',
  },
  {
    id: '5',
    name: 'Nos desserts',
    image: 'https://source.unsplash.com/featured/?accessories',
  },
  {
    id: '6',
    name: 'Nos jouets',
    image: 'https://source.unsplash.com/featured/?books',
  },
  {
    id: '7',
    name: 'Nos salades',
    image: 'https://source.unsplash.com/featured/?toys',
  },
  {
    id: '8',
    name: 'Nos offres',
    image: 'https://source.unsplash.com/featured/?beauty',
  },
];

export type ProductType = {
  id: string;
  name: string;
  description: string;
  image: string;
  price: number;
};

export const PRODUCTS: ProductType[] = [
  {
    id: '1',
    name: 'Pizza Margha',
    description: 'Une pizza classique avec sauce tomate, mozzarella et basilic',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ44rlpEXffaaKaU54uurcRGmSi_yjRsLqsYNpCBz9Q7QTlDlm6DdV_uBeRrdeJEJF6zpg&usqp=CAU',
    price: 8,
  },
  {
    id: '2',
    name: 'Pizza reine',
    description: 'Pizza épicée garnie de pepperoni et de fromage fondant',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ44rlpEXffaaKaU54uurcRGmSi_yjRsLqsYNpCBz9Q7QTlDlm6DdV_uBeRrdeJEJF6zpg&usqp=CAU',
    price: 10,
  },
  {
    id: '3',
    name: 'Pizza 4 from',
    description: 'Pizza avec une variété de quatre fromages délicieux',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ44rlpEXffaaKaU54uurcRGmSi_yjRsLqsYNpCBz9Q7QTlDlm6DdV_uBeRrdeJEJF6zpg&usqp=CAU',
    price: 12,
  },
  {
    id: '4',
    name: 'Calzone',
    description: 'Pizza pliée farcie de jambon, fromage et sauce tomate',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ44rlpEXffaaKaU54uurcRGmSi_yjRsLqsYNpCBz9Q7QTlDlm6DdV_uBeRrdeJEJF6zpg&usqp=CAU',
    price: 9,
  },
  {
    id: '5',
    name: 'Pizza Végé',
    description: 'Pizza garnie de légumes frais et de fromage',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ44rlpEXffaaKaU54uurcRGmSi_yjRsLqsYNpCBz9Q7QTlDlm6DdV_uBeRrdeJEJF6zpg&usqp=CAU',
    price: 9,
  },
  {
    id: '6',
    name: 'Focaccia',
    description: "Pain plat italien assaisonné d'huile d'olive et d'herbes",
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ44rlpEXffaaKaU54uurcRGmSi_yjRsLqsYNpCBz9Q7QTlDlm6DdV_uBeRrdeJEJF6zpg&usqp=CAU',
    price: 5,
  },
  {
    id: '7',
    name: 'Salade Capre',
    description: 'Salade fraîche avec tomates, mozzarella et basilic',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ44rlpEXffaaKaU54uurcRGmSi_yjRsLqsYNpCBz9Q7QTlDlm6DdV_uBeRrdeJEJF6zpg&usqp=CAU',
    price: 7,
  },
  {
    id: '8',
    name: 'Tiramisu',
    description: 'Dessert italien classique au café et au mascarpone',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ44rlpEXffaaKaU54uurcRGmSi_yjRsLqsYNpCBz9Q7QTlDlm6DdV_uBeRrdeJEJF6zpg&usqp=CAU',
    price: 6,
  },
  {
    id: '9',
    name: 'Gelato',
    description: 'Glace italienne crémeuse et savoureuse',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ44rlpEXffaaKaU54uurcRGmSi_yjRsLqsYNpCBz9Q7QTlDlm6DdV_uBeRrdeJEJF6zpg&usqp=CAU',
    price: 4,
  },
  {
    id: '10',
    name: 'Panna Cotta',
    description: 'Dessert italien à la crème, servi avec un coulis de fruits',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ44rlpEXffaaKaU54uurcRGmSi_yjRsLqsYNpCBz9Q7QTlDlm6DdV_uBeRrdeJEJF6zpg&usqp=CAU',
    price: 5,
  },
  {
    id: '11',
    name: 'Cannoli',
    description: 'Pâtisserie sicilienne farcie de ricotta sucrée',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ44rlpEXffaaKaU54uurcRGmSi_yjRsLqsYNpCBz9Q7QTlDlm6DdV_uBeRrdeJEJF6zpg&usqp=CAU',
    price: 4,
  },
  {
    id: '12',
    name: 'Espresso',
    description: 'Café italien fort et intense',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ44rlpEXffaaKaU54uurcRGmSi_yjRsLqsYNpCBz9Q7QTlDlm6DdV_uBeRrdeJEJF6zpg&usqp=CAU',
    price: 2,
  },
];
