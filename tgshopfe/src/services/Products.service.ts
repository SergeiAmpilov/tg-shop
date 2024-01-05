// eslint-disable-next-line no-shadow
export enum EProductType {
  all = 'all',
  vine = 'vine',
  shamp = 'shamp',
  strong = 'strong',
}

export const domain = 'https://b2c.ast-inter.ru';

export interface IProduct {
  id: number;
  title: string;
  link: string;
  image: string;
  text: string;
  price: number;
  type: EProductType
}

export const products: IProduct[] = [
  {
    id: 32969,
    title: 'Вино Barkan Carignan Monfort',
    link: `${domain}/catalog/product/barkan_carignan_monfort_7290000023717_32969/`,
    image: `${domain}/upload/resize_cache/iblock/79d/440_440_010aee0ef690a70e74e10e786b796fd5f/79d5dcc362fe383a98ade6161e8f59dd.jpg`,
    text: 'История винодельни Barkan началась в 1899 году с небольшого винного завода, построенного Соломоном Фридманом для производства бренди, коньяка и сладких вин. В 1964 году собственником компании стал пищевой холдинг Тнува. Позднее был построен винодельческий завод. А в 1990 году Яир Лернер и Шмоэль Боксер приобрели винодельческую компанию и основали Barkan Wine Cellars. Компания Barkan является одной из крупнейших в Израиле, 25% акций винного холдинга принадлежит государству. Баркан - второй по величине винный производитель Израиля.',
    price: 1170,
    type: EProductType.vine,
  },
  {
    id: 23494,
    title: 'Вино Ceci Decanta',
    link: `${domain}/catalog/product/ceci_decanta_8000199012305_23494/`,
    image: `${domain}/upload/resize_cache/iblock/49f/440_440_010aee0ef690a70e74e10e786b796fd5f/49fa0cb77ccf651ede8a4f6057d57183.jpg`,
    text: 'История компании Cantine Ceci началась в 1938 году в траттории, принадлежавшей Отелло Чечи, где подавались традиционные блюда региона Эмилия и вино Ламбруско, которое производилось здесь же из винограда местных виноградарей. Сыновья Отелло – Джованни и Бруно, унаследовавшие от отца страсть к виноделию, решили сконцентрироваться на производстве местных вин, основав, таким образом, винодельню Cantine Ceci. Позднее к управлению хозяйством пришло следующее поколение семьи в лице внуков Отелло.',
    price: 2420,
    type: EProductType.vine,
  },
  {
    id: 31927,
    title: 'Вино Cavino Ionos White',
    link: `${domain}/catalog/product/cavino_ionos_white_5201015013213_31927/`,
    image: `${domain}/upload/resize_cache/iblock/b5f/440_440_010aee0ef690a70e74e10e786b796fd5f/b5f3153648d510b1096a0549c2fe7e94.png`,
    text: 'Компания CAVINO S.A. была основана в 1958 году в городе Эгио на п-ове Пелопоннес Константином Анастасиус и Иоаннисом Дускасом. Сегодня, CAVINO, являясь национальным лидером по производству и экспорту вин. Ежегодный объем производства вина составляет 8,5 млн. бутылок. Компания была удостоена наградой Лучшая винодельческая компания Греции «The Best Greek Winery» в 2009 году журналом IWS. CAVINO сертифицирован по стандартам качества ISO и IFS, обеспечивая высокий уровень качества продукции.',
    price: 1770,
    type: EProductType.vine,
  },
  {
    id: 22476,
    title: 'Вино KWV Classic Chardonnay',
    link: `${domain}/catalog/product/kwv_classic_chardonnay_6002323414230_22476/`,
    image: `${domain}/upload/resize_cache/iblock/e62/440_440_010aee0ef690a70e74e10e786b796fd5f/e627374e357301e4143fd042cd824926.jpg`,
    text: 'KWV является историческим хозяйством Южной Африки; оно было создано в 1918 году. На момент своего образования, в него вошло 90% всех виноградарей страны. Его целью стало не только производство качественных вин, но и создание стандартов в виноделии. Сегодня KWV разросся до производителя мирового уровня, и объединяет около 100 виноградарей. Компания гордится качеством своих вин, созданных из лучшего винограда, который производит Западный Кейп. Вина делаются на собственной винодельне KWV в Паарле, сердце виноделия Кейпа. В 2015 году главный винодел KWV – Джон Фурье – получил звание винодела года.',
    price: 1120,
    type: EProductType.vine,
  },
  {
    id: 24323,
    title: "Игристое вино Fiorino d'Oro Prosecco Spumante, в подарочной упаковке",
    link: `${domain}/catalog/product/fiorino_d_oro_prosecco_spumante_v_podarochnoy_upakovke_2300100002040_24323/`,
    image: `${domain}/upload/resize_cache/iblock/e6e/440_440_010aee0ef690a70e74e10e786b796fd5f/e6e2968feba91fc038f866a38cb2ab86.jpg`,
    text: 'Винодельческое хозяйство Аббация производит свои вина с 1848 г. Сегодня во главе Дома стоит Марио Сантеро и трое его детей, представляющие четвертое поколение семьи виноделов. Каза Виникола Аббация, расположенная по соседству с действующим бенедектинским аббатством (а “Аббация” в переводе с итальянского означает аббатство) в местечке Санто Стефано Бельбо в Пьемонте, производит вина с 1948 года.',
    price: 1650,
    type: EProductType.shamp,
  },
  {
    id: 31590,
    title: 'Игристое вино Freixenet Ice Cava',
    link: `${domain}/catalog/product/freixenet_ice_cava_162447_31590/`,
    image: `${domain}/upload/resize_cache/iblock/2ea/440_440_010aee0ef690a70e74e10e786b796fd5f/2eaba6c4b6bebdb9c28c522bb5e19b7c.jpg`,
    text: 'Компания Freixenet была основана в 1889 году после того, как Педро Феррер Бош, владелец виноградников "La Freixeneda" сочетался браком с Долорес Сала Виве, наследницей винного торгового дома с 200-летней историей "Sala". Фрешенет является одним из крупнейших и старейших производителей игристого вина в Испании, который экспортирует свою продукцию более чем в 120 стран мира. Винодельня расположена в регионе Пенедес, в самом центре Каталонии, в 40 км к юго-западу от Барселоны. Климат и меловые почвы этой области идеально подходят для выращивания винограда.',
    price: 1364,
    type: EProductType.shamp,
  },
  {
    id: 36937,
    title: 'Аперитив Pernod Ricard Pastis de Marseille',
    link: `${domain}/catalog/product/pernod_ricard_pastis_de_marseille_3163937011000_36937/`,
    image: `${domain}/upload/resize_cache/iblock/355/440_440_010aee0ef690a70e74e10e786b796fd5f/3550f6c6ff0c32f894c97cde1a5223b4.jpg`,
    text: 'Pernod Ricard - французская компания, производитель и дистрибутор алкогольных напитков. Штаб-квартира — в Париже. Теперь вы знаете почему покупатели ценят и выбирают Аперитив от Перно Рикар и готовы приобрести именно его Аперитив и высоко ценят Пастис де Марсель Рикар. Сегодня очень просто найти и купить Аперитив в магазине АСТ или ознакомится с Пастис де Марсель Рикар 0.7 л. в Винотеке вашего города.',
    price: 1702,
    type: EProductType.strong,
  },
  {
    id: 26411,
    title: 'Водка Мамонт, в подарочной упаковке + 2 стакана',
    link: `${domain}/catalog/product/mamont_v_podarochnoy_upakovke_2_stakana_46027260004360_26411/`,
    image: `${domain}/upload/resize_cache/iblock/2dd/440_440_010aee0ef690a70e74e10e786b796fd5f/2dd452dee0646d752edc14780d05f838.jpg`,
    text: 'Водка прекрасна для употребления в чистом виде, со льдом, для добавления в коктейли, с легкими салатами, изысканными закусками, блюдами из рыбы и мяса.',
    price: 3480,
    type: EProductType.strong,
  },
];

export class ProductsService {
  readonly products: IProduct[];

  constructor() {
    this.products = products;
  }

  getById(id: number): IProduct | undefined {
    return this.products.find((prod) => prod.id === id);
  }

  get byType() {
    return this.products.reduce((group, product) => {
      if (!group[product.type]) {
        // eslint-disable-next-line no-param-reassign
        group[product.type] = [];
      }

      group[product.type].push(product);
      return group;
    }, {});
  }

  get all() {
    return this.products;
  }
}
