// Business constants + real asset pool (scraped from sustainablescapes.co.nz).
// NAP, contact, social, and the client's own project photography (reused, not invented).
// NOTE pre-live: self-host these images in /public for white-label + performance.

export const SITE = {
  name: 'Sustainable Scapes',
  domain: 'https://sustainablescapes.lazymagnet.com',
  phoneDisplay: '020 4091 4516',
  phoneTel: '+642040914516',
  email: 'nigel@sustainablescapes.co.nz',
  region: 'Gisborne',
  areaServed: 'Gisborne & the surrounding region',
  facebook: 'https://www.facebook.com/sustainablescapes',
  instagram: 'https://www.instagram.com/sustainablescapes',
  shop: 'https://shop.sustainablescapes.co.nz/',
  logo: 'https://assets.cdn.filesafe.space/Rp9hohoHP7prn06l2xlt/media/662ecf898f22b95c3c363364.png',
  favicon: 'https://assets.cdn.filesafe.space/Rp9hohoHP7prn06l2xlt/media/67345c0e353d386c55a40f3c.png',
};

const A = 'https://assets.cdn.filesafe.space/Rp9hohoHP7prn06l2xlt/media/';
const G = 'https://storage.googleapis.com/msgsndr/Rp9hohoHP7prn06l2xlt/media/';

// Real project photography from the client's existing site.
export const PHOTOS = {
  heroFeature: `${A}69965d633fd42076225633ee.jpg`,
  whyChoose: `${A}69b9f14c9c9817224bd32228.jpg`,
  gallery: [
    `${A}699d55165dfd502c96b39ab3.jpg`,
    `${A}69bb1f2553d4f19439b43485.jpg`,
    `${A}6992c6086bac2461b0b9eab6.jpg`,
    `${A}69966625b3d5f8291c6b4fda.jpg`,
    `${A}699d538d590acbb616f456e1.jpg`,
    `${A}699d52721001a590fc137804.jpg`,
    `${A}69966524f02fa4099b6c1b9e.jpg`,
    `${A}662f08198f22b9638538b76a.jpeg`,
    `${A}69bb47ada37cc254e4f0c3e5.jpg`,
    `${G}6700a143b27ab0ef05ce7058.jpeg`,
    `${G}6700a379d96860c94c0ff323.jpeg`,
    `${G}6700afcad968606c800ffe15.jpeg`,
    `${G}64b505e0fc60ad0b2f5e6fd6.jpeg`,
    `${G}670dfe2db23cb154b15d8dc0.jpeg`,
    `${G}670e007938ad6b7b8eaf12c5.jpeg`,
    `${G}6700a43fd96860a2980ff382.jpeg`,
  ],
};
