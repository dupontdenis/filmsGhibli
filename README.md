## Films Ghibli (Express + Pug)

Browse Studio Ghibli films fetched from the public Ghibli API and rendered server-side with Express and Pug. The app shows a grid of film thumbnails with titles and directors, using Bootstrap for layout and a small custom stylesheet.

### What this app does

- Starts an Express server (default on port 8080)
- Calls the Studio Ghibli API at https://ghibliapi.dev/films
- Renders the first 100 films as responsive cards via Pug templates
- Uses Bootstrap for styling plus a custom `public/style.css`

> Tip: The only route is `/films`. Navigate to `http://localhost:8080/films` after starting the server.

---

## Tech stack

- Node.js + Express
- Pug (server-side templates)
- Axios (HTTP client)
- Bootstrap (via CDN)
- debug (namespaced logging)

---

## Getting started

### Prerequisites

- Node.js 14+ (18+ recommended)

### Install dependencies

```bash
npm install
```

### Run the server

```bash
# simplest
npm start

# default port 8080
node index.js

# choose your own port
PORT=3000 npm start

# optional: enable debug logs for this app
DEBUG=films npm start
```

Then open:

- http://localhost:8080/films

---

## Project structure

```
.
├─ index.js                 # Express app and route
├─ package.json             # Dependencies and scripts
├─ public/
│  └─ style.css            # Custom styles
└─ views/                   # Pug templates
	├─ layout.pug           # Base layout, loads Bootstrap
	├─ index.pug            # Film grid page (extends layout)
	├─ includes/
	│  ├─ header.pug
	│  ├─ footer.pug
	│  └─ jumbotron.pug
	└─ mixins/
		└─ _thumbCard.pug   # Reusable film card mixin
```

---

## How it works

1. `GET /films` route fetches films from `https://ghibliapi.dev/films` using Axios.
2. The response (array of film objects) is passed to the `views/index.pug` template along with `nb=100` to limit the number shown.
3. `index.pug` uses the `thumbCard` mixin to render each film's image, title, director, and a link to the film detail API URL.
4. Layout and scripts are provided via `views/layout.pug` using Bootstrap CDN assets.

---

## Configuration

- `PORT` (optional): Port for the HTTP server. Defaults to `8080`.
- `DEBUG` (optional): Set to `films` to enable namespaced debug logs from this app.

Examples:

```bash
PORT=3000 node index.js
DEBUG=films node index.js
```

---

## Known routes

- `GET /films` — Renders the films grid page

---

## Troubleshooting

- Getting a blank page or 404 at `/`? The app doesn’t define a root route. Go to `/films` directly.
- No films rendering? Check the network; the app depends on the public Studio Ghibli API being reachable.
- Want verbose logs? Run with `DEBUG=films`.

---

## Credits

- Studio Ghibli API: https://ghibliapi.dev/
- Bootstrap Album example for layout inspiration

---

## License

ISC (see `package.json`)

---
