require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey close off success strike cruise night honey heavy praise army gather'; 
let testAccounts = [
"0xf129e95183ec3afe32b67291090b9daff5450fb114046ebbb7b6a44d0b6b532d",
"0x502bcac6ba9a4b977dfbf968a249b1a32def27748831c8a4c7a89888c253c1eb",
"0x74f3edc75fd243ba4184f86a25b221de6437bb21aa1bdb3b3d07e4a76f71bb6a",
"0x83685c90ca41e7dcf05858c2b7293e06db81e9e9e93d8ede85a5ff5b05bdb57e",
"0xa76d41e2ca2a5d27aa6cea5b3165dda3084f0f6a545793a62e7785d8eba6d29b",
"0x8179e6232915c568337c702b67b4c2324f886ad0f7f1ba1a9146f40fe30bcaf7",
"0x1caee09e295db7f4a5faf947ebcc25ef1848423798c92795066f0e56ef2c8172",
"0xa8eccd97355c144898fc30c242e3e2c3c33775c1d6a42531a4fd7bc9d8e2682c",
"0xebad2c6965fae89234c1a9880d93eb3979e1b48c9c577db3f875e43e1f3c97a5",
"0xfa22e7a8b67b4b8af0b85e97a0c3cb6ddf7a0c0ad1d8f8ec4f7d1ed2308babc1"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


