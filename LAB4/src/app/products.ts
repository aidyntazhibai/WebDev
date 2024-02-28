
export interface Product {
  image:string[];
  name: string;
  rating: number;
  description: string;
  reference:string;
  i:number;
  category: string
}



export const products = [
  {
    image:['../assets/images/download.jpeg', "../assets/images/iphone13-2.jpeg", '../assets/images/iphone13-3.jpeg'],
    name:'Apple Iphone 13',
    rating:4.9,
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eleifend eleifend nisi, eu ultrices massa ornare id. Vivamus efficitur nec erat eu imperdiet. Lorem ipsum dolor sit amet",
    reference:"https://kaspi.kz/shop/p/apple-iphone-13-128gb-midnight-chernyi-102298404/?c=750000000",
    i:0,
    category: "smartphones"
  },
  {
    image:['../assets/images/iphone13pro-1.jpeg', '../assets/images/iphone13pro-2.jpeg', '../assets/images/iphone13pro-3.webp'],
    name:'Apple Iphone 13pro',
    rating: 4.8,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eleifend eleifend nisi, eu ultrices massa ornare id. Vivamus efficitur nec erat eu imperdiet. Lorem ipsum dolor sit amet',
    reference: 'https://kaspi.kz/shop/p/apple-iphone-13-pro-128gb-zolotistyi-102298716/?c=750000000',
    i:0,
    category: "smartphones"
  },
  {
    image:['../assets/images/iphone14-4.webp', '../assets/images/iphone14-1.avif', '../assets/images/iphone14-3.jpeg'],
    name:'Apple Iphone 14',
    rating: 4.9,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eleifend eleifend nisi, eu ultrices massa ornare id. Vivamus efficitur nec erat eu imperdiet. Lorem ipsum dolor sit amet',
    reference: 'https://kaspi.kz/shop/p/apple-iphone-14-128gb-chernyi-106363023/?c=750000000',
    i:0,
    category: "smartphones"
  },
  {
    image:['../assets/images/iphone15-1.jpg', '../assets/images/iphone15-2.webp', '../assets/images/iphone15-3.png'],
    name:'Apple Iphone 15',
    rating: 4.6,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eleifend eleifend nisi, eu ultrices massa ornare id. Vivamus efficitur nec erat eu imperdiet. Lorem ipsum dolor sit amet',
    reference: 'https://kaspi.kz/shop/p/apple-iphone-15-128gb-chernyi-113137790/?c=750000000',
    i:0,
    category: "smartphones"
  }
  

];


