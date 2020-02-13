export interface ITransaction {
  amount: number;
  recipient: string;
  sender: string;
}

export interface IBlock {
  index: number;
  previous_hash: string;
  proof: number;
  timestamp: number;
  transactions: Array<ITransaction>;
}

export type TChain = Array<IBlock>;

export type TChainResponse = { chain: TChain };