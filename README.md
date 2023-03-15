## Getting Started

First, you will need to generate a private and public key-pair. You can do so using the following commands:
```bash
# Private Key
openssl genrsa -out private-key-name.pem 3072
# Public Key
openssl rsa -in private-key-name.pem -pubout -out public-key-name.pem
```

You can customize the key to better suit your needs, but keep in mind you'll have to modify the settings in the `keyConfig` constant in the `/utils/rsa.ts` file.

Then you will need to set the keys into environment files.
The private key goes to the backend, and the public key goes to the frontend.

In this project, you can duplicate the `.env.local.example` file and rename it to `.env.local`.

In your env files, use double-quotes around the variable's value to support the `\n` character, place a `\n` at the end of each line, and then reduce the whole key into a single line, like so:

`-----BEGIN RSA PRIVATE KEY-----\nFiRsTlInE\nSeCoNdLiNe\nThIrDlInE\nSoOnAnDSoFoRtH\n-----END RSA PRIVATE KEY-----`

There is an `.env.local.example` file with an example to help you understand, along with an example pair of keys.

# The example keys will work, but you OUGHT to change them for a newly generated pair when implementing this.

Finally, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

If you see the name `John Doe`, the signature and verification worked properly.
If you try to modify this data after it was signed, or before it is verified, an error will appear.
