var ART_TOKEN = artifacts.require("./Diamond.sol");
var AuctionBox = artifacts.require("./AuctionBox.sol");

module.exports = async function(deployer) {
  await deployer.deploy(ART_TOKEN);
  await deployer.deploy(AuctionBox);
  //token = await Token.deployed();
  //await token.passMinterRole(dBank.address);
};
