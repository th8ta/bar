export interface StateInterface {
  ticker: string;
  reserve: string;
  balances: {
    [addr: string]: number;
  };
}

export interface BalanceInterface {
  target: string;
  balance: number;
  ticker: string;
}

export interface ActionInterface {
  input: InputInterface;
  caller: string;
}

export interface InputInterface {
  function: "mint" | "transfer" | "balance";
  target?: string;
  qty?: number;
}
