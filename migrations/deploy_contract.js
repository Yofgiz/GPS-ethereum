const Refund = artifacts.require("RefundByLocation.sol");

module.exports = function(deployer) {
 deployer.deploy(Refund);
};