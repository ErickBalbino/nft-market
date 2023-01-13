import { CryptoHookFactory } from "@_types/hooks";
import { ethers } from "ethers";
import useSWR from "swr";

const NETWORKS: { [k: string]: string } = {
  1: "Ethereum Main Network",
  3: "Ropsten Main Network",
  4: "Rinkeby Main Network",
  5: "Goerli Main Network",
  42: "Kovan Main Network",
  56: "Binance Main Network",
  1337: "Ganache",
};

type UseNetworkResponse = {
  isLoading: boolean;
};

type NetworkHookFactory = CryptoHookFactory<string, UseNetworkResponse>;

export type UseNetworkHook = ReturnType<NetworkHookFactory>;

export const hookFactory: NetworkHookFactory =
  ({ provider, isLoading }) =>
  () => {
    const { data, isValidating, ...swrResponse } = useSWR(
      provider ? "web3/useNetwork" : null,
      async () => {
        const chainId = (await provider!.getNetwork()).chainId;

        if (!chainId) {
          throw new Error(
            "Cannot retrieve network, please refresh the browser"
          );
        }

        return NETWORKS[chainId];
      },
      {
        revalidateOnFocus: false,
      }
    );

    return {
      ...swrResponse,
      data,
      isValidating,
      isLoading: isLoading || isValidating,
    };
  };
