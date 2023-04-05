# Wormhub Adapters

Our protocol adapters are forked from Defillama as the repo is well maintained by their team, initially this will be to help run part of the "DeFi Toolset" which is to be a value-add/additional utility for the Worm Dashboard. 

In the future we may look to move to our own adapter library if we go down the data aggregator path, and have sufficient maintainers.

---

_Defillama Docs:_

Follow [this guide](https://docs.llama.fi/submit-a-project) to create an adapter and submit a PR with it.

Also, don't hesitate to send a message on [our discord](https://discord.defillama.com/) if we're late to merge your PR.

> If you would like to add a `volume` adapter please submit the PR [here](https://github.com/DefiLlama/adapters).

## Getting listed

Please send answers to questions there https://github.com/DefiLlama/DefiLlama-Adapters/blob/main/pull_request_template.md when creating a PR.

## Work in progress

This is a work in progress. The goal is to eventually handle historical data. DefiLlama aims to be transparent, accurate and open source.

If you have any suggestions, want to contribute or want to chat, please join [our discord](https://discord.defillama.com/) and drop a message.

## Testing adapters
```
node test.js projects/pangolin/index.js
```

## Changing RPC providers
If you want to change RPC providers because you need archive node access or because the default ones don't work well enough you can do so by creating an `.env` file and filling it with the env variables to overwrite:
```
ETHEREUM_RPC="..."
BSC_RPC="..."
POLYGON_RPC="..."
FANTOM_RPC="..."
ARBITRUM_RPC="..."
OPTIMISM_RPC="..."
XDAI_RPC="..."
HARMONY_RPC="..."
```

The name of each rpc is `{CHAIN-NAME}_RPC`, and the name we use for each chain can be found [here](https://github.com/DefiLlama/defillama-sdk/blob/master/src/providers.json)
