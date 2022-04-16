
import { ethersProvider } from "./ethers-service";
import { encrypt } from '@metamask/eth-sig-util';
import { SettingsRemote } from "@mui/icons-material"
import { Buffer } from "buffer";

// const Buffer = require('buffer');
// const SettingsRemote = require('');
// const encrypt = require('');
// const ethersProvider = require('');


const ascii85 = require('ascii85');

// This code is using metamask to encrypt and decrypt str data
// We are also using ethers.js package for interacting with the smart contract, which requires type number[] when sending data to bytes argument. If you want to do the same, you can convert the buffer to number[] type as:
// numberArray = buffer.toJSON().data;
// reference from https://betterprogramming.pub/exchanging-encrypted-data-on-blockchain-using-metamask-a2e65a9a896c
//
export const encryptData = async (publicKey, str_data) => {

    var myBuffer = [];
    var str = str_data;
    var buffer = Buffer.from(str, 'ascii85');
    for (var i = 0; i < buffer.length; i++) {
        myBuffer.push(buffer[i]);
    }

    const data = buffer;
    // Returned object contains 4 properties: version, ephemPublicKey, nonce, ciphertext
    // Each contains data encoded using base64, version is always the same string
    const enc = encrypt({
        publicKey: publicKey.toString('base64'),
        data: ascii85.encode(data).toString(),
        version: 'x25519-xsalsa20-poly1305',
    });

    // We want to store the data in smart contract, therefore we concatenate them
    // into single Buffer
    const buf = Buffer.concat([
        Buffer.from(enc.ephemPublicKey, 'base64'),
        Buffer.from(enc.nonce, 'base64'),
        Buffer.from(enc.ciphertext, 'base64'),
    ]);

    // In smart contract we are using `bytes[112]` variable (fixed size byte array)
    // you might need to use `bytes` type for dynamic sized array
    // We are also using ethers.js which requires type `number[]` when passing data
    // for argument of type `bytes` to the smart contract function
    // Next line just converts the buffer to `number[]` required by contract function
    // THIS LINE IS USED IN OUR ORIGINAL CODE:
    // return buf.toJSON().data;

    // Return just the Buffer to make the function directly compatible with decryptData function
    return buf;
}
// a Local storage where encrypt and decrypt by metamask wallet
// Account string , data buffer
// return Promise<Buffer>

export const decryptData = async (account, data) => {
    // Reconstructing the original object outputed by encryption
    const structuredData = {
        version: 'x25519-xsalsa20-poly1305',
        ephemPublicKey: data.slice(0, 32).toString('base64'),
        nonce: data.slice(32, 56).toString('base64'),
        ciphertext: data.slice(56).toString('base64'),
    };
    // Convert data to hex string required by MetaMask
    const ct = `0x${Buffer.from(JSON.stringify(structuredData), 'utf8').toString('hex')}`;
    // Send request to MetaMask to decrypt the ciphertext
    // Once again application must have acces to the account
    const decrypt = await window.ethereum.request({
        method: 'eth_decrypt',
        params: [ct, account],
    });
    // Decode the base85 to final bytes
    return ascii85.decode(decrypt);
}


export const secureLocalStorage = async () => {
    
    const address = ethersProvider.address();
    // Get Public Key, Key is returned as base64
    const keyB64 = await window.ethereum.request({
        method: 'eth_getEncryptionPublicKey',
        params: [address],
    });
    const publicKey = Buffer.from(keyB64, 'base64');
    

    function setItem(key, value){
        var data = encryptData(publicKey, value);
        console.info("Storing key {} : {}", key, data);
        localStorage.setItem(key, data);
    };

    function getValue(key){
        var data = localStorage.getItem(key);
        console.from("retrieved data from storage : {}", data);
        return ascii85.decode(data).toString();
    };

    return this;
}
