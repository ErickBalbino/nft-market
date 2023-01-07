import {
  createContext,
  FunctionComponent,
  useContext,
  useEffect,
  useState,
} from "react";
import {
  Web3State,
  createDefaultState,
  LoadContract,
  createWeb3State,
} from "./utils";
import { ethers } from "ethers";

const Web3Context = createContext<Web3State>(createDefaultState());
interface Props {
  children: React.ReactNode;
}

const Web3Provider: FunctionComponent<Props> = ({ children }) => {
  const [web3Api, setWeb3Api] = useState<Web3State>(createDefaultState());

  useEffect(() => {
    const initWeb3 = async () => {
      const provider = new ethers.providers.Web3Provider(
        window.ethereum as any
      );
      const contract = await LoadContract("NftMarket", provider);

      setWeb3Api(
        createWeb3State({
          ethereum: window.ethereum,
          provider,
          contract,
          isLoading: false,
        })
      );
    };

    initWeb3();
  }, []);

  return (
    <Web3Context.Provider value={web3Api}>{children}</Web3Context.Provider>
  );
};

export const useWeb3 = () => {
  return useContext(Web3Context);
};

export const useHooks = () => {
  const { hooks } = useWeb3();

  return hooks;
};

export default Web3Provider;
