this folder contains a proxy, effectively the same as burp suite.

it is used to manipulate the response, exactly like the ethical hacker did.

point your browser to http://localhost:4000 to use it after starting as described below.

it changes the files, so that the user can be manipulated after it is decrypted, proving that it is possible to bypass the encryption method 


    docker run -it --rm --name rsa-example-proxy -p 4000:4000 -v /shared2/rsa-example/proxy:/project maxant/jdk17pythonnode18

    npm install express --save

    node index.js
