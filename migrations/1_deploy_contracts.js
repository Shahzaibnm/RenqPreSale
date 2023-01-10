
const Sale = artifacts.require("Sale");

module.exports = function(deployer) {

  deployer.deploy(Sale,"0xD4a33860578De61DBAbDc8BFdb98FD742fA7028e","0x66Fcf950AE3038d10a4E57559FFFBFaa09d67A81","0x70d71B9cBf436072F9587e02D23F3977c86A9e57","100000000000000000000");
};