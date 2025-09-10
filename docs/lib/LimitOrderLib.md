# LimitOrderLib.sol

## Structs

### `LimitOrder`

*   **Description:** This struct represents a simple limit order.
*   **Fields:**
    *   `info` (`OrderInfo`): Generic order information.
    *   `input` (`InputToken`): The tokens that the swapper will provide when settling the order.
    *   `outputs` (`OutputToken[]`): The tokens that must be received to satisfy the order.

## Library: `LimitOrderLib`

### Description

The `LimitOrderLib` library provides helper functions for handling limit order objects, specifically for hashing them according to the EIP-712 standard.

### Constants

*   `OUTPUT_TOKEN_TYPE` (`bytes private constant`): The EIP-712 type string for the `OutputToken` struct.
*   `OUTPUT_TOKEN_TYPE_HASH` (`bytes32 private constant`): The EIP-712 type hash for the `OutputToken` struct.
*   `ORDER_TYPE` (`bytes internal constant`): The full EIP-712 type string for the `LimitOrder` struct, including its sub-structs.
*   `ORDER_TYPE_HASH` (`bytes32 internal constant`): The EIP-712 type hash for the `LimitOrder` struct.
*   `TOKEN_PERMISSIONS_TYPE` (`string private constant`): The EIP-712 type string for the `TokenPermissions` struct used by Permit2.
*   `PERMIT2_ORDER_TYPE` (`string internal constant`): The full EIP-712 type string for the `LimitOrder` struct when used with Permit2.

### Functions

#### `hash(OutputToken memory output)`

*   **Visibility:** `private`
*   **Modifiers:** `pure`
*   **Description:** Hashes an `OutputToken` struct according to the EIP-712 standard.
*   **Parameters:**
    *   `output`: The `OutputToken` to hash.
*   **Returns:** The EIP-712 hash of the output.

#### `hash(OutputToken[] memory outputs)`

*   **Visibility:** `private`
*   **Modifiers:** `pure`
*   **Description:** Hashes an array of `OutputToken` structs according to the EIP-712 standard.
*   **Parameters:**
    *   `outputs`: The array of `OutputToken`s to hash.
*   **Returns:** The EIP-712 hash of the outputs.

#### `hash(LimitOrder memory order)`

*   **Visibility:** `internal`
*   **Modifiers:** `pure`
*   **Description:** Hashes a `LimitOrder` struct according to the EIP-712 standard.
*   **Parameters:**
    *   `order`: The `LimitOrder` to hash.
*   **Returns:** The EIP-712 hash of the order.
