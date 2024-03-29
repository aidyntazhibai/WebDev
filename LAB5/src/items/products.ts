import { Category } from "./categories";

export interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    rating: number;
    url: string;
    imgURL: string;
    link: string;
    category: Category;
    likes: number;
  }

  export const products: Product[] = [
    {
      id: 1,
      name: "Apple iPhone 11 Pro",
      price: 304880,
      description: "orem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vehicula tempus molestie. ",
      rating: 5,
      url: "https://kaspi.kz/shop/p/apple-iphone-11-128gb-slim-box-chernyi-100692388/?c=750000000#!/item",
      imgURL: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h0a/h2e/31489167622174/apple-iphone-11-128gb-slim-box-cernyj-100692388-1-Container.jpg",
      link: "https://t.me/angularwebdev2023/2",
      category: { name: "Телефон" },
      likes: 273,
    },
    {
      id: 2,
      name: "Apple Watch Series 8 45mm",
      price: 237618,
      description: "orem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vehicula tempus molestie. ",
      rating: 5,
      url: "https://kaspi.kz/shop/p/apple-watch-series-8-45-mm-aluminum-chernyi-106362847/?c=750000000#!/item",
      imgURL: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h0b/h04/63158967959582/apple-watch-series-8-41-mm-cernyj-106362847-1.jpg",
      link: "https://t.me/angularwebdev2023/3",
      category: { name: "Часы" },
      likes: 80,
    },
    {
      id: 3,
      name: "Samsung Galaxy S22",
      price: 348770,
      description: "orem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vehicula tempus molestie.",
      rating: 5,
      url: "https://kaspi.kz/shop/p/samsung-galaxy-s22-8-gb-128-gb-chernyi-103662719/?c=750000000#!/item",
      imgURL: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h21/h7a/62349965197342/samsung-galaxy-s22-8-gb-128-gb-chernyi-103662719-1.jpg",
      link: "https://t.me/angularwebdev2023/6",
      category: { name: "Телефон" },
      likes: 643,
    },
    {
      id: 4,
      name: "Xiaomi Mi Band 7",
      price: 21898,
      description: "orem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vehicula tempus molestie. ",
      rating: 5,
      url: "https://kaspi.kz/shop/p/xiaomi-mi-band-7-chernyi-105075100/?c=750000000#!/item",
      imgURL: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h76/h2e/51135083642910/xiaomi-mi-band-7-chernyi-105075100-1.jpg",
      link: "https://t.me/angularwebdev2023/10",
      category: { name: "Часы" },
      likes: 228,
    },
    {
      id: 5,
      name: "Apple iPhone 11",
      price: 302300,
      description: "orem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vehicula tempus molestie. ",
      rating: 5,
      url: "https://kaspi.kz/shop/p/apple-iphone-11-128gb-slim-box-chernyi-100692388/?c=750000000#!/item",
      imgURL: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h0a/h2e/31489167622174/apple-iphone-11-128gb-slim-box-cernyj-100692388-1-Container.jpg",
      link: "https://t.me/angularwebdev2023/8",
      category: { name: "Телефон" },
      likes: 758,
    },
    {
      id: 6,
      name: "Samsung Galaxy Watch 4",
      price: 95977,
      description: "orem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vehicula tempus molestie. ",
      rating: 5,
      url: "https://kaspi.kz/shop/p/samsung-galaxy-watch-4-classic-sm-r890nzkacis-46-mm-chernyi-chernyi-102170938/?c=750000000#!/item",
      imgURL: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h31/h9b/62047597559838/samsung-galaxy-watch-4-classic-sm-r890-cernyj-102170938-1-Container.jpg",
      link: "https://t.me/angularwebdev2023/9",
      category: { name: "Часы" },
      likes: 240,
    },
    {
      id: 7,
      name: "Amazon Kindle Paperwhite 2021",
      price: 161000,
      description: "orem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vehicula tempus molestie. ",
      rating: 5,
      url: "https://kaspi.kz/shop/p/amazon-kindle-paperwhite-2021-chernyi-102838488/?c=750000000#!/item",
      imgURL: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h6a/ha1/47093254455326/amazon-kindle-paper-2021-chernyi-102838488-1.jpg",
      link: "https://t.me/angularwebdev2023/11",
      category: { name: "Книга" },
      likes: 56,
    },
    {
      id: 8,
      name: "Apple AirPods Max",
      price: 365990,
      description: "orem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vehicula tempus molestie. ",
      rating: 5,
      url: "https://kaspi.kz/shop/p/apple-airpods-max-sinii-101180956/?c=750000000#!/item",
      imgURL: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h84/h0d/46659800498206/apple-airpods-max-sinij-101180956-1-Container.jpg",
      link: "https://t.me/angularwebdev2023/12",
      category: { name: "Наушники" },
      likes: 128,
    },
    {
      id: 10,
      name: "Kieslect K11",
      price: 24980,
      description: "orem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vehicula tempus molestie. ",
      rating: 5,
      url: "https://kaspi.kz/shop/p/kieslect-k11-chernyi-104947291/?c=750000000#!/item",
      imgURL: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h5c/h60/51661437468702/xiaomi-kieslect-k11-cernyj-104947291-1.jpg",
      link: "https://t.me/angularwebdev2023/14",
      category: { name: "Часы" },
      likes: 7,
    },
    {
      id: 11,
      name: "Xiaomi Redmi Note 10 Pro 8",
      price: 128340,
      description: "orem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vehicula tempus molestie. ",
      rating: 5,
      url: "https://kaspi.kz/shop/p/xiaomi-redmi-note-10-pro-8-gb-256-gb-seryi-107221005/?c=750000000#!/item",
      imgURL: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h59/hcf/64487157956638/xiaomi-redmi-note-10-pro-8-gb-128-gb-seryi-107221005-1.jpg",
      link: "https://t.me/angularwebdev2023/15",
      category: { name: "Телефон" },
      likes: 10,
    },
    {
      id: 12,
      name: "Apple iPhone 14 Pro Max",
      price: 694740,
      description: "orem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vehicula tempus molestie.",
      rating: 5,
      url: "https://kaspi.kz/shop/p/apple-iphone-14-pro-max-256gb-fioletovyi-106363342/?c=750000000#!/item",
      imgURL: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h1a/h61/62948780736542/apple-iphone-14-pro-max-128gb-fioletovyj-106363342-1.jpg",
      link: "https://t.me/angularwebdev2023/16",
      category: { name: "Телефон" },
      likes: 29,
    },
    {
      id: 13,
      name: "Amazfit Bip U Pro",
      price: 25368,
      description: "orem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vehicula tempus molestie. Maecenas tincidunt, ante ac rutrum sollicitudin, tellus libero semper massa, non dapibus lacus nibh vel est. Sed tincidunt ipsum vel libero auctor, ac tristique massa placerat. Suspendisse augue nisl, sagittis eu aliquam a, pretium at ipsum.",
      rating: 5,
      url: "https://kaspi.kz/shop/p/amazfit-bip-u-pro-chernyi-100914321/?c=750000000#!/item",
      imgURL: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h8b/h68/33549396967454/amazfit-bip-u-pro-cernyj-100914321-1-Container.jpg",
      link: "https://t.me/angularwebdev2023/17",
      category: { name: "Часы" },
      likes: 30,
    },
    {
      id: 14,
      name: "Джордж Оруэлл 1984",
      price: 1984,
      description: "Культовый роман Джорджа Оруэлла в новом, полном, без цензуры и купюр, переводе Дарьи Целовальниковой. «1984» — одна из трех знаменитых антиутопий XX века.",
      rating: 5,
      url: "https://kaspi.kz/shop/p/oruell-dzh-1984-105221802/?c=750000000#!/item",
      imgURL: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hac/h57/51390686887966/oruell-dz-1984-105221802-1.jpg",
      link: "https://t.me/angularwebdev2023/18",
      category: { name: "Книга" },
      likes: 14,
    },
    {
      id: 15,
      name: "Пауло Коэльо Алхимик",
      price: 2539,
      description: "orem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vehicula tempus molestie. Maecenas tincidunt, ante ac rutrum sollicitudin, tellus libero semper massa, non dapibus lacus nibh vel est. Sed tincidunt ipsum vel libero auctor, ac tristique massa placerat. Suspendisse augue nisl, sagittis eu aliquam a, pretium at ipsum.",
      rating: 5,
      url: "https://kaspi.kz/shop/p/koel-o-p-alhimik-26018156/?c=750000000#!/item",
      imgURL: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hcd/h84/31576356913182/koel-o-p-alkhimik-26018156-1.jpg",
      link: "https://t.me/angularwebdev2023/19",
      category: { name: "Книга" },
      likes: 10,
    },
    {
      id: 16,
      name: "Айзексон Уолтер: Стив Джобс",
      price: 9126,
      description: "orem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vehicula tempus molestie. Maecenas tincidunt, ante ac rutrum sollicitudin, tellus libero semper massa, non dapibus lacus nibh vel est. Sed tincidunt ipsum vel libero auctor, ac tristique massa placerat. Suspendisse augue nisl, sagittis eu aliquam a, pretium at ipsum.",
      rating: 5,
      url: "https://kaspi.kz/shop/p/aizekson-u-stiv-dzhobs-26006223/?c=750000000#!/item",
      imgURL: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h9e/hc8/31946560438302/ajzekson-u-stiv-dzobs-26006223-1.jpg",
      link: "https://t.me/angularwebdev2023/19",
      category: { name: "Книга" },
      likes: 8,
    },
    {
      id: 17,
      name: "Эрих Мария Ремарк: Триумфальная Арка",
      price: 2838,
      description: "orem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vehicula tempus molestie. Maecenas tincidunt, ante ac rutrum sollicitudin, tellus libero semper massa, non dapibus lacus nibh vel est. Sed tincidunt ipsum vel libero auctor, ac tristique massa placerat. Suspendisse augue nisl, sagittis eu aliquam a, pretium at ipsum.",
      rating: 5,
      url: "https://kaspi.kz/shop/p/remark-e-m-triumfal-naja-arka-26025852/?c=750000000#!/item",
      imgURL: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h7e/hc1/31836880273438/remark-e-m-triumfalnaa-arka-26025852-1-Container.jpg",
      link: "https://t.me/angularwebdev2023/20",
      category: { name: "Книга" },
      likes: 7,
    },
    {
      id: 18,
      name: "Apple AirPods 3",
      price: 95675,
      description: "orem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vehicula tempus molestie. Maecenas tincidunt, ante ac rutrum sollicitudin, tellus libero semper massa, non dapibus lacus nibh vel est. Sed tincidunt ipsum vel libero auctor, ac tristique massa placerat. Suspendisse augue nisl, sagittis eu aliquam a, pretium at ipsum.",
      rating: 5,
      url: "https://kaspi.kz/shop/p/apple-airpods-3-belyi-102667744/?c=750000000#!/item",
      imgURL: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hd3/h7b/46719105990686/apple-airpods-3-belyj-102667744-1.jpg",
      link: "https://t.me/angularwebdev2023/21",
      category: { name: "Наушники" },
      likes: 7,
    },
    {
      id: 19,
      name: "Apple AirPods",
      price: 68480,
      description: "orem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vehicula tempus molestie. Maecenas tincidunt, ante ac rutrum sollicitudin, tellus libero semper massa, non dapibus lacus nibh vel est. Sed tincidunt ipsum vel libero auctor, ac tristique massa placerat. Suspendisse augue nisl, sagittis eu aliquam a, pretium at ipsum.",
      rating: 5,
      url: "https://kaspi.kz/shop/p/apple-airpods-with-charging-case-belyi-4804056/?c=750000000#!/item",
      imgURL: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h3c/h64/46637140475934/apple-airpods-2-with-charging-case-belyj-4804056-2-Container.jpg",
      link: "https://t.me/angularwebdev2023/22",
      category: { name: "Наушники" },
      likes: 11,
    },
    {
      id: 20,
      name: "Apple AirPods Pro",
      price: 103176,
      description: "orem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vehicula tempus molestie. Maecenas tincidunt, ante ac rutrum sollicitudin, tellus libero semper massa, non dapibus lacus nibh vel est. Sed tincidunt ipsum vel libero auctor, ac tristique massa placerat. Suspendisse augue nisl, sagittis eu aliquam a, pretium at ipsum.",
      rating: 5,
      url: "https://kaspi.kz/shop/p/apple-airpods-pro-belyi-4804718/?c=750000000#!/item",
      imgURL: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h5e/hcc/46659804692510/apple-airpods-pro-belyj-4804718-1-Container.jpg",
      link: "https://t.me/angularwebdev2023/23",
      category: { name: "Наушники" },
      likes: 2,
    },
    {
      id: 21,
      name: "Apple EarPods",
      price: 12907,
      description: "orem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vehicula tempus molestie. Maecenas tincidunt, ante ac rutrum sollicitudin, tellus libero semper massa, non dapibus lacus nibh vel est. Sed tincidunt ipsum vel libero auctor, ac tristique massa placerat. Suspendisse augue nisl, sagittis eu aliquam a, pretium at ipsum.",
      rating: 5,
      url: "https://kaspi.kz/shop/p/apple-earpods-lightning-belyi-4801876/?c=750000000#!/item",
      imgURL: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h29/ha8/31582164779038/apple-earpods-lightning-belyj-4801876-1-Container.jpg",
      link: "https://t.me/angularwebdev2023/24",
      category: { name: "Наушники" },
      likes: 77,
    }
  ];


  /*
  Copyright Google LLC. All Rights Reserved.
  Use of this source code is governed by an MIT-style license that
  can be found in the LICENSE file at https://angular.io/license
  */
