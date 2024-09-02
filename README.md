# Tabia Health Frontend Challenge

### Steps to run project

Install dependencies: `npm i`

Build JSON file with random data: `npm run json 13 4`

(syntax: `npm run json <number of categories> <number of countries>`)

Start React app: `npm start` then open [this](http://localhost:3000/analysis/comparison) in new tab.

Run tests: `npm test`

If one of these steps fails, contact support (me).


### Remarks

This project uses [Bootstrap](https://getbootstrap.com/) to use flex box, pre-set margin and padding values and their responsivity breakpoints.

I decided to work with random data so I could test different sizes of table and test responsivity. Tables can be really challenging in terms of UX/UI, specially if you need to assure it works in different sizes of screen. If you have to show "a lot" of data, scroll bars can be used, then I decided to fix the identifications of countries and categories. I worked with native table, as you can see in `src/table/index.tsx`. For the cells, I used a library called [styled components](https://styled-components.com/) because the value inside a cell is a parameter for styling. The unit test make sure the current icon for sorting is updated after clicking. The Sass file should've been refactored, since its selectors ended up too confusing.

Since a sidebar was part of the prototype, I went beyond that and installed [react-router](https://reactrouter.com/), relating the values listed in sidebar to page routes.

The font and icons library suggested were added through CDN links for convenience, since they could be slow to be accessed by the final user. The links can be checked in `public/index.html`, in head section. Importing all icons available made it possible to assign icons dinamically, as you can see in `src/app.tsx` and `data.json`.