export default ({ markup, helmet }) => {
  return `<!doctype html>
  <html> ${helmet.htmlAttributes.toString()}
    <head>
      ${helmet.title.toString()}
      ${helmet.meta.toString()}
      ${helmet.link.toString()}
    </head>
    <body> ${helmet.bodyAttributes.toString()}
      <div id="root"> ${markup}</div>
      <script src="/static/client.js" async></script>
    </body>
  </html>`
}

// This will be our main layout file.

//React-Helmet is a library that allows managing document meta from your React components easily. it works
//on the cliente side as well as on the server.
