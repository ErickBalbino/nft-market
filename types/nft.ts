export type Trait = "attack" | "health" | "speed";

export type NftAttributes = {
    trait_type: Trait;
    value: string;
}

export type NftMetadata = {
    name: string;
    description: string;
    image: string;
    attributes: NftAttributes[];
}