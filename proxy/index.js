import express from 'express'

import fetch from 'node-fetch';

const app = express()
const port = 4000

app.get('/*', async (req, res) => {
  console.log('request to ' + req.url)
  let file = await (await fetch('http://localhost:3000' + req.url)).text()
  // TODO add headers and other response stuff

  const idx = file.indexOf('setUser(data.content)');
  if(idx >= 0) {
    let patchedFile = file.substring(0, idx);
    patchedFile += '\\ndata.content.isAdmin = true;\\n';
    patchedFile += file.substring(idx);
    file = patchedFile;
  }

  res.send(file)
})

app.listen(port, () => {
  console.log(`proxy (pseudo man in the middle) listening on port ${port}`)
})