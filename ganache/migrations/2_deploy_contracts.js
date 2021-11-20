var Diamond = artifacts.require("./Diamond.sol");
var AuctionBox = artifacts.require("./AuctionBox.sol");
var AuctionBoxClosed = artifacts.require("./ClosedAuctionBox.sol");
var Sorter = artifacts.require("./InsertionSorter.sol");
var ERC20 = artifacts.require("./ArtERC20Token.sol");

module.exports = async function(deployer, _, accounts) {
  await deployer.deploy(Diamond);
  await deployer.deploy(AuctionBox);
  var InsertSorter = await deployer.deploy(Sorter);
  await deployer.link(Sorter, AuctionBoxClosed);
  await deployer.deploy(AuctionBoxClosed)
  var erc = await deployer.deploy(ERC20)
  console.log(accounts)
  for(var i =0; i<10; i++) {
    await erc.mint(accounts[i], 1000000000000, {'from': accounts[0]})
  }
};
