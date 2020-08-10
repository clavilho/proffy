const express = require("express");
const server = express();

const {pageLanding, pageStudy, pageGiveClasses} = require('./pages')

const nunjucks = require("nunjucks");
nunjucks.configure("src/views", {
  express: server,
  noCache: true,
});

server
  .use(express.static("public"))
  .set('view engine', '.njk')
  .get("/", pageLanding)
  .get("/study", pageStudy)
  .get("/give-classes", pageGiveClasses)

  .listen(5500, () => console.log('running on port 5500'));
