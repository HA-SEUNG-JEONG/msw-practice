import { rest } from "msw";

const item = [
  {
    badge_type: "tag_based",
    award_count: 1,
    rank: "bronze",
    badge_id: 11117,
    link: "https://stackoverflow.com/badges/11117/networkstream",
    name: "networkstream",
  },
  {
    badge_type: "tag_based",
    award_count: 11,
    rank: "bronze",
    badge_id: 2798,
    link: "https://stackoverflow.com/badges/2798/networkx",
    name: "networkx",
  },
  {
    badge_type: "tag_based",
    award_count: 39,
    rank: "bronze",
    badge_id: 2068,
    link: "https://stackoverflow.com/badges/2068/neural-network",
    name: "neural-network",
  },
  {
    badge_type: "tag_based",
    award_count: 3,
    rank: "bronze",
    badge_id: 4435,
    link: "https://stackoverflow.com/badges/4435/newline",
    name: "newline",
  },
  {
    badge_type: "tag_based",
    award_count: 6,
    rank: "bronze",
    badge_id: 1898,
    link: "https://stackoverflow.com/badges/1898/new-operator",
    name: "new-operator",
  },
  {
    badge_type: "tag_based",
    award_count: 22,
    rank: "bronze",
    badge_id: 9307,
    link: "https://stackoverflow.com/badges/9307/next-js",
    name: "next.js",
  },
  {
    badge_type: "tag_based",
    award_count: 1,
    rank: "bronze",
    badge_id: 10927,
    link: "https://stackoverflow.com/badges/10927/nextflow",
    name: "nextflow",
  },
  {
    badge_type: "tag_based",
    award_count: 1,
    rank: "bronze",
    badge_id: 11311,
    link: "https://stackoverflow.com/badges/11311/next-router",
    name: "next-router",
  },
  {
    badge_type: "tag_based",
    award_count: 7,
    rank: "bronze",
    badge_id: 2872,
    link: "https://stackoverflow.com/badges/2872/nexus",
    name: "nexus",
  },
  {
    badge_type: "tag_based",
    award_count: 6,
    rank: "bronze",
    badge_id: 2138,
    link: "https://stackoverflow.com/badges/2138/nfc",
    name: "nfc",
  },
  {
    badge_type: "tag_based",
    award_count: 1,
    rank: "bronze",
    badge_id: 6640,
    link: "https://stackoverflow.com/badges/6640/nfc-p2p",
    name: "nfc-p2p",
  },
  {
    badge_type: "tag_based",
    award_count: 1,
    rank: "bronze",
    badge_id: 11316,
    link: "https://stackoverflow.com/badges/11316/nft",
    name: "nft",
  },
  {
    badge_type: "tag_based",
    award_count: 1,
    rank: "bronze",
    badge_id: 5465,
    link: "https://stackoverflow.com/badges/5465/ng-animate",
    name: "ng-animate",
  },
  {
    badge_type: "tag_based",
    award_count: 3,
    rank: "bronze",
    badge_id: 7430,
    link: "https://stackoverflow.com/badges/7430/ng-bootstrap",
    name: "ng-bootstrap",
  },
  {
    badge_type: "tag_based",
    award_count: 3,
    rank: "bronze",
    badge_id: 6770,
    link: "https://stackoverflow.com/badges/6770/ngfor",
    name: "ngfor",
  },
  {
    badge_type: "tag_based",
    award_count: 1,
    rank: "bronze",
    badge_id: 5047,
    link: "https://stackoverflow.com/badges/5047/ng-grid",
    name: "ng-grid",
  },
  {
    badge_type: "tag_based",
    award_count: 57,
    rank: "bronze",
    badge_id: 2315,
    link: "https://stackoverflow.com/badges/2315/nginx",
    name: "nginx",
  },
  {
    badge_type: "tag_based",
    award_count: 1,
    rank: "bronze",
    badge_id: 11284,
    link: "https://stackoverflow.com/badges/11284/nginx-config",
    name: "nginx-config",
  },
  {
    badge_type: "tag_based",
    award_count: 3,
    rank: "bronze",
    badge_id: 9985,
    link: "https://stackoverflow.com/badges/9985/nginx-ingress",
    name: "nginx-ingress",
  },
  {
    badge_type: "tag_based",
    award_count: 1,
    rank: "bronze",
    badge_id: 7973,
    link: "https://stackoverflow.com/badges/7973/nginx-location",
    name: "nginx-location",
  },
  {
    badge_type: "tag_based",
    award_count: 1,
    rank: "bronze",
    badge_id: 11252,
    link: "https://stackoverflow.com/badges/11252/nginx-reverse-proxy",
    name: "nginx-reverse-proxy",
  },
  {
    badge_type: "tag_based",
    award_count: 1,
    rank: "bronze",
    badge_id: 6440,
    link: "https://stackoverflow.com/badges/6440/n-gram",
    name: "n-gram",
  },
  {
    badge_type: "tag_based",
    award_count: 1,
    rank: "bronze",
    badge_id: 6140,
    link: "https://stackoverflow.com/badges/6140/ng-repeat",
    name: "ng-repeat",
  },
  {
    badge_type: "tag_based",
    award_count: 1,
    rank: "bronze",
    badge_id: 9296,
    link: "https://stackoverflow.com/badges/9296/ngroute",
    name: "ngroute",
  },
  {
    badge_type: "tag_based",
    award_count: 6,
    rank: "bronze",
    badge_id: 6944,
    link: "https://stackoverflow.com/badges/6944/ngrx",
    name: "ngrx",
  },
  {
    badge_type: "tag_based",
    award_count: 1,
    rank: "bronze",
    badge_id: 9542,
    link: "https://stackoverflow.com/badges/9542/ngrx-effects",
    name: "ngrx-effects",
  },
  {
    badge_type: "tag_based",
    award_count: 1,
    rank: "bronze",
    badge_id: 9787,
    link: "https://stackoverflow.com/badges/9787/ngrx-store",
    name: "ngrx-store",
  },
  {
    badge_type: "tag_based",
    award_count: 1,
    rank: "bronze",
    badge_id: 8454,
    link: "https://stackoverflow.com/badges/8454/ngx-bootstrap",
    name: "ngx-bootstrap",
  },
];

export const handlers = [
  rest.get(
    "https://api.stackexchange.com/2.3/badges?order=desc&sort=rank&site=stackoverflow",
    (req, res, ctx) => {
      return res(ctx.status(200), ctx.json(item));
    }
  ),
];