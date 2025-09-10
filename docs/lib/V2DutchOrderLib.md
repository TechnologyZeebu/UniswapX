# V2DutchOrderLib.sol

## Structs

### `CosignerData`

*   **Description:** This struct contains data that can be cosigned to override parts of a V2 Dutch order.
*   **Fields:**
    *   `decayStartTime` (`uint256`): The time at which the `DutchOutputs` start decaying.
    *   `decayEndTime` (`uint256`): The time at which the price becomes static.
    *   `exclusiveFiller` (`address`): The address who has exclusive rights to the order until `decayStartTime`.
    *   `exclusivityOverrideBps` (`uint256`): The amount in basis points that a non-exclusive filler needs to improve the outputs by to be able to fill the order.
    *   `inputAmount` (`uint256`): The amount of the input token.
    *   `outputAmounts` (`uint256[]`): The amounts of the output tokens.

### `V2DutchOrder`

*   **Description:** This struct represents a V2 Dutch order.
*   **Fields:**
    *   `info` (`OrderInfo`): Generic order information.
    *   `cosigner` (`address`): The address which must cosign the full order.
    *   `baseInput` (`DutchInput`): The base input for the order.
    *   `baseOutputs` (`DutchOutput[]`): The base outputs for the order.
    *   `cosignerData` (`CosignerData`): Data signed over by the cosigner.
    *   `cosignature` (`bytes`): Signature from the cosigner over `(orderHash || cosignerData)`.

## Library: `V2DutchOrderLib`

### Description

The `V2DutchOrderLib` library provides helper functions for handling V2 Dutch order objects, specifically for hashing them according to the EIP-712 standard.

### Constants

*   `V2_DUTCH_ORDER_TYPE` (`bytes internal constant`): The EIP-712 type string for the `V2DutchOrder` struct.
*   `ORDER_TYPE` (`bytes internal constant`): The full EIP-712 type string for the `V2DutchOrder` struct, including its sub-structs.
*   `ORDER_TYPE_HASH` (`bytes32 internal constant`): The EIP-712 type hash for the `V2DutchOrder` struct.
*   `PERMIT2_ORDER_TYPE` (`string internal constant`): The full EIP-712 type string for the `V2DutchOrder` struct when used with Permit2.

### Functions

#### `hash(V2DutchOrder memory order)`

*   **Visibility:** `internal`
*   **Modifiers:** `pure`
*   **Description:** Hashes a `V2DutchOrder` struct according to the EIP-712 standard.
*   **Parameters:**
    *   `order`: The `V2DutchOrder` to hash.
*   **Returns:** The EIP-712 hash of the order.
