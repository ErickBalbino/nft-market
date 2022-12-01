import { MetaMaskInpageProvider } from "@metamask/providers";
import { Contract, providers } from "ethers";
import { SWRResponse } from "swr";

export type Web3Dependencies = {
  provider: providers.Web3Provider;
  contract: Contract;
  ethereum: MetaMaskInpageProvider;
};

export type CryptoHookFactory<D = any, P = any> = {
  (d: Partial<Web3Dependencies>): CryptoHandlerHook<D, P>;
};

export type CryptoHandlerHook<D = any, P = any> = (
  params: P
) => CryptoSwrResponse<D>;

export type CryptoSwrResponse<D = any> = SWRResponse<D>;

// export type CryptoHookFactory<D = any, P = any> = {
//   (d: Partial<Web3Dependencies>): (params: P) => SWRResponse<D>;
// };
