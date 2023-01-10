
/**
 * Use this file to configure your truffle project. It's seeded with some
 * common settings for different networks and features like migrations,
 * compilation and testing. Uncomment the ones you need or modify
 * them to suit your project as necessary.
 *
 * More information about configuration can be found at:
 *
 * https://trufflesuite.com/docs/truffle/reference/configuration
 *
 * To deploy via Infura you'll need a wallet provider (like @truffle/hdwallet-provider)
 * to sign your transactions before they're sent to a remote public node. Infura accounts
 * are available for free at: infura.io/register.
 *
 * You'll also need a mnemonic - the twelve word phrase the wallet uses to generate
 * public/private key pairs. If you're publishing your code to GitHub make sure you load this
 * phrase from a file you've .gitignored so it doesn't accidentally become public.
 *
 */

require('dotenv').config();
const mnemonic = ['1b40794840db0f321d653565852e0f45a618a1d9bbadf43283e197e67c447014'];
const infuraProjectId = process.env["INFURA_PROJECT_ID"];
 
const HDWalletProvider = require('@truffle/hdwallet-provider');

module.exports = {
  /**
   * Networks define how you connect to your ethereum client and let you set the
   * defaults web3 uses to send transactions. If you don't specify one truffle
   * will spin up a development blockchain for you on port 9545 when you
   * run `develop` or `test`. You can ask a truffle command to use a specific
   * network from the command line, e.g
   *
   * $ truffle test --network <network-name>
   */
   plugins: ["truffle-plugin-verify"],
   api_keys: {
    etherscan: "VNBRB5E4SP9IB9BMR4KV5E9YYMMJB5KG3M",
    bscscan:"DI4TKG3CMHKYA9TXYSFCJ6J63ADMU8G9E1",
    polygonscan:"8MUVCNPEPKGX818X93V13JCH39U4WXH3ZX"
   },

  networks: {
    // Useful for testing. The `development` name is special - truffle uses it by default
    // if it's defined here and no other network is specified at the command line.
    // You should run a client (like ganache, geth, or parity) in a separate terminal
    // tab if you use this network and you must also set the `host`, `port` and `network_id`
    // options below to some value.
    //
    development: {
     host: "127.0.0.1",     // Localhost (default: none)
     port: 8545,            // Standard Ethereum port (default: none)
     network_id: "*",       // Any network (default: none)
    },
    // polygon RPC  = https://rpc-mumbai.maticvigil.com/

    testnet: {
      provider: () => new HDWalletProvider(mnemonic, `https://goerli.infura.io/v3/b1d1ad56adf94627a4689ed24df76614`),
      network_id: 5,
      confirmations: 3,
      timeoutBlocks: 200,
      networkCheckTimeout: 10000,
      skipDryRun: true
    },
  },

  // Set default mocha options here, use special reporters etc.
  mocha: {
    timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "^0.8.0",
      settings: {
        optimizer: {
          enabled: true,
          runs: 200
        }
      }      // Fetch exact version from solc-bin
    }
  }
};
