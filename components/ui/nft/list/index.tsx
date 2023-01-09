import { FunctionComponent } from "react";
import { NftMetadata } from "@_types/nft";

import NftItem from "../item/index";

type NftsProps = {
  nfts: NftMetadata[];
};

const NftList: FunctionComponent<NftsProps> = ({ nfts }) => {
  return (
    <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
      {nfts.map((nft) => (
        <div
          className="flex flex-col rounded-lg shadow-lg overflow-hidden"
          key={nft.image}
        >
          <NftItem item={nft} />
        </div>
      ))}
    </div>
  );
};

export default NftList;
