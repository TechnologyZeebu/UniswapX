# ExclusiveDutchOrderLib.sol

## Structs

### `ExclusiveDutchOrder`

*   **Description:** This struct represents a Dutch order with an exclusive filler.
*   **Fields:**
    *   `info` (`OrderInfo`): Generic order information.
    *   `decayStartTime` (`uint256`): The time at which the `DutchOutputs` start decaying.
    *   `decayEndTime` (`uint256`): The time at which the price becomes static.
    *   `exclusiveFiller` (`address`): The address who has exclusive rights to the order until `decayStartTime`.
    *   `exclusivityOverrideBps` (`uint256`): The amount in basis points that a non-exclusive filler needs to improve the outputs by to be able to fill the order.
    *   `input` (`DutchInput`): The tokens that the swapper will provide when settling the order.
    *   `outputs` (`DutchOutput[]`): The tokens that must be received to satisfy the order.

## Library: `ExclusiveDutchOrderLib`

### Description

The `ExclusiveDutchOrderLib` library provides helper functions for handling exclusive Dutch order objects, specifically for hashing them according to the EIP-712 standard.

### Constants

*   `EXCLUSIVE_DUTCH_LIMIT_ORDER_TYPE` (`bytes internal constant`): The EIP-712 type string for the `ExclusiveDutchOrder` struct.
*   `ORDER_TYPE` (`bytes internal constant`): The full EIP-712 type string for the `ExclusiveDutchOrder` struct, including its sub-structs.
*   `ORDER_TYPE_HASH` (`bytes32 internal constant`): The EIP-712 type hash for the `ExclusiveDutchOrder` struct.
*   `PERMIT2_ORDER_TYPE` (`string internal constant`): The full EIP-712 type string for the `ExclusiveDutchOrder` struct when used with Permit2.

### Functions

#### `hash(ExclusiveDutchOrder memory order)`

*   **Visibility:** `internal`
*   **Modifiers:** `pure`
*   **Description:** Hashes an `ExclusiveDutchOrder` struct according to the EIP-712 standard.
*   **Parameters:**
    *   `order`: The `ExclusiveDutchOrder` to hash.
*   **Returns:** The EIP-712 hash of the order.
