# IArbSys.sol

## Interface: `IArbSys`

### Description

The `IArbSys` interface provides a minimal interface for interacting with the Arbitrum `ArbSys` precompile contract. This contract is used to access Arbitrum-specific functionality, such as getting the current Arbitrum block number.

### Functions

#### `arbBlockNumber()`

*   **Visibility:** `external`
*   **Modifiers:** `view`
*   **Description:** Gets the current Arbitrum block number. This is distinct from the L1 block number. The Arbitrum genesis block has a block number of 0.
*   **Returns:** The current Arbitrum block number.
