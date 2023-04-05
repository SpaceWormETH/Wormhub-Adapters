const { nullAddress, treasuryExports } = require("../helper/treasury");

const banklessDaoTreasury = "0xf26d1Bb347a59F6C283C53156519cC1B1ABacA51";
const BANK = "0x2d94AA3e47d9D5024503Ca8491fcE9A2fB4DA198";
const BED = "0x2aF1dF3AB0ab157e1E2Ad8F88A7D04fbea0c7dc6"


module.exports = treasuryExports({
  ethereum: {
    tokens: [ 
        nullAddress,
        '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',//USDC
        '0x81f8f0bb1cB2A06649E51913A151F0E7Ef6FA321',//VITA
        '0xae78736Cd615f374D3085123A210448E74Fc6393',//rETH
        '0x6B175474E89094C44Da98b954EedeAC495271d0F',//DAI
        '0x3541A5C1b04AdABA0B83F161747815cd7B1516bC',//KNIGHT
        '0xfb5453340C03db5aDe474b27E68B6a9c6b2823Eb',//ROBOT
        '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',//WETH
        '0xFca59Cd816aB1eaD66534D82bc21E7515cE441CF',//RARI
        '0x956F47F50A910163D8BF957Cf5846D573E7f87CA',//FEI
        '0x0954906da0Bf32d5479e25f46056d22f08464cab',//INDEX
        '0x04Fa0d235C4abf4BcF4787aF4CF447DE572eF828',//UMA
        '0xbC396689893D065F41bc2C6EcbeE5e0085233447',//PERP
        '0xD56daC73A4d6766464b38ec6D91eB45Ce7457c44',//PAN
        '0xdAC17F958D2ee523a2206206994597C13D831ec7',//USDT
        '0x69af81e73A73B40adF4f3d4223Cd9b1ECE623074',//MASK
        '0x3Ec8798B81485A254928B70CDA1cf0A2BB0B74D7',//GRO
        '0x6B3595068778DD592e39A122f4f5a5cF09C90fE2',//SUSHI
        '0xc944E90C64B2c07662A292be6244BDf05Cda44a7',//GRT 
     ],
    owners: [banklessDaoTreasury],
    ownTokens: [BANK, BED],
  },
})