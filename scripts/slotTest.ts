const ethers = require("ethers");

import dotenv from "dotenv";
dotenv.config();

const provider = new ethers.providers.AlchemyProvider(
  "rinkeby",
  process.env.ALCHEMY_API_KEY
);

//Contract address of you to read
const contractAddress = "0xB119621555c4E008F953c85B6D9017Dc6b341fb0";

const hexToAscii = (_hex: any) => {
  const hex = _hex.toString();
  let str = "";
  for (let i = 0; i < hex.length; i += 2) {
    str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
  }
  return str;
};

async function showSecret() {
  //The storage slot you want to read
  const storage = await provider.getStorageAt(contractAddress, 1);
  let res = hexToAscii(storage);
  console.log("Secret was: ", res);
}

showSecret()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
