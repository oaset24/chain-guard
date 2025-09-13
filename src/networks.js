
// Lies deinen Alchemy API-Key aus der .env-Datei
const ALCHEMY_KEY = import.meta.env.VITE_ALCHEMY_KEY;

// Hilfsfunktion: Erst Alchemy, dann Public RPC
function alchemyOrPublic(path, fallback) {
  return ALCHEMY_KEY
    ? `https://${path}.g.alchemy.com/v2/${ALCHEMY_KEY}`
    : fallback;
}

export const CHAINS = [
  {
    id: 1,
    name: "Ethereum Mainnet",
    symbol: "ETH",
    rpc: alchemyOrPublic("eth-mainnet", "https://ethereum-rpc.publicnode.com"),
    logo: "/icons/eth.png",
    explorer: "https://etherscan.io",
    tokenStandards: ["ERC-20", "ERC-721", "ERC-1155"],
    color: "#627EEA",
    gasUnit: "gwei"
  },
  {
    id: 11155111,
    name: "Sepolia Testnet",
    symbol: "ETH",
    rpc: alchemyOrPublic("eth-sepolia", "https://sepolia.infura.io/v3/"),
    logo: "/icons/sepolia.png",
    testnet: true,
    explorer: "https://sepolia.etherscan.io",
    tokenStandards: ["ERC-20", "ERC-721", "ERC-1155"],
    color: "#627EEA",
    gasUnit: "gwei"
  },
  {
    id: 137,
    name: "Polygon Mainnet",
    symbol: "MATIC",
    rpc: alchemyOrPublic("polygon-mainnet", "https://polygon-rpc.com"),
    logo: "/icons/polygon.png",
    explorer: "https://polygonscan.com",
    tokenStandards: ["ERC-20", "ERC-721", "ERC-1155"],
    color: "#8247E5",
    gasUnit: "gwei"
  },
  {
    id: 56,
    name: "BNB Smart Chain",
    symbol: "BNB",
    rpc: "https://bsc-dataseed1.binance.org", // kein Alchemy-Support
    logo: "/icons/bnb.png",
    explorer: "https://bscscan.com",
    tokenStandards: ["BEP-20", "BEP-721", "BEP-1155"],
    color: "#F3BA2F",
    gasUnit: "gwei"
  },
  {
    id: 42161,
    name: "Arbitrum One",
    symbol: "ETH",
    rpc: alchemyOrPublic("arb-mainnet", "https://arb1.arbitrum.io/rpc"),
    logo: "/icons/arbitrum.png",
    explorer: "https://arbiscan.io",
    tokenStandards: ["ERC-20", "ERC-721", "ERC-1155"],
    color: "#28A0F0",
    gasUnit: "gwei"
  },
  {
    id: 10,
    name: "Optimism Mainnet",
    symbol: "ETH",
    rpc: alchemyOrPublic("opt-mainnet", "https://mainnet.optimism.io"),
    logo: "/icons/optimism.png",
    explorer: "https://optimistic.etherscan.io",
    tokenStandards: ["ERC-20", "ERC-721", "ERC-1155"],
    color: "#FF0420",
    gasUnit: "gwei"
  },
  {
    id: 43114,
    name: "Avalanche C-Chain",
    symbol: "AVAX",
    rpc: "https://api.avax.network/ext/bc/C/rpc",
    logo: "/icons/avalanche.png",
    explorer: "https://snowscan.xyz",
    tokenStandards: ["ARC-20", "ERC-20", "ERC-721"],
    color: "#E84142",
    gasUnit: "nAVAX"
  },
];
