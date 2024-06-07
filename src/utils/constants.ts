export const PRODUCTS = [
  {
    name: 'Air Jordan 1',
    url: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/8021ed7c-e4fc-497d-81ee-a41047e42465/air-max-plus-drift-mens-shoes-FKwJ7w.png',
  },
  {
    name: 'Air Jordan 1',
    url: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/8021ed7c-e4fc-497d-81ee-a41047e42465/air-max-plus-drift-mens-shoes-FKwJ7w.png',
  },
  {
    name: 'Air Jordan 1',
    url: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/8021ed7c-e4fc-497d-81ee-a41047e42465/air-max-plus-drift-mens-shoes-FKwJ7w.png',
  },
  {
    name: 'Air Jordan 1',
    url: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/8021ed7c-e4fc-497d-81ee-a41047e42465/air-max-plus-drift-mens-shoes-FKwJ7w.png',
  },
]

export const PRODUCT_IMAGES = [
  {
    thumbnail:
      'https://static.nike.com/a/images/t_default/4eae23a9-b240-4a53-98c7-d5502fe3f7dc/dunk-low-mens-shoes-l12Bc1.png',
    fullsize:
      'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/338d0737-bd55-4b33-86f4-e2f92a11d3c8/dunk-low-mens-shoes-l12Bc1.png',
  },
  {
    thumbnail:
      'https://static.nike.com/a/images/t_default/b322b61c-1458-4448-b77a-8e3a555328b5/dunk-low-mens-shoes-l12Bc1.png',
    fullsize:
      'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/a9a0d941-9def-4dc9-b594-f154587e9634/dunk-low-mens-shoes-l12Bc1.png',
  },
  {
    thumbnail:
      'https://static.nike.com/a/images/t_default/0cca55d6-91b9-45db-b693-52f717875a66/dunk-low-mens-shoes-l12Bc1.png',
    fullsize:
      'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/d2ab4eba-b318-409f-b086-be6d8c329641/dunk-low-mens-shoes-l12Bc1.png',
  },
  {
    thumbnail:
      'https://static.nike.com/a/images/t_default/92a7c3cb-24d7-4779-add1-d8ad545b6499/dunk-low-mens-shoes-l12Bc1.png',
    fullsize:
      'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/8f03587f-3fcd-4825-98b0-cc3d76f6c486/dunk-low-mens-shoes-l12Bc1.png',
  },
  {
    thumbnail:
      'https://static.nike.com/a/images/t_default/2dd75ed9-650e-46e0-806b-1cd8db5123fb/dunk-low-mens-shoes-l12Bc1.png',
    fullsize:
      'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/e16bbc69-5566-485b-925f-0c6e8d243eaf/dunk-low-mens-shoes-l12Bc1.png',
  },
]

export const MEMBESHIP_ITEMS = [
  {
    subtitle: 'Member Product',
    title: 'Your Exclusive Access',
    image:
      'https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_619,c_limit/4c87032a-1756-47dc-b731-966f2d79285e/nike-just-do-it.jpg',
    button: 'Shop',
  },
  {
    subtitle: 'Sports & Wellness Apps',
    title: "Movement Where You're At",
    image:
      'https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_619,c_limit/73de197a-2e67-42aa-b4e6-aeda1883636b/nike-just-do-it.jpg',
    button: 'Move',
  },
  {
    subtitle: 'Nike By You',
    title: 'Your Customization Service',
    image:
      'https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_619,c_limit/a3d73dc6-a36a-432c-a845-68bf59c5f876/nike-just-do-it.jpg',
    button: 'Customize',
  },
]

export const NAVITEMS = [
  {
    name: 'Running',
    link: '/',
  },
  {
    name: 'New & Featured',
    link: '/',
  },
  {
    name: 'Men',
    link: '/',
  },
  {
    name: 'Women',
    link: '/',
  },
  {
    name: 'Kids',
    link: '/',
  },
  {
    name: 'Jordan',
    link: '/',
  },
  {
    name: 'Sale',
    link: '/',
  },
]

export const MENUITEMS_RUNNING = [
  {
    parent: 'Featured',
    link: 'products',
    items: ['Just in: Pegasus 41', 'Explore Running'],
  },
  {
    parent: 'Shoes',
    link: 'shoes',
    items: [
      'All Shoes',
      'Road Running',
      'Trail Running',
      'Road Racing',
      'Track & Field',
    ],
  },
  {
    parent: 'Clothing',
    link: 'clothing',
    items: [
      'All Clothing',
      'Tops & T-Shirts',
      'Jackets & Vests',
      'Shorts',
      'Pants & Tights',
      'Socks',
    ],
  },
  {
    parent: 'Accessories',
    link: 'clothing',
    items: [
      'All Accessories',
      'Hats & Headwear',
      'Bags & Backpacks',
      'Watchbands',
    ],
  },
]

export const MENUITEMS_FEATURED = [
  {
    parent: 'New & Featured',
    link: 'products',
    items: ['New Arrivals', 'Best Sellers', 'New & Upcoming Drops'],
  },
  {
    parent: 'Trending',
    link: 'products',
    items: [
      'ACG',
      'Lifestyle Running',
      'The Color Shop',
      'Shop Sport',
      "Father's Day Shop",
      'Jordan Heat Check',
      'Aura Bag',
    ],
  },
  {
    parent: 'Shop Classics',
    link: 'products',
    items: ['Dunk', 'Air Jordan 1', 'Air Force', 'Air Max', 'Blazer', 'Vomero'],
  },
  {
    parent: 'Explore',
    link: 'products',
    items: [
      'SNKRS Launch Calendar',
      'Running Shoe Finder',
      'Bra Finder',
      'Product Care',
      'Member Rewards',
      'Buying Guides',
    ],
  },
]

export const MENUITEMS = [
  MENUITEMS_RUNNING,
  MENUITEMS_FEATURED,
  MENUITEMS_FEATURED,
  MENUITEMS_FEATURED,
  MENUITEMS_FEATURED,
  MENUITEMS_FEATURED,
  MENUITEMS_FEATURED,
]
