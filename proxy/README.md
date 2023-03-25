this folder contains a proxy, effectively the same as burp suite as described in the blog at https://dev.to/matpk/cryptographically-protecting-your-spa-fga.

it is used to manipulate the response, exactly like the ethical hacker did.

point your browser to http://localhost:4000 to use it after starting as described below.

it changes the files, so that the user can be manipulated after it is decrypted, proving that it is possible to bypass the encryption method 

    npm install express --save

    node index.js
