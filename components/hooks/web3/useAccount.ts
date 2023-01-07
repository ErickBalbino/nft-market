import { CryptoHookFactory } from "@_types/hooks";
import useSWR from "swr";

type AccountHookFactory = CryptoHookFactory<string, string>

export type UseAccountHook = ReturnType<AccountHookFactory>

export const hookFactory: AccountHookFactory = (deps) => (params) => {
  const swrResponse = useSWR("web3/useAccount", () => {
    return "Test user";
  });

  return swrResponse;
};

