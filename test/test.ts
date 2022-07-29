import { Secret, Secret__factory } from "../typechain";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/dist/src/signer-with-address";
import { ethers } from "hardhat";
import {
  mineBlocks,
  convertWithDecimal,
  customError,
} from "./utilities/utilities";
import { expect } from "chai";
import { sign, Signer } from "crypto";
import { userInfo } from "os";
import { LOADIPHLPAPI } from "dns";
import { hasUncaughtExceptionCaptureCallback } from "process";
import { CustomError } from "hardhat/internal/hardhat-network/stack-traces/model";
var BigNumber = require("big-number");

describe("Test", async () => {});
