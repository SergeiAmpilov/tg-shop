export const domain = 'https://b2c.ast-inter.ru';

export interface IProduct {
  id: number;
  title: string;
  link: string;
  image: string;
  text: string;
  price: number;
}

export const products: IProduct[] = [
  {
    id: 32969,
    title: 'Вино Barkan Carignan Monfort',
    link: '/catalog/product/barkan_carignan_monfort_7290000023717_32969/',
    image: '/upload/resize_cache/iblock/79d/440_440_010aee0ef690a70e74e10e786b796fd5f/79d5dcc362fe383a98ade6161e8f59dd.jpg',
    text: 'История винодельни Barkan началась в 1899 году с небольшого винного завода, построенного Соломоном Фридманом для производства бренди, коньяка и сладких вин. В 1964 году собственником компании стал пищевой холдинг Тнува. Позднее был построен винодельческий завод. А в 1990 году Яир Лернер и Шмоэль Боксер приобрели винодельческую компанию и основали Barkan Wine Cellars. Компания Barkan является одной из крупнейших в Израиле, 25% акций винного холдинга принадлежит государству. Баркан - второй по величине винный производитель Израиля.',
    price: 1170,
  },
  {
    id: 24323,
    title: "Игристое вино Fiorino d'Oro Prosecco Spumante, в подарочной упаковке",
    link: '/catalog/product/fiorino_d_oro_prosecco_spumante_v_podarochnoy_upakovke_2300100002040_24323/',
    image: '/upload/resize_cache/iblock/e6e/440_440_010aee0ef690a70e74e10e786b796fd5f/e6e2968feba91fc038f866a38cb2ab86.jpg',
    text: 'Винодельческое хозяйство Аббация производит свои вина с 1848 г. Сегодня во главе Дома стоит Марио Сантеро и трое его детей, представляющие четвертое поколение семьи виноделов. Каза Виникола Аббация, расположенная по соседству с действующим бенедектинским аббатством (а “Аббация” в переводе с итальянского означает аббатство) в местечке Санто Стефано Бельбо в Пьемонте, производит вина с 1948 года.',
    price: 1650,
  },
  {
    id: 36937,
    title: 'Аперитив Pernod Ricard Pastis de Marseille',
    link: '/catalog/product/pernod_ricard_pastis_de_marseille_3163937011000_36937/',
    image: '/upload/resize_cache/iblock/355/440_440_010aee0ef690a70e74e10e786b796fd5f/3550f6c6ff0c32f894c97cde1a5223b4.jpg',
    text: 'Pernod Ricard - французская компания, производитель и дистрибутор алкогольных напитков. Штаб-квартира — в Париже. Теперь вы знаете почему покупатели ценят и выбирают Аперитив от Перно Рикар и готовы приобрести именно его Аперитив и высоко ценят Пастис де Марсель Рикар. Сегодня очень просто найти и купить Аперитив в магазине АСТ или ознакомится с Пастис де Марсель Рикар 0.7 л. в Винотеке вашего города.',
    price: 1702,
  },
];

export class ProductsService {}
