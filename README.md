![ARC Logo](./static/arc.png)

## ARC - A decentralized one-way stablecoin on Arweave

> Notice: This contract is unaudited. Use at your own risk.

In order for SmartWeave contracts to exchange between AR and PSTs, there must exist a way to interface between the two. AR isn't natively built in SmartWeave, so this is where ARC comes in. Pegged at the value of AR, ARC is a SmartWeave contract that functions just like any PST. To mint ARC, a user must send a transaction to the reserve wallet with a "mint" contract interaction. Because the reserve wallet is ungeneratable, no user holds custody over the funds in the reserve, thus making it completely decentralized. However, this also means that ARC can only be minted, swapped, and not burned.

### Techincal Breakdown

Contains details about the contract and its initialization state.

#### Contract Details

###### `mint`

The contract checks the amount of AR sent in a given transaction, and if the funds were sent to the ARC reserve wallet, the user recieves an equivalent amount of AR in ARC tokens.

###### `transfer`

A write function that allows a user to transfer ARC to another wallet. It requires in a `target` parameter (the wallet you want to transfer the ARC tokens to) and a `qty` parameter (the number of ARC tokens to transfer).

###### `balance`

A read function that returns the amount of ARC that the caller owns. Optionally, you can pass in a `target` parameter to get the balance of a different wallet.

#### Initialization State

```json
{
  "ticker": "ARC",
  "reserve": "ARC-Reserve-ARCARCARCARCARCth8taARCARCARCARCARC",
  "balances": {}
}
```

###### `ticker`

The ticker of the stablecoin.

###### `reserve`

The reserve wallet where AR is held in exchange for minted ARC. The reserve wallet should not be generated or a generatable wallet.

###### `balances`

The list of balances that contain ARC. **Do not initialize with balances!!!**

### Contributing

Feel free to fork and make a PR with any additions (or fixes).
