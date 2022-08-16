require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/NScZwiI0paMXluq9-1dZXX0fH6CLBEYW',
      accounts: [ 'a40fd791f68835c2711d0bdbe8e2d308d3cf46896a658889891f2c7aa0b5cca0' ]
    }
  }
}