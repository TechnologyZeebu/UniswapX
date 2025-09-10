# BlockNumberish.sol

## Contract: `BlockNumberish`

### Description

The `BlockNumberish` contract is a helper contract used to get the current block number in a way that is compatible with different chains, specifically handling the case for Arbitrum. On most EVM chains, `block.number` returns the current block number. However, on Arbitrum, `block.number` can be manipulated by sequencers, so it is safer to use the `arbBlockNumber()` function from the `ArbSys` precompile.

This contract uses an immutable function pointer `_getBlockNumberish` that is set in the constructor based on the chain ID. If the chain ID is that of Arbitrum, it points to a function that calls `ArbSys`; otherwise, it points to a function that returns `block.number`.

### State Variables

*   `_getBlockNumberish` (`function() view returns (uint256) internal immutable`): An immutable function pointer that points to the correct function for getting the block number based on the chain.
*   `ARB_CHAIN_ID` (`uint256 private constant`): The chain ID for Arbitrum One mainnet.
*   `ARB_SYS_ADDRESS` (`address private constant`): The address of the `ArbSys` precompile contract on Arbitrum.

### Functions

#### `constructor()`

*   **Visibility:** `public`
*   **Description:** Sets the `_getBlockNumberish` function pointer based on the current chain ID.

#### `_getBlockNumberSyscall()`

*   **Visibility:** `private`
*   **Modifiers:** `view`
*   **Description:** Gets the block number on Arbitrum by calling the `arbBlockNumber()` function on the `ArbSys` precompile.
*   **Returns:** The current Arbitrum block number.

#### `_getBlockNumber()`

*   **Visibility:** `private`
*   **Modifiers:** `view`
*   **Description:** Gets the block number using the `block.number` opcode.
*   **Returns:** The current block number.
