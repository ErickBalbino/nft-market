import { CryptoHookFactory } from "@_types/hooks";
import { ethers } from "ethers";
import useSWR from "swr";

type AccountHookFactory = CryptoHookFactory<string>;

export type UseAccountHook = ReturnType<AccountHookFactory>;

export const hookFactory: AccountHookFactory =
  ({ provider }) =>
  () => {
    const swrResponse = useSWR(
      provider ? "web3/useAccount" : null,
      async () => {
        const provider = new ethers.providers.Web3Provider(
          window.ethereum as any
        );
        await provider.send("eth_requestAccounts", []);

        const accounts = await provider.listAccounts();
        const account = accounts[0];

        if (!account) {
          throw new Error("Erro! Verifique sua conexão com a Metamask");
        }

        return account;
      },
      {
        revalidateOnFocus: false,
      }
    );

    return swrResponse;
  };
