# [![meetups](media/repo-banner@2x.png)](https://www.bigchaindb.com)

> Microservice to cache and expose [our upcoming Meetups](https://www.meetup.com/BigchainDB-IPDB-Meetup/) for use throughout [www.bigchaindb.com](https://www.bigchaindb.com).

[![Build Status](https://travis-ci.org/bigchaindb/meetups.svg?branch=master)](https://travis-ci.org/bigchaindb/meetups)
[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo)
[![Greenkeeper badge](https://badges.greenkeeper.io/bigchaindb/meetups.svg)](https://greenkeeper.io/)
<img src="http://forthebadge.com/images/badges/powered-by-electricity.svg" height="20"/>
<img src="http://forthebadge.com/images/badges/as-seen-on-tv.svg" height="20"/>
<img src="http://forthebadge.com/images/badges/uses-badges.svg" height="20"/>

## API

Endpoint: [`https://bigchaindb-meetups.now.sh`](https://bigchaindb-meetups.now.sh)

### GET /

**200**: Returns all upcoming meetups, e.g.:

```json
[
  {
      created: 1480492250000,
      id: "235925067",
      name: "Privacy on the Blockchain",
      rsvp_limit: 55,
      status: "upcoming",
      time: 1496854800000,
      updated: 1495634541000,
      utc_offset: 7200000,
      waitlist_count: 9,
      yes_rsvp_count: 61,
      venue: {
         id: 24947394,
         name: "BlueYard",
         lat: 52.49262237548828,
         lon: 13.413067817687988,
         repinned: false,
         address_1: "Grimmstraße 13, 10967 ",
         city: "Berlin",
         country: "de",
         localized_country_name: "Germany"
     },
     group: {
         created: 1480330155000,
         name: "BigchainDB & IPDB Meetup",
         id: 21301439,
         join_mode: "open",
         lat: 52.52000045776367,
         lon: 13.380000114440918,
         urlname: "BigchainDB-IPDB-Meetup",
         who: "Members"
     },
     link: "https://www.meetup.com/BigchainDB-IPDB-Meetup/events/235925067/",
     description: ""
     visibility: "public"
 },
 ...
]
```

## Development

Install dependencies:

```bash
npm install
```

And run the server:

```bash
npm start
```

## Test

Run the tests:

```bash
npm test
```

## Deployment

Deploy to [now](https://zeit.co/now), make sure to switch to BigchainDB org before deploying:

```bash
# first run
now login
now switch

# deploy
now
# switch alias to new deployment, e.g.
now alias bigchaindb-meetups-wxkyissxos bigchaindb-meetups
```

## Authors

- Matthias Kretschmann ([@kremalicious](https://github.com/kremalicious)) - [BigchainDB](https://www.bigchaindb.com)
