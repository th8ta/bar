![BAR Logo](./static/bar.png)

## BAR - A decentralized one-way burncoin on Arweave

> Notice: This contract is unaudited. Use at your own risk.

In order for SmartWeave contracts to exchange between AR and PSTs, there must exist a way to interface between the two. To mint BAR, a user must send a transaction to the reserve wallet with a "mint" contract interaction. Because the reserve wallet is ungeneratable, no user holds custody over the funds in the reserve, thus making it completely decentralized. However, this also means that BAR can only be minted, swapped, and not burned.

### Techincal Breakdown

Contains details about the contract and its initialization state.

#### Contract Details

###### `mint`

The contract checks the amount of AR sent in a given transaction, and if the funds were sent to the BAR reserve wallet, the user recieves an equivalent amount of AR in BAR tokens.

###### `transfer`

A write function that allows a user to transfer BAR to another wallet. It requires in a `target` parameter (the wallet you want to transfer the BAR tokens to) and a `qty` parameter (the number of BAR tokens to transfer).

###### `balance`

A read function that returns the amount of BAR that the caller owns. Optionally, you can pass in a `target` parameter to get the balance of a different wallet.

#### Initialization State

```json
{
  "ticker": "BAR",
  "reserve": "BAR-Reserve-BARBARBARBARBARth8taBARBARBARBARBAR",
  "balances": {}
}
```

###### `ticker`

The ticker of the burncoin.

###### `reserve`

The reserve wallet where AR is held in exchange for minted BAR. The reserve wallet should not be generated or a generatable wallet.

###### `balances`

The list of balances that contain BAR. **Do not initialize with balances!!!**

### Contributing

Feel free to fork and make a PR with any additions (or fixes).
