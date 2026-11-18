# US Trucking News

A single-page React news site for US trucking: diesel prices, road weather, the UZS ⇄ USD exchange rate and trucking technology.

## Features

- **News by topic:** "All news" shows the latest story per topic; filters show every story in a topic. Search covers all stories.
- **Live UZS ⇄ USD converter:** official rate from the Central Bank of Uzbekistan (`cbu.uz`), refreshed every 10 minutes, with a backup source and a last-known fallback.
- **Daily rate report:** fuel cost per mile, break-even and margin RPMs, solo/team gross, and a diesel price chart by state (sortable, with a table view).
- **Wind alert:** affected regions and highways, plus a "Can I drive in this wind?" checker based on the operating guidelines table.
- **Video stories:** the Numeo AI booking-call video plays inside its article.

## Run it

```bash
npm install
npm run dev
```

Build for production with `npm run build` (output goes to `dist/`).

## Updating content

Everything lives in `src/NewsPage.jsx`, at the top of the file:

| What | Where |
|---|---|
| News stories | `NEWS` (first story is the featured one; `image: img("<unsplash-id>")` or any URL) |
| Daily rate report and state prices | `DAILY_REPORT` |
| Wind alert regions and highways | `WIND_ALERT` (the map is the `WIND_MAP` image) |
| Fallback exchange rate and diesel figures | `RATES` |

Videos go in `public/videos/`.

Photos are from [Unsplash](https://unsplash.com/license) and load from Unsplash's servers.
