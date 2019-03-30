var Ratings = artifacts.require("./Rating.sol");
//this causes the rating contract to be deployed on etherium network
//the movies goes as input to the contract
module.exports = function(deployer) {
    deployer.deploy(Ratings, ['Star Wars', 'Avatar', 'Inception'].map(x => web3.utils.asciiToHex(x)), {gas: 6700000});
};
