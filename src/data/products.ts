import imgAlmonds from '../assets/images/wholesale_almonds_1786627719104.jpg';
import imgBrazilNuts from '../assets/images/product_brazil_nuts_1786628248446.jpg';
import imgCashews from '../assets/images/product_cashews_1786628256693.jpg';
import imgPecans from '../assets/images/product_pecans_1786628268026.jpg';
import imgWalnuts from '../assets/images/product_walnuts_1786628280687.jpg';
import imgPistachios from '../assets/images/product_pistachios_1786628291622.jpg';
import imgHazelnuts from '../assets/images/product_hazelnuts_1786628301446.jpg';
import imgMacadamia from '../assets/images/product_macadamia_1786628314948.jpg';
import imgPineNuts from '../assets/images/product_pine_nuts_1786628324499.jpg';
import imgChestnuts from '../assets/images/product_chestnuts_1786628334438.jpg';

export interface Product {
  id: string;
  shortName: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  specs: {
    product: string;
    grade: string;
    origin: string;
    moq: string;
    moisture: string;
    size: string;
  };
  emailSubject: string;
}

export const products: Product[] = [
  {
    id: 'almonds',
    shortName: 'Almonds',
    title: 'Supreme Raw',
    subtitle: 'California Almonds',
    description: 'Premium quality wholesale almonds, sourced directly from certified orchards. Ideal for high-end roasting, confections, and retail packaging.',
    image: imgAlmonds,
    specs: {
      product: 'Supreme Almonds (Nonpareil)',
      grade: 'USDA Fancy',
      origin: 'California, USA',
      moq: '2,000 lbs (1 Pallet)',
      moisture: 'Max 5.0%',
      size: '23/25 Count per Ounce',
    },
    emailSubject: 'New Bulk Quote Request: Supreme Almonds',
  },
  {
    id: 'brazil-nuts',
    shortName: 'Brazil Nuts',
    title: 'Wild Harvested',
    subtitle: 'Amazonian Brazil Nuts',
    description: 'Sustainably wild-harvested Brazil nuts offering a rich, creamy texture and exceptional selenium content. Perfectly sized for premium mixed nut blends and gourmet snacking.',
    image: imgBrazilNuts,
    specs: {
      product: 'Shelled Brazil Nuts',
      grade: 'Prime Quality / Medium',
      origin: 'Bolivia / Brazil',
      moq: '2,000 lbs (1 Pallet)',
      moisture: 'Max 4.5%',
      size: '110-130 Count per Pound',
    },
    emailSubject: 'New Bulk Quote Request: Brazil Nuts',
  },
  {
    id: 'cashews',
    shortName: 'Cashews',
    title: 'Whole White',
    subtitle: 'Premium Cashews',
    description: 'Delicately sweet, buttery cashews processed to the highest standards. Perfectly intact wholes suited for premium retail and gourmet culinary applications.',
    image: imgCashews,
    specs: {
      product: 'White Whole Cashews',
      grade: 'W240 / W320',
      origin: 'Vietnam / India',
      moq: '2,000 lbs (1 Pallet)',
      moisture: 'Max 5.0%',
      size: '240/320 Count per Pound',
    },
    emailSubject: 'New Bulk Quote Request: Cashews',
  },
  {
    id: 'pecans',
    shortName: 'Pecans',
    title: 'Mammoth Halves',
    subtitle: 'Southern Pecans',
    description: 'Rich, golden pecan halves boasting a robust, buttery flavor profile. Ideal for high-end bakeries, confectioners, and luxury snack producers.',
    image: imgPecans,
    specs: {
      product: 'Pecan Halves',
      grade: 'US No. 1 Fancy',
      origin: 'Georgia, USA / Mexico',
      moq: '2,000 lbs (1 Pallet)',
      moisture: 'Max 4.5%',
      size: 'Mammoth (250-300 per lb)',
    },
    emailSubject: 'New Bulk Quote Request: Pecans',
  },
  {
    id: 'walnuts',
    shortName: 'Walnuts',
    title: 'Light Halves',
    subtitle: 'English Walnuts',
    description: 'Crisp, mild-tasting English walnuts with a brilliantly light color. Carefully cracked to preserve structural integrity for premium visual presentation.',
    image: imgWalnuts,
    specs: {
      product: 'English Walnut Halves',
      grade: 'Light Halves (80% Halves)',
      origin: 'California, USA / Chile',
      moq: '2,000 lbs (1 Pallet)',
      moisture: 'Max 4.3%',
      size: '30mm and larger',
    },
    emailSubject: 'New Bulk Quote Request: Walnuts',
  },
  {
    id: 'pistachios',
    shortName: 'Pistachios',
    title: 'Roasted & Salted',
    subtitle: 'In-Shell Pistachios',
    description: 'Naturally split, naturally vibrant in-shell pistachios. Dry roasted to perfection for an irresistible crunch, perfect for wholesale snack distribution.',
    image: imgPistachios,
    specs: {
      product: 'In-Shell Pistachios',
      grade: 'US Extra No. 1',
      origin: 'California, USA',
      moq: '2,000 lbs (1 Pallet)',
      moisture: 'Max 5.0%',
      size: '21/25 Count per Ounce',
    },
    emailSubject: 'New Bulk Quote Request: Pistachios',
  },
  {
    id: 'hazelnuts',
    shortName: 'Hazelnuts',
    title: 'Blanched Whole',
    subtitle: 'Premium Hazelnuts',
    description: 'Expertly blanched hazelnuts (filberts) delivering a clean, sweet, and robust flavor. Essential for industrial chocolate manufacturing and premium baking.',
    image: imgHazelnuts,
    specs: {
      product: 'Blanched Hazelnuts',
      grade: 'Extra Class',
      origin: 'Ordu, Turkey',
      moq: '2,000 lbs (1 Pallet)',
      moisture: 'Max 6.0%',
      size: '11-13mm / 13-15mm',
    },
    emailSubject: 'New Bulk Quote Request: Hazelnuts',
  },
  {
    id: 'macadamia',
    shortName: 'Macadamia Nuts',
    title: 'Style 1 Whole',
    subtitle: 'Macadamia Nuts',
    description: 'Luxurious, exceptionally rich and buttery macadamia nuts. Unmatched in texture and flavor, sourced specifically for elite confectionery and snack brands.',
    image: imgMacadamia,
    specs: {
      product: 'Raw Macadamia Kernels',
      grade: 'Style 1 (Minimum 90% Whole)',
      origin: 'Australia / South Africa',
      moq: '2,000 lbs (1 Pallet)',
      moisture: 'Max 1.5%',
      size: '16mm - 20mm',
    },
    emailSubject: 'New Bulk Quote Request: Macadamia Nuts',
  },
  {
    id: 'pine-nuts',
    shortName: 'Pine Nuts',
    title: 'Grade A Kernels',
    subtitle: 'Siberian Pine Nuts',
    description: 'Delicate, tear-shaped pine kernels offering a subtle sweetness and smooth texture. A high-value ingredient for industrial pesto production and gourmet cuisine.',
    image: imgPineNuts,
    specs: {
      product: 'Shelled Pine Nuts',
      grade: 'Grade A Premium',
      origin: 'Siberia, Russia / China',
      moq: '1,000 lbs (Half Pallet)',
      moisture: 'Max 3.5%',
      size: '600-650 Count per 100g',
    },
    emailSubject: 'New Bulk Quote Request: Pine Nuts',
  },
  {
    id: 'chestnuts',
    shortName: 'Chestnuts',
    title: 'Fresh Whole',
    subtitle: 'European Chestnuts',
    description: 'Large, sweet European chestnuts with excellent peeling qualities. Ideal for wholesale seasonal roasting, purees, and specialized culinary processing.',
    image: imgChestnuts,
    specs: {
      product: 'Fresh Chestnuts (Castanea sativa)',
      grade: 'Class 1 / Grade AA',
      origin: 'Campania, Italy',
      moq: '2,000 lbs (1 Pallet)',
      moisture: 'Max 40.0% (Fresh)',
      size: '40-60 Pieces per kg',
    },
    emailSubject: 'New Bulk Quote Request: Chestnuts',
  }
];
