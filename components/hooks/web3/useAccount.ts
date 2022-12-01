import { CryptoHookFactory } from "@_types/hooks";
import useSWR from "swr";

// deps -> provider, ethereum, contract
export const hookFactory: CryptoHookFactory<string, string> =
  (deps) => (params) => {
    const swrResponse = useSWR("web3/useAccount", () => {
      return "Test user";
    });

    return swrResponse;
  };

export const useAccount = hookFactory({
  ethereum: undefined,
  provider: undefined,
});
