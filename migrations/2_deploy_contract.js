const TrapToken = artifacts.require("./TrapToken.sol");

module.exports = (deployer) => {
  deployer.deploy(TrapToken, "TrapToken", "TRTK", 18, 22000000);
};
