import Web3 from 'web3';

const web3=new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
let ratingABI= [{"constant":true,"inputs":[{"name":"","type":"bytes32"}],"name":"ratingsReceived","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x5f4187b0"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"movieList","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function","signature":"0xbf58ae3d"},{"inputs":[{"name":"movieNames","type":"bytes32[]"}],"payable":false,"stateMutability":"nonpayable","type":"constructor","signature":"constructor"},{"constant":true,"inputs":[{"name":"movie","type":"bytes32"}],"name":"totalVotesFor","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x2f265cf7"},{"constant":false,"inputs":[{"name":"movie","type":"bytes32"}],"name":"voteForMovie","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0x6c9d63ab"}];
    
let ratingAddress='0x7e16fffDE2A46B43ed925fA62EC9ba2b2bB899b2';

web3.eth.defaultAccount = web3.eth.accounts[0];

const ratingContract=web3.eth.contract(ratingABI).at(ratingAddress);

function voteForMovie(movie) {
    ratingContract.voteForMovie(movie);
}

function totalVotes(movie) {
    return ratingContract.totalVotesFor(movie).toNumber();
}

const rating = {voteForMovie, totalVotes};
export { rating };
