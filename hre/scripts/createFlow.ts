import { Framework } from "@superfluid-finance/sdk-core";
import { ethers } from "ethers";

//where the Superfluid logic takes place
async function createNewFlow(recipient, flowRate) {
  const sf = await Framework.create({
    networkName: "kovan",
    provider: customHttpProvider
  });

  const signer = sf.createSigner({
    privateKey:
      "0xd2ebfb1517ee73c4bd3d209530a7e1c25352542843077109ae77a2c0213375f1",
    provider: customHttpProvider
  });

  const DAIx = "0xe3cb950cb164a31c66e32c320a800d477019dcff";

  try {
    const createFlowOperation = sf.cfaV1.createFlow({
      flowRate: flowRate,
      receiver: recipient,
      superToken: DAIx
      // userData?: string
    });

    console.log("Creating your stream...");

    const result = await createFlowOperation.exec(signer);
    console.log(result);

    console.log(
      `Congrats - you've just created a money stream!
    View Your Stream At: https://app.superfluid.finance/dashboard/${recipient}
    Network: Kovan
    Super Token: DAIx
    Sender: 0xDCB45e4f6762C3D7C61a00e96Fb94ADb7Cf27721
    Receiver: ${recipient},
    FlowRate: ${flowRate}
    `
    );
  } catch (error) {
    console.log(
      "Hmmm, your transaction threw an error. Make sure that this stream does not already exist, and that you've entered a valid Ethereum address!"
    );
    console.error(error);
  }
}


// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
createNewFlow("0x4f8cB2C9209aCB6809D2b8D216899cCffcDB08C5", "1000")
.catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
  