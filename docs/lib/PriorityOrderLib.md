# PriorityOrderLib.sol

## Structs

### `PriorityCosignerData`

*   **Description:** This struct contains data that can be cosigned to override parts of a priority order.
*   **Fields:**
    *   `auctionTargetBlock` (`uint256`): The block at which the order can be executed, overriding `auctionStartBlock`.

### `PriorityInput`

*   **Description:** This struct represents the input for a priority order.
*   **Fields:**
    *   `token` (`ERC20`): The ERC20 token address.
    *   `amount` (`uint256`): The amount of the token.
    *   `mpsPerPriorityFeeWei` (`uint256`): The amount of input to be received less per wei of priority fee, denominated in milli-basis points.

### `PriorityOutput`

*   **Description:** This struct represents an output for a priority order.
*   **Fields:**
    *   `token` (`address`): The token address.
    *   `amount` (`uint256`): The amount of the token.
    *   `mpsPerPriorityFeeWei` (`uint256`): The extra amount of output to be paid per wei of priority fee, denominated in milli-basis points.
    *   `recipient` (`address`): The recipient of the output.

### `PriorityOrder`

*   **Description:** This struct represents a priority order.
*   **Fields:**
    *   `info` (`OrderInfo`): Generic order information.
    *   `cosigner` (`address`): The address which may cosign the order.
    *   `auctionStartBlock` (`uint256`): The block at which the order can be executed.
    *   `baselinePriorityFeeWei` (`uint256`): The baseline priority fee for the order, above which additional taxes are applied.
    *   `input` (`PriorityInput`): The input for the order.
    *   `outputs` (`PriorityOutput[]`): The outputs for the order.
    *   `cosignerData` (`PriorityCosignerData`): Data signed over by the cosigner.
    *   `cosignature` (`bytes`): Signature from the cosigner over `(orderHash || cosignerData)`.

## Library: `PriorityOrderLib`

### Description

The `PriorityOrderLib` library provides helper functions for handling priority order objects, specifically for hashing them according to the EIP-712 standard.

### Constants

*   `PRIORITY_INPUT_TOKEN_TYPE` (`bytes internal constant`): The EIP-712 type string for the `PriorityInput` struct.
*   `PRIORITY_INPUT_TOKEN_TYPE_HASH` (`bytes32 internal constant`): The EIP-712 type hash for the `PriorityInput` struct.
*   `PRIORITY_OUTPUT_TOKEN_TYPE` (`bytes internal constant`): The EIP-712 type string for the `PriorityOutput` struct.
*   `PRIORITY_OUTPUT_TOKEN_TYPE_HASH` (`bytes32 internal constant`): The EIP-712 type hash for the `PriorityOutput` struct.
*   `TOKEN_PERMISSIONS_TYPE` (`string internal constant`): The EIP-712 type string for the `TokenPermissions` struct used by Permit2.
*   `PERMIT2_ORDER_TYPE` (`string internal constant`): The full EIP-712 type string for the `PriorityOrder` struct when used with Permit2.
*   `TOPLEVEL_PRIORITY_ORDER_TYPE` (`bytes internal constant`): The EIP-712 type string for the top-level `PriorityOrder` struct.
*   `ORDER_TYPE` (`bytes internal constant`): The full EIP-712 type string for the `PriorityOrder` struct, including its sub-structs.
*   `ORDER_TYPE_HASH` (`bytes32 internal constant`): The EIP-712 type hash for the `PriorityOrder` struct.

### Functions

#### `hash(PriorityInput memory input)`

*   **Visibility:** `private`
*   **Modifiers:** `pure`
*   **Description:** Hashes a `PriorityInput` struct according to the EIP-712 standard.
*   **Parameters:**
    *   `input`: The `PriorityInput` to hash.
*   **Returns:** The EIP-712 hash of the input.

#### `hash(PriorityOutput memory output)`

*   **Visibility:** `private`
*   **Modifiers:** `pure`
*   **Description:** Hashes a `PriorityOutput` struct according to the EIP-712 standard.
*   **Parameters:**
    *   `output`: The `PriorityOutput` to hash.
*   **Returns:** The EIP-712 hash of the output.

#### `hash(PriorityOutput[] memory outputs)`

*   **Visibility:** `private`
*   **Modifiers:** `pure`
*   **Description:** Hashes an array of `PriorityOutput` structs according to the EIP-712 standard.
*   **Parameters:**
    *   `outputs`: The array of `PriorityOutput`s to hash.
*   **Returns:** The EIP-712 hash of the outputs.

#### `hash(PriorityOrder memory order)`

*   **Visibility:** `internal`
*   **Modifiers:** `pure`
*   **Description:** Hashes a `PriorityOrder` struct according to the EIP-712 standard.
*   **Parameters:**
    *   `order`: The `PriorityOrder` to hash.
*   **Returns:** The EIP-712 hash of the order.

#### `cosignerDigest(PriorityOrder memory order, bytes32 orderHash)`

*   **Visibility:** `internal`
*   **Modifiers:** `view`
*   **Description:** Gets the digest of the cosigner data.
*   **Parameters:**
    *   `order`: The priority order.
    *   `orderHash`: The hash of the order.
*   **Returns:** The digest of the cosigner data.
