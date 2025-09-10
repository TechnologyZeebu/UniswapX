# DutchOrderLib.sol

## Structs

### `DutchOutput`

*   **Description:** This struct represents an amount of output tokens that decreases linearly over time.
*   **Fields:**
    *   `token` (`address`): The ERC20 token address (or native ETH address).
    *   `startAmount` (`uint256`): The amount of tokens at the start of the time period.
    *   `endAmount` (`uint256`): The amount of tokens at the end of the time period.
    *   `recipient` (`address`): The address who must receive the tokens to satisfy the order.

### `DutchInput`

*   **Description:** This struct represents an amount of input tokens that increases linearly over time.
*   **Fields:**
    *   `token` (`ERC20`): The ERC20 token address.
    *   `startAmount` (`uint256`): The amount of tokens at the start of the time period.
    *   `endAmount` (`uint256`): The amount of tokens at the end of the time period.

### `DutchOrder`

*   **Description:** This struct represents a Dutch order.
*   **Fields:**
    *   `info` (`OrderInfo`): Generic order information.
    *   `decayStartTime` (`uint256`): The time at which the `DutchOutputs` start decaying.
    *   `decayEndTime` (`uint256`): The time at which the price becomes static.
    *   `input` (`DutchInput`): The tokens that the swapper will provide when settling the order.
    *   `outputs` (`DutchOutput[]`): The tokens that must be received to satisfy the order.

## Library: `DutchOrderLib`

### Description

The `DutchOrderLib` library provides helper functions for handling Dutch order objects, specifically for hashing them according to the EIP-712 standard.

### Constants

*   `DUTCH_OUTPUT_TYPE` (`bytes internal constant`): The EIP-712 type string for the `DutchOutput` struct.
*   `DUTCH_OUTPUT_TYPE_HASH` (`bytes32 internal constant`): The EIP-712 type hash for the `DutchOutput` struct.
*   `DUTCH_LIMIT_ORDER_TYPE` (`bytes internal constant`): The EIP-712 type string for the `DutchOrder` struct.
*   `ORDER_TYPE` (`bytes internal constant`): The full EIP-712 type string for the `DutchOrder` struct, including its sub-structs.
*   `ORDER_TYPE_HASH` (`bytes32 internal constant`): The EIP-712 type hash for the `DutchOrder` struct.
*   `TOKEN_PERMISSIONS_TYPE` (`string internal constant`): The EIP-712 type string for the `TokenPermissions` struct used by Permit2.
*   `PERMIT2_ORDER_TYPE` (`string internal constant`): The full EIP-712 type string for the `DutchOrder` struct when used with Permit2.

### Functions

#### `hash(DutchOutput memory output)`

*   **Visibility:** `internal`
*   **Modifiers:** `pure`
*   **Description:** Hashes a `DutchOutput` struct according to the EIP-712 standard.
*   **Parameters:**
    *   `output`: The `DutchOutput` to hash.
*   **Returns:** The EIP-712 hash of the output.

#### `hash(DutchOutput[] memory outputs)`

*   **Visibility:** `internal`
*   **Modifiers:** `pure`
*   **Description:** Hashes an array of `DutchOutput` structs according to the EIP-712 standard.
*   **Parameters:**
    *   `outputs`: The array of `DutchOutput`s to hash.
*   **Returns:** The EIP-712 hash of the outputs.

#### `hash(DutchOrder memory order)`

*   **Visibility:** `internal`
*   **Modifiers:** `pure`
*   **Description:** Hashes a `DutchOrder` struct according to the EIP-712 standard.
*   **Parameters:**
    *   `order`: The `DutchOrder` to hash.
*   **Returns:** The EIP-712 hash of the order.
