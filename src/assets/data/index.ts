export type CategoryType = {
  id: string;
  name: string;
  description: string;
  image: string;
};

export const CATEGORIES: CategoryType[] = [
  {
    id: '1',
    name: 'Electronics',
    description: 'Gadgets, devices, and other electronic items',
    image: 'https://source.unsplash.com/featured/?electronics',
  },
  {
    id: '2',
    name: 'Clothing',
    description: 'Fashionable clothing items',
    image: 'https://source.unsplash.com/featured/?clothing',
  },
  {
    id: '3',
    name: 'Shoes',
    description: ' Various types of shoes',
    image: 'https://source.unsplash.com/featured/?shoes',
  },
  {
    id: '4',
    name: 'Furniture',
    description: 'Furniture items for your home',
    image: 'https://source.unsplash.com/featured/?furniture',
  },
  {
    id: '5',
    name: 'Accessories',
    description: 'Accessories for your gadgets and clothing',
    image: 'https://source.unsplash.com/featured/?accessories',
  },
  {
    id: '6',
    name: 'Books',
    description: 'Books of various genres',
    image: 'https://source.unsplash.com/featured/?books',
  },
  {
    id: '7',
    name: 'Toys',
    description: 'Toys for kids of all ages',
    image: 'https://source.unsplash.com/featured/?toys',
  },
  {
    id: '8',
    name: 'Beauty',
    description: 'Beauty products for your skin and hair',
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
    name: 'Laptop',
    description: 'A laptop for work and play',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ44rlpEXffaaKaU54uurcRGmSi_yjRsLqsYNpCBz9Q7QTlDlm6DdV_uBeRrdeJEJF6zpg&usqp=CAU',
    price: 1000,
  },
  {
    id: '2',
    name: 'T-shirt',
    description: 'A comfortable t-shirt for everyday wear',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ44rlpEXffaaKaU54uurcRGmSi_yjRsLqsYNpCBz9Q7QTlDlm6DdV_uBeRrdeJEJF6zpg&usqp=CAU',
    price: 20,
  },
  {
    id: '3',
    name: 'Sneakers',
    description: 'Stylish sneakers for your daily walks',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ44rlpEXffaaKaU54uurcRGmSi_yjRsLqsYNpCBz9Q7QTlDlm6DdV_uBeRrdeJEJF6zpg&usqp=CAU',
    price: 50,
  },
  {
    id: '4',
    name: 'Sofa',
    description: 'A comfortable sofa for your living room',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ44rlpEXffaaKaU54uurcRGmSi_yjRsLqsYNpCBz9Q7QTlDlm6DdV_uBeRrdeJEJF6zpg&usqp=CAU',
    price: 500,
  },
  {
    id: '5',
    name: 'Watch',
    description: 'A stylish watch for your wrist',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ44rlpEXffaaKaU54uurcRGmSi_yjRsLqsYNpCBz9Q7QTlDlm6DdV_uBeRrdeJEJF6zpg&usqp=CAU',
    price: 100,
  },
  {
    id: '6',
    name: 'Book',
    description: 'A book to read and enjoy',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ44rlpEXffaaKaU54uurcRGmSi_yjRsLqsYNpCBz9Q7QTlDlm6DdV_uBeRrdeJEJF6zpg&usqp=CAU',
    price: 10,
  },
  {
    id: '7',
    name: 'Toy',
    description: 'A toy for your child to play with',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ44rlpEXffaaKaU54uurcRGmSi_yjRsLqsYNpCBz9Q7QTlDlm6DdV_uBeRrdeJEJF6zpg&usqp=CAU',
    price: 5,
  },
  {
    id: '8',
    name: 'Lipstick',
    description: 'A lipstick to make you look beautiful',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ44rlpEXffaaKaU54uurcRGmSi_yjRsLqsYNpCBz9Q7QTlDlm6DdV_uBeRrdeJEJF6zpg&usqp=CAU',
    price: 15,
  },
  {
    id: '9',
    name: 'Laptop',
    description: 'A laptop for work and play',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ44rlpEXffaaKaU54uurcRGmSi_yjRsLqsYNpCBz9Q7QTlDlm6DdV_uBeRrdeJEJF6zpg&usqp=CAU',
    price: 1000,
  },
  {
    id: '10',
    name: 'T-shirt',
    description: 'A comfortable t-shirt for everyday wear',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ44rlpEXffaaKaU54uurcRGmSi_yjRsLqsYNpCBz9Q7QTlDlm6DdV_uBeRrdeJEJF6zpg&usqp=CAU',
    price: 20,
  },
  {
    id: '11',
    name: 'Sneakers',
    description: 'Stylish sneakers for your daily walks',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ44rlpEXffaaKaU54uurcRGmSi_yjRsLqsYNpCBz9Q7QTlDlm6DdV_uBeRrdeJEJF6zpg&usqp=CAU',
    price: 50,
  },
  {
    id: '12',
    name: 'TV',
    description: 'A TV for your entertainment needs',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ44rlpEXffaaKaU54uurcRGmSi_yjRsLqsYNpCBz9Q7QTlDlm6DdV_uBeRrdeJEJF6zpg&usqp=CAU',
    price: 50,
  },
  {
    id: '1',
    name: 'Laptop',
    description: 'A laptop for work and play',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ44rlpEXffaaKaU54uurcRGmSi_yjRsLqsYNpCBz9Q7QTlDlm6DdV_uBeRrdeJEJF6zpg&usqp=CAU',
    price: 1000,
  },
  {
    id: '2',
    name: 'T-shirt',
    description: 'A comfortable t-shirt for everyday wear',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ44rlpEXffaaKaU54uurcRGmSi_yjRsLqsYNpCBz9Q7QTlDlm6DdV_uBeRrdeJEJF6zpg&usqp=CAU',
    price: 20,
  },
  {
    id: '3',
    name: 'Sneakers',
    description: 'Stylish sneakers for your daily walks',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ44rlpEXffaaKaU54uurcRGmSi_yjRsLqsYNpCBz9Q7QTlDlm6DdV_uBeRrdeJEJF6zpg&usqp=CAU',
    price: 50,
  },
  {
    id: '4',
    name: 'Sofa',
    description: 'A comfortable sofa for your living room',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ44rlpEXffaaKaU54uurcRGmSi_yjRsLqsYNpCBz9Q7QTlDlm6DdV_uBeRrdeJEJF6zpg&usqp=CAU',
    price: 500,
  },
  {
    id: '5',
    name: 'Watch',
    description: 'A stylish watch for your wrist',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ44rlpEXffaaKaU54uurcRGmSi_yjRsLqsYNpCBz9Q7QTlDlm6DdV_uBeRrdeJEJF6zpg&usqp=CAU',
    price: 100,
  },
  {
    id: '6',
    name: 'Book',
    description: 'A book to read and enjoy',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ44rlpEXffaaKaU54uurcRGmSi_yjRsLqsYNpCBz9Q7QTlDlm6DdV_uBeRrdeJEJF6zpg&usqp=CAU',
    price: 10,
  },
  {
    id: '7',
    name: 'Toy',
    description: 'A toy for your child to play with',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ44rlpEXffaaKaU54uurcRGmSi_yjRsLqsYNpCBz9Q7QTlDlm6DdV_uBeRrdeJEJF6zpg&usqp=CAU',
    price: 5,
  },
  {
    id: '8',
    name: 'Lipstick',
    description: 'A lipstick to make you look beautiful',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ44rlpEXffaaKaU54uurcRGmSi_yjRsLqsYNpCBz9Q7QTlDlm6DdV_uBeRrdeJEJF6zpg&usqp=CAU',
    price: 15,
  },
  {
    id: '9',
    name: 'Laptop',
    description: 'A laptop for work and play',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ44rlpEXffaaKaU54uurcRGmSi_yjRsLqsYNpCBz9Q7QTlDlm6DdV_uBeRrdeJEJF6zpg&usqp=CAU',
    price: 1000,
  },
  {
    id: '10',
    name: 'T-shirt',
    description: 'A comfortable t-shirt for everyday wear',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ44rlpEXffaaKaU54uurcRGmSi_yjRsLqsYNpCBz9Q7QTlDlm6DdV_uBeRrdeJEJF6zpg&usqp=CAU',
    price: 20,
  },
  {
    id: '11',
    name: 'Sneakers',
    description: 'Stylish sneakers for your daily walks',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ44rlpEXffaaKaU54uurcRGmSi_yjRsLqsYNpCBz9Q7QTlDlm6DdV_uBeRrdeJEJF6zpg&usqp=CAU',
    price: 50,
  },
  {
    id: '12',
    name: 'TV',
    description: 'A TV for your entertainment needs',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ44rlpEXffaaKaU54uurcRGmSi_yjRsLqsYNpCBz9Q7QTlDlm6DdV_uBeRrdeJEJF6zpg&usqp=CAU',
    price: 50,
  },
];
