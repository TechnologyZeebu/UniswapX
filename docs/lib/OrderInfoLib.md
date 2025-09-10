# OrderInfoLib.sol

## Library: `OrderInfoLib`

### Description

The `OrderInfoLib` library provides a helper function for hashing `OrderInfo` objects according to the EIP-712 standard.

### Constants

*   `ORDER_INFO_TYPE` (`bytes internal constant`): The EIP-712 type string for the `OrderInfo` struct.
*   `ORDER_INFO_TYPE_HASH` (`bytes32 internal constant`): The EIP-712 type hash for the `OrderInfo` struct.

### Functions

#### `hash(OrderInfo memory info)`

*   **Visibility:** `internal`
*   **Modifiers:** `pure`
*   **Description:** Hashes an `OrderInfo` struct according to the EIP-712 standard.
*   **Parameters:**
    *   `info`: The `OrderInfo` object to hash.
*   **Returns:** The EIP-712 hash of the `OrderInfo` object.
