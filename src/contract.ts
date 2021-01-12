import { StateInterface, ActionInterface, BalanceInterface } from "./faces";

declare const ContractError: any;
declare const SmartWeave: any;

export function handle(
  state: StateInterface,
  action: ActionInterface
): { state: StateInterface } | { result: BalanceInterface } {
  const balances = state.balances;
  const input = action.input;
  const caller = action.caller;

  if (input.function === "mint") {
    const amountToMint = SmartWeave.transaction.quantity;
    const target = SmartWeave.transaction.target;

    if (target !== state.reserve) {
      throw new ContractError(
        `Incorrect target. Send tokens to ${state.reserve} to mint.`
      );
    }
    if (!balances[caller]) {
      balances[caller] = amountToMint;
    } else {
      balances[caller] += amountToMint;
    }

    return { state };
  }

  if (input.function === "transfer") {
    const target = input.target;
    const quantity = input.qty;

    if (!Number.isInteger(quantity)) {
      throw new ContractError(
        `Invalid value for quantity. Must be an integer.`
      );
    }
    if (!target) {
      throw new ContractError(`No target specified.`);
    }
    if (quantity <= 0 || caller === target) {
      throw new ContractError(`Invalid token transfer.`);
    }
    if (balances[caller] < quantity) {
      throw new ContractError(
        `Caller balance not high enough to send ${quantity} token(s).`
      );
    }

    balances[caller] -= quantity;
    if (target in balances) {
      balances[target] += quantity;
    } else {
      balances[target] = quantity;
    }

    return { state };
  }

  if (input.function === "balance") {
    let target;
    if (!input.target) {
      target = caller;
    } else {
      target = input.target;
    }
    const ticker = state.ticker;

    if (typeof target !== "string") {
      throw new ContractError(`Must specify target to get balance for.`);
    }
    if (typeof balances[target] !== "number") {
      throw new ContractError(`Cannot get balance; target does not exist.`);
    }

    return {
      result: {
        target,
        ticker,
        balance: balances[target],
      },
    };
  }
}
