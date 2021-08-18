require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture roast frame ski stone rule saddle evidence gesture hat army gas'; 
let testAccounts = [
"0x2e2fd4458db8375923f3039c0df46760bb184db4729e20ab8da81b35ffebda3e",
"0x80b48fce3ae3b9f3004a85a3808967ccd256c089531ac1206a5adb345b828a77",
"0xc858a76b605d7c5e2ff7caace6fe6525707a5e4f6a63497bac8e5666c59dd49a",
"0xbb1a523a59190a86561343a8421e9bf11fe5fa8c1f7ac2c0e594c67e79219e36",
"0x1dffe1cc61e41b2730fcca11f5e6493e4006b3b205861db1e5789476554f50ae",
"0xfe9e5b24be3af6ac7f2c915a81b0a59c96d82c784e2e50cb0790e96fe5f59f15",
"0x68f91b83ce5188ac937797193b94fb5022ae43e84da537898f9ca99373ece04f",
"0xfebad864e319021ea148777d619c0f1f1e20aff940917bc5eb27c9ac49f9402b",
"0x4063c10857fa09334335da53d8581d885cd268dcc8c45311fb8634905a45cb47",
"0x315ad72174a70581544fa2ce2cc37cfcb30c4cf09fe8bea2cca9b532984b5bda"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

