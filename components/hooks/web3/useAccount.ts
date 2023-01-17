import { CryptoHookFactory } from "@_types/hooks";
import { ethers } from "ethers";
import { useEffect } from "react";
import useSWR from "swr";

type UseAccountResponse = {
  connect: () => void;
  isLoading: boolean;
  isInstalled: boolean;
};

type AccountHookFactory = CryptoHookFactory<string, UseAccountResponse>;

export type UseAccountHook = ReturnType<AccountHookFactory>;

export const hookFactory: AccountHookFactory =
  ({ provider, ethereum, isLoading }) =>
  () => {
    const { data, isValidating, ...swrResponse } = useSWR(
      provider ? "web3/useAccount" : null,
      async () => {
        const provider = new ethers.providers.Web3Provider(
          window.ethereum as any
        );

        const accounts = await provider.listAccounts();
        const account = accounts[0];

        if (!account) {
          throw new Error("Erro! Verifique sua conexão com a Metamask");
        }

        return account;
      },
      {
        revalidateOnFocus: false,
        shouldRetryOnError: false,
      }
    );

    // reload when user change account
    useEffect(() => {
      ethereum?.on("accountsChanged", handleAccountChange);

      return () => {
        ethereum?.removeListener("accountsChanged", handleAccountChange);
      };
    });

    const handleAccountChange = (...args: unknown[]) => {
      const accounts = args[0] as string[];
      if (accounts.length === 0) {
        return alert("Por favor, conecte-se à Metamask!");
      }

      window.location.reload();
    };

    const connect = async () => {
      try {
        await ethereum?.request({ method: "eth_requestAccounts" });
      } catch (e) {
        console.log(e);
      }
    };

    return {
      ...swrResponse,
      data,
      isValidating,
      connect,
      isLoading: isLoading as boolean,
      isInstalled: ethereum?.isMetaMask || false,
    };
  };
