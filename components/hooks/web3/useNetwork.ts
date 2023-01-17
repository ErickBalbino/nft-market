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

const targetId = process.env.NEXT_PUBLIC_TARGET_CHAIN_ID as string;
const targetNetwork = NETWORKS[targetId];

type UseNetworkResponse = {
  isLoading: boolean;
  isSuportted: boolean;
  targetNetwork: string;
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
      targetNetwork,
      isSuportted: data === targetNetwork,
      isLoading: isLoading || isValidating,
    };
  };
