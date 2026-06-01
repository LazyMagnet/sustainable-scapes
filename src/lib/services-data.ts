// Sustainable Scapes service spokes. Real depth, customer language, NZ English, no em-dashes.
// Content grounded in the client's existing positioning: practical, end-to-end, built for
// Gisborne ground conditions, sustainable and low-maintenance. No invented stats or credentials.
import { PHOTOS } from './site';

export interface Service {
  slug: string;
  label: string;
  navLabel: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string;
  primaryKeyword: string;
  eyebrow: string;
  h1: string;
  intro: string;
  heroImage: string;
  body: { heading: string; text: string }[];
  features: { name: string; desc: string }[];
  faqs: { q: string; a: string }[];
}

const g = PHOTOS.gallery;

export const SERVICES: Record<string, Service> = {
  'astroturf-installation-gisborne': {
    slug: 'astroturf-installation-gisborne',
    label: 'Astroturf Installation',
    navLabel: 'Astroturf',
    metaTitle: 'Astroturf Installation Gisborne | Sustainable Scapes',
    metaDescription: 'Astroturf installation in Gisborne with proper base preparation for a level, hard-wearing lawn that looks good all year and needs almost no upkeep.',
    keywords: 'astroturf installation gisborne, artificial turf gisborne, fake grass gisborne, astroturf lawn',
    primaryKeyword: 'astroturf installation',
    eyebrow: 'Astroturf',
    h1: 'Astroturf installation that looks good all year',
    intro: 'A green, level lawn with none of the mowing, watering or muddy patches. Done properly, artificial turf is one of the lowest-maintenance upgrades you can make to a Gisborne property, but the result lives or dies on the base underneath it. We prepare the ground properly so your turf stays flat, drains well and lasts.',
    heroImage: g[0],
    body: [
      { heading: 'The base is what makes it last', text: 'Most astroturf that goes lumpy, holds water or lifts at the edges was let down by a rushed base. We excavate to the right depth, lay and compact the correct aggregate, set falls for drainage, and secure the edges before a single roll goes down. It is the unseen work that decides whether your lawn still looks level in five years.' },
      { heading: 'Where it earns its keep', text: 'Artificial turf suits the spots real grass struggles: shaded courtyards, high-traffic entranceways, pet areas, pool surrounds and rentals where upkeep needs to be near zero. We will tell you honestly where it is the right call and where real planting would serve you better.' },
    ],
    features: [
      { name: 'Proper excavation and compacted base', desc: 'The groundwork that keeps the surface level and free-draining for the long term.' },
      { name: 'Pet and family friendly', desc: 'Hard-wearing, easy to rinse down, and soft enough to use barefoot.' },
      { name: 'Tidy, secured edges', desc: 'Clean joins and fixed perimeters so nothing lifts or frays over time.' },
      { name: 'Almost no maintenance', desc: 'No mowing, no watering, no muddy patches. An occasional brush and rinse is about it.' },
    ],
    faqs: [
      { q: 'How long does astroturf last?', a: 'A quality turf on a properly prepared base will give you many years of use. The base preparation is the single biggest factor in how long it stays looking good.' },
      { q: 'Does it drain in heavy rain?', a: 'Yes, when it is installed with the right base and falls. We set the ground up so water moves away rather than pooling on the surface.' },
    ],
  },

  'paving-concreting-gisborne': {
    slug: 'paving-concreting-gisborne',
    label: 'Paving & Concreting',
    navLabel: 'Paving & Concreting',
    metaTitle: 'Paving and Concreting Gisborne | Sustainable Scapes',
    metaDescription: 'Paving and concreting in Gisborne for patios, paths, driveways and outdoor living areas. Built on a solid base with proper falls, so it lasts and drains.',
    keywords: 'paving gisborne, concreting gisborne, paving and concreting, driveways patios gisborne',
    primaryKeyword: 'paving and concreting',
    eyebrow: 'Hard landscaping',
    h1: 'Paving and concreting that lasts in Gisborne',
    intro: 'Patios, paths, driveways and outdoor living areas that stay flat, drain properly and still look good years on. Hard landscaping is the bones of an outdoor space, and like everything we do, the difference is in the preparation underneath.',
    heroImage: g[1],
    body: [
      { heading: 'Surfaces that hold up', text: 'Cracked concrete and lifting pavers usually trace back to a base that was not built for the load or the ground it sits on. We prepare and compact properly, set the right falls for drainage, and finish to a standard that handles foot traffic, vehicles and Gisborne weather without moving.' },
      { heading: 'Part of the bigger picture', text: 'Paving rarely stands alone. Because we handle the full outdoor space, your new patio or path is planned to work with the planting, levels, drainage and the rest of the section, rather than being dropped in and worked around later.' },
    ],
    features: [
      { name: 'Patios and outdoor living areas', desc: 'Usable, good-looking spaces that connect the house to the garden.' },
      { name: 'Paths and driveways', desc: 'Durable surfaces built for the traffic they actually carry.' },
      { name: 'Proper falls and drainage', desc: 'Water directed away from the house and surfaces, not left to pool.' },
      { name: 'Coordinated with your landscape', desc: 'Designed to fit the levels and planting around it, not retrofitted later.' },
    ],
    faqs: [
      { q: 'Can you match an existing patio or path?', a: 'In most cases yes. We will look at what you have and advise on materials and finishes that tie in rather than clash.' },
      { q: 'Do you handle the drainage too?', a: 'Yes. Falls and drainage are part of getting paving and concreting right, so we plan them in from the start.' },
    ],
  },

  'landscape-design-construction-gisborne': {
    slug: 'landscape-design-construction-gisborne',
    label: 'Landscape Design & Construction',
    navLabel: 'Design & Build',
    metaTitle: 'Landscape Design & Construction Gisborne | Sustainable Scapes',
    metaDescription: 'Landscape design and construction in Gisborne, from concept to finished outdoor space. One team handling design, build and planting for a result that works.',
    keywords: 'landscape design gisborne, landscape construction gisborne, landscaper gisborne, garden design gisborne',
    primaryKeyword: 'landscape design',
    eyebrow: 'Design & build',
    h1: 'Landscape design and construction, start to finish',
    intro: 'A great outdoor space is planned, not assembled piece by piece. We design and build landscapes as one coordinated job, so the levels, paving, planting and drainage all work together and the finished result is something that performs for years, not just looks good on day one.',
    heroImage: g[2],
    body: [
      { heading: 'Design that suits the site', text: 'We start with how you want to use the space and what the site itself will allow, the aspect, the slope, the soil and the climate. From there we shape a design that fits Gisborne conditions and your budget, rather than forcing a look that fights the land it sits on.' },
      { heading: 'One team, one accountable result', text: 'Because the same team designs and builds, nothing gets lost in handover. The plan that is drawn is the plan that gets built, and we are accountable for the whole outcome, from the first cut to the final plant.' },
    ],
    features: [
      { name: 'Concept to completion', desc: 'A single coordinated project rather than a string of disconnected trades.' },
      { name: 'Designed for your site', desc: 'Aspect, slope, soil and climate factored in from the start.' },
      { name: 'Built to last', desc: 'Construction standards that hold up to real use and real weather.' },
      { name: 'Planting that fits the build', desc: 'The right plants in the right places, integrated with the hard landscaping.' },
    ],
    faqs: [
      { q: 'Do I have to use you for both design and build?', a: 'It works best as one project, but we are happy to talk through what suits your situation. The advantage of one team is there are no gaps between design and delivery.' },
      { q: 'Can you work to a budget?', a: 'Yes. We shape the design around what you want to spend and are upfront about what is realistic, so there are no surprises.' },
    ],
  },

  'garden-maintenance-gisborne': {
    slug: 'garden-maintenance-gisborne',
    label: 'Garden & Landscape Maintenance',
    navLabel: 'Maintenance',
    metaTitle: 'Garden Maintenance Gisborne | Sustainable Scapes',
    metaDescription: 'Garden and landscape maintenance in Gisborne for homes and commercial properties. Reliable, regular upkeep that keeps your outdoor space looking its best.',
    keywords: 'garden maintenance gisborne, landscape maintenance gisborne, lawn care gisborne, commercial grounds maintenance',
    primaryKeyword: 'garden maintenance',
    eyebrow: 'Maintenance',
    h1: 'Garden maintenance that keeps it looking sharp',
    intro: 'A good landscape is worth protecting. Regular, reliable maintenance keeps your garden healthy and tidy without you having to think about it, whether it is a home garden you want to enjoy rather than work on, or a commercial property that needs to stay presentable year-round.',
    heroImage: g[3],
    body: [
      { heading: 'Upkeep without the hassle', text: 'We handle the ongoing work that keeps a space looking after itself: pruning, weeding, mulching, hedge and lawn care, and keeping planting healthy through the seasons. You come home to a tidy garden instead of a list of jobs.' },
      { heading: 'Reliable for commercial grounds', text: 'For businesses and property managers, a well-kept exterior is the first thing people see. We provide dependable, scheduled maintenance so your grounds stay presentable without you chasing it.' },
    ],
    features: [
      { name: 'Regular scheduled visits', desc: 'Consistent upkeep so the garden never gets away on you.' },
      { name: 'Pruning, weeding and mulching', desc: 'The seasonal work that keeps planting healthy and tidy.' },
      { name: 'Lawn and hedge care', desc: 'Edges, lawns and hedges kept sharp and under control.' },
      { name: 'Residential and commercial', desc: 'From home gardens to commercial grounds that need to stay presentable.' },
    ],
    faqs: [
      { q: 'Can I get a one-off tidy-up rather than regular visits?', a: 'Yes. We do both one-off clean-ups and ongoing scheduled maintenance, whichever suits you.' },
      { q: 'Do you maintain gardens you did not build?', a: 'Absolutely. We are happy to take on the upkeep of any garden, not just the ones we have landscaped.' },
    ],
  },

  'dingo-works-trenching-gisborne': {
    slug: 'dingo-works-trenching-gisborne',
    label: 'Dingo Works & Trenching',
    navLabel: 'Dingo Works',
    metaTitle: 'Dingo Works & Trenching Gisborne | Sustainable Scapes',
    metaDescription: 'Dingo works and trenching in Gisborne. Compact machine access for digging, levelling, trenching and post holes in tight spots a full-size machine cannot reach.',
    keywords: 'dingo works gisborne, trenching gisborne, mini digger gisborne, post holes levelling gisborne',
    primaryKeyword: 'dingo works',
    eyebrow: 'Machine work',
    h1: 'Dingo works and trenching for tight sites',
    intro: 'Some jobs need a machine, but not every site has room for a big one. A compact dingo gets through gateways and down the side of a house to do the heavy work by hand you would otherwise be stuck doing with a shovel, from trenching and levelling to post holes and material shifting.',
    heroImage: g[4],
    body: [
      { heading: 'Access where it counts', text: 'A dingo is small enough to fit through standard access yet capable enough to save hours of hard labour. That makes it ideal for established Gisborne properties where a full-size machine simply cannot get in without tearing things up.' },
      { heading: 'The groundwork behind the finish', text: 'Trenching for irrigation and drainage, levelling for paving and lawns, digging footings, boring post holes and moving soil or aggregate around site, it is the unglamorous work that everything else is built on, done quickly and cleanly.' },
    ],
    features: [
      { name: 'Tight-access capability', desc: 'Fits through gateways and side paths a standard machine cannot.' },
      { name: 'Trenching and drainage', desc: 'Clean trenches for irrigation, drainage and services.' },
      { name: 'Levelling and grading', desc: 'Ground prepared accurately for paving, lawns and builds.' },
      { name: 'Post holes and footings', desc: 'Fast, consistent holes for fences, structures and decks.' },
    ],
    faqs: [
      { q: 'Will it fit through my gate?', a: 'A dingo fits through most standard gateways and side accesses. Tell us about your access and we will confirm before we start.' },
      { q: 'Can I book dingo work on its own?', a: 'Yes. We do machine work as a standalone job or as part of a larger landscaping project.' },
    ],
  },

  'planting-native-subtropical-gisborne': {
    slug: 'planting-native-subtropical-gisborne',
    label: 'Planting (Native & Sub-tropical)',
    navLabel: 'Planting',
    metaTitle: 'Planting: Native & Sub-tropical Gisborne | Sustainable Scapes',
    metaDescription: 'Planting in Gisborne with NZ natives and sub-tropical species chosen for local conditions. The right plants in the right places for a garden that thrives.',
    keywords: 'planting gisborne, native planting gisborne, subtropical plants gisborne, garden planting',
    primaryKeyword: 'planting',
    eyebrow: 'Planting',
    h1: 'Planting that suits Gisborne, native and sub-tropical',
    intro: 'The right plant in the right place looks after itself. We plant NZ natives and sub-tropical species chosen for Gisborne soil, sun and climate, drawing on the same carefully selected range we stock in our plant shop, so your garden establishes well and keeps thriving with less work.',
    heroImage: g[5],
    body: [
      { heading: 'Chosen for where they are going', text: 'A plant that thrives in one corner can struggle a few metres away. We match species to the actual conditions of each spot, the sun, the wind, the drainage and the soil, so planting establishes properly instead of being a guess that needs replacing.' },
      { heading: 'Natives and sub-tropicals that earn their place', text: 'From hardy NZ natives that support local birdlife and lock down banks, to the lush sub-tropical look that suits the Gisborne climate, we plant for the result you want and the upkeep you are realistically willing to do.' },
    ],
    features: [
      { name: 'Right plant, right place', desc: 'Species matched to the sun, soil and drainage of each spot.' },
      { name: 'NZ natives', desc: 'Hardy, low-care planting that supports local birdlife and stabilises ground.' },
      { name: 'Sub-tropical selections', desc: 'The lush, green look that thrives in the Gisborne climate.' },
      { name: 'Backed by our own nursery range', desc: 'The same quality stock we use on our projects is available in our plant shop.' },
    ],
    faqs: [
      { q: 'Can you plant out a whole new garden?', a: 'Yes, from a single bed to a full section. We plan the planting so it works as a whole and establishes well.' },
      { q: 'Where do the plants come from?', a: 'We use carefully selected, locally suitable stock, including the range from our own Sustainable Scapes plant shop.' },
    ],
  },

  'section-development-gisborne': {
    slug: 'section-development-gisborne',
    label: 'Section Development',
    navLabel: 'Section Development',
    metaTitle: 'Section Development Gisborne | Sustainable Scapes',
    metaDescription: 'Section development in Gisborne for new builds and subdivisions. Site prep, levelling, drainage and landscaping that gets your section ready and finished.',
    keywords: 'section development gisborne, site preparation gisborne, new build landscaping, subdivision development gisborne',
    primaryKeyword: 'section development',
    eyebrow: 'Development',
    h1: 'Section development and site prep, sorted',
    intro: 'New builds and bare sections need more than a lawn rolled out at the end. We handle the full development of a section, from early clearing and levelling through drainage and access to the finished landscaping, coordinated so the stages flow and the project keeps moving.',
    heroImage: g[6],
    body: [
      { heading: 'For builders and developers', text: 'A bare or messy site slows everything down. We get sections ready for what comes next, clearing, shaping, levelling and sorting drainage and access, so trades can get on and the build stays on schedule.' },
      { heading: 'Through to a finished result', text: 'Once the hard work is done, we can take the section all the way to a finished outdoor space, lawns, planting, paving and the lot. One team across the stages means fewer delays and a result that is planned as a whole.' },
    ],
    features: [
      { name: 'Site clearing and shaping', desc: 'Getting a raw or overgrown section ready to work with.' },
      { name: 'Levelling and drainage', desc: 'Ground prepared and water managed before anything is built.' },
      { name: 'Access and groundwork', desc: 'The practical prep that keeps a build moving.' },
      { name: 'Finished landscaping', desc: 'Taken through to lawns, planting and outdoor living when you are ready.' },
    ],
    faqs: [
      { q: 'Do you work in with builders?', a: 'Yes. We regularly coordinate with builders and developers, fitting our stages around the build programme.' },
      { q: 'Can you do just the site prep?', a: 'Yes. We can handle prep only, or take the section all the way through to finished landscaping.' },
    ],
  },

  'site-clearing-gisborne': {
    slug: 'site-clearing-gisborne',
    label: 'Site Clearing',
    navLabel: 'Site Clearing',
    metaTitle: 'Site Clearing Gisborne | Sustainable Scapes',
    metaDescription: 'Site clearing in Gisborne. Overgrowth, debris and old structures cleared away so your section is a clean, workable starting point for whatever comes next.',
    keywords: 'site clearing gisborne, section clearing gisborne, land clearing gisborne, vegetation removal gisborne',
    primaryKeyword: 'site clearing',
    eyebrow: 'Clearing',
    h1: 'Site clearing that gets your project moving',
    intro: 'Every good outdoor project starts with a clean slate. We clear overgrowth, debris, old planting and redundant structures so your section becomes a workable starting point, removed and disposed of properly rather than pushed into a corner.',
    heroImage: g[7],
    body: [
      { heading: 'A proper clean start', text: 'Overgrown gardens, post-build mess and neglected sections all need clearing before anything useful can happen. We do it thoroughly, taking away the green waste and rubbish so you are left with a tidy, level base to build on.' },
      { heading: 'Set up for what is next', text: 'Clearing is rarely the end goal, so we clear with the next stage in mind, whether that is landscaping, a build or putting the property on the market. The result is a section that is genuinely ready, not just tidied on the surface.' },
    ],
    features: [
      { name: 'Overgrowth and vegetation removal', desc: 'Reclaiming a section that has got away on you.' },
      { name: 'Debris and rubbish clearance', desc: 'Post-build mess and old materials taken away and disposed of.' },
      { name: 'Old structure removal', desc: 'Redundant decks, sheds and planting cleared out.' },
      { name: 'Left ready to work', desc: 'A clean, level base set up for the next stage.' },
    ],
    faqs: [
      { q: 'Do you take the waste away?', a: 'Yes. We remove and dispose of the green waste and debris, so you are left with a clean site rather than a pile to deal with.' },
      { q: 'Can you clear an overgrown rental or sale property?', a: 'Yes. We regularly clear neglected sections to get them presentable for tenants, sale or development.' },
    ],
  },

  'timber-features-gisborne': {
    slug: 'timber-features-gisborne',
    label: 'Custom Timber Features',
    navLabel: 'Timber Features',
    metaTitle: 'Timber Features Gisborne | Sustainable Scapes',
    metaDescription: 'Custom timber features in Gisborne, including decks, screens, planters, fences and structures built to suit your space and stand up to local conditions.',
    keywords: 'timber features gisborne, decking gisborne, screens fences gisborne, timber structures gisborne',
    primaryKeyword: 'timber features',
    eyebrow: 'Timber',
    h1: 'Timber features, decks, screens and structures',
    intro: 'Timber adds warmth, privacy and usable space to an outdoor area. We design and build custom timber features that suit how you use the space and stand up to Gisborne conditions, from decks and screens to planters, fences and garden structures.',
    heroImage: g[8],
    body: [
      { heading: 'Built for the space and the weather', text: 'A good timber feature is more than carpentry. It needs to sit right in the space, suit how you use it, and be built and finished to handle sun, rain and time. We design and build with all of that in mind, so it still looks good seasons later.' },
      { heading: 'Part of a coordinated landscape', text: 'Decks, screens and structures work best when they are planned with the rest of the landscape rather than bolted on. Because we handle the whole space, your timber features connect properly to the levels, paving and planting around them.' },
    ],
    features: [
      { name: 'Decks and outdoor living', desc: 'Usable timber spaces that extend how you live outdoors.' },
      { name: 'Screens and privacy', desc: 'Good-looking screening that earns its place in the design.' },
      { name: 'Planters and structures', desc: 'Custom-built features made to fit your space.' },
      { name: 'Fences and boundaries', desc: 'Solid, tidy timber boundaries built to last.' },
    ],
    faqs: [
      { q: 'Do you design as well as build?', a: 'Yes. We design timber features to suit the space and how you use it, then build them properly to handle the conditions.' },
      { q: 'Can timber work be part of a larger project?', a: 'Yes, and it is usually better that way. Planned with the rest of the landscape, it ties in rather than looking added on.' },
    ],
  },

  'irrigation-gisborne': {
    slug: 'irrigation-gisborne',
    label: 'Irrigation Systems',
    navLabel: 'Irrigation',
    metaTitle: 'Irrigation Systems Gisborne | Sustainable Scapes',
    metaDescription: 'Irrigation in Gisborne. Efficient watering systems that keep your garden and lawn healthy through dry summers while using water sensibly, set and forget.',
    keywords: 'irrigation gisborne, watering systems gisborne, garden irrigation, lawn irrigation gisborne',
    primaryKeyword: 'irrigation',
    eyebrow: 'Watering',
    h1: 'Irrigation that keeps your garden alive through summer',
    intro: 'Gisborne summers are hard on a garden. A well-designed irrigation system takes the worry out of watering, keeping lawns and planting healthy through the dry months while using water efficiently, so you are not standing out there with a hose every evening.',
    heroImage: g[9],
    body: [
      { heading: 'Watering that works while you do not', text: 'A good system delivers the right amount of water to the right places automatically, so your garden stays healthy whether you are home or away. We design the layout around your planting and zones, rather than a one-size sprinkler that wastes water and misses spots.' },
      { heading: 'Efficient by design', text: 'Watering well and watering wisely are the same thing when the system is set up properly. We install efficient irrigation that gets water to the roots that need it and avoids the runoff and waste of doing it by hand.' },
    ],
    features: [
      { name: 'Designed around your garden', desc: 'Zones and layout planned for your planting, not a generic kit.' },
      { name: 'Automatic and set-and-forget', desc: 'Consistent watering without you having to think about it.' },
      { name: 'Water-efficient', desc: 'Water delivered where it is needed, with less waste and runoff.' },
      { name: 'Integrated with planting', desc: 'Installed as part of the landscape so it actually suits what is growing.' },
    ],
    faqs: [
      { q: 'Can you add irrigation to an existing garden?', a: 'Yes. We can design and install a system into an established garden, not just a new build.' },
      { q: 'Will it help during water restrictions?', a: 'An efficient, targeted system uses water far more sparingly than hand watering, which helps you get the most from what you are allowed to use.' },
    ],
  },
};

export const SERVICE_SLUGS = Object.keys(SERVICES);
