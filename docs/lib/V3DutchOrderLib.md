# V3DutchOrderLib.sol

## Structs

### `CosignerData`

*   **Description:** This struct contains data that can be cosigned to override parts of a V3 Dutch order.
*   **Fields:**
    *   `decayStartBlock` (`uint256`): The block at which the input or outputs start decaying.
    *   `exclusiveFiller` (`address`): The address who has exclusive rights to the order until `decayStartBlock`.
    *   `exclusivityOverrideBps` (`uint256`): The amount in basis points that a non-exclusive filler needs to improve the outputs by to be able to fill the order.
    *   `inputAmount` (`uint256`): The amount of the input token.
    *   `outputAmounts` (`uint256[]`): The amounts of the output tokens.

### `V3DutchOrder`

*   **Description:** This struct represents a V3 Dutch order.
*   **Fields:**
    *   `info` (`OrderInfo`): Generic order information.
    *   `cosigner` (`address`): The address which must cosign the full order.
    *   `startingBaseFee` (`uint256`): Adjust the `startAmount` to account for changes to gas.
    *   `baseInput` (`V3DutchInput`): The base input for the order.
    *   `baseOutputs` (`V3DutchOutput[]`): The base outputs for the order.
    *   `cosignerData` (`CosignerData`): Data signed over by the cosigner.
    *   `cosignature` (`bytes`): Signature from the cosigner over `(orderHash || cosignerData)`.

### `NonlinearDutchDecay`

*   **Description:** This struct represents the changes in tokens (positive or negative) to subtract from the start amount.
*   **Fields:**
    *   `relativeBlocks` (`uint256`): 16 `uint16` values packed into a `uint256`. Can represent curves with points 2^16 blocks into the future.
    *   `relativeAmounts` (`int256[]`): The relative amounts for each point on the curve.

### `V3DutchInput`

*   **Description:** This struct represents an amount of input tokens that increases non-linearly over time.
*   **Fields:**
    *   `token` (`ERC20`): The ERC20 token address.
    *   `startAmount` (`uint256`): The amount of tokens at the starting block.
    *   `curve` (`NonlinearDutchDecay`): The non-linear decay curve for the input.
    *   `maxAmount` (`uint256`): The maximum amount of the curve.
    *   `adjustmentPerGweiBaseFee` (`uint256`): The amount of token to change per wei change in basefee.

### `V3DutchOutput`

*   **Description:** This struct represents an amount of output tokens that decreases non-linearly over time.
*   **Fields:**
    *   `token` (`address`): The ERC20 token address (or native ETH address).
    *   `startAmount` (`uint256`): The amount of tokens at the start of the time period.
    *   `curve` (`NonlinearDutchDecay`): The non-linear decay curve for the output.
    *   `recipient` (`address`): The address who must receive the tokens to satisfy the order.
    *   `minAmount` (`uint256`): The minimum amount of the curve.
    *   `adjustmentPerGweiBaseFee` (`uint256`): The amount of token to change per wei change in basefee.

## Library: `V3DutchOrderLib`

### Description

The `V3DutchOrderLib` library provides helper functions for handling V3 Dutch order objects, specifically for hashing them according to the EIP-712 standard.

### Constants

*   Many constants defining the EIP-712 type strings and hashes for the various structs.

### Functions

#### `hash(NonlinearDutchDecay memory curve)`

*   **Visibility:** `internal`
*   **Modifiers:** `pure`
*   **Description:** Hashes a `NonlinearDutchDecay` struct.
*   **Parameters:**
    *   `curve`: The `NonlinearDutchDecay` to hash.
*   **Returns:** The EIP-712 hash of the curve.

#### `hash(V3DutchInput memory input)`

*   **Visibility:** `internal`
*   **Modifiers:** `pure`
*   **Description:** Hashes a `V3DutchInput` struct.
*   **Parameters:**
    *   `input`: The `V3DutchInput` to hash.
*   **Returns:** The EIP-712 hash of the input.

#### `hash(V3DutchOutput memory output)`

*   **Visibility:** `internal`
*   **Modifiers:** `pure`
*   **Description:** Hashes a `V3DutchOutput` struct.
*   **Parameters:**
    *   `output`: The `V3DutchOutput` to hash.
*   **Returns:** The EIP-712 hash of the output.

#### `hash(V3DutchOutput[] memory outputs)`

*   **Visibility:** `internal`
*   **Modifiers:** `pure`
*   **Description:** Hashes an array of `V3DutchOutput` structs.
*   **Parameters:**
    *   `outputs`: The array of `V3DutchOutput`s to hash.
*   **Returns:** The EIP-712 hash of the outputs.

#### `hash(V3DutchOrder memory order)`

*   **Visibility:** `internal`
*   **Modifiers:** `pure`
*   **Description:** Hashes a `V3DutchOrder` struct.
*   **Parameters:**
    *   `order`: The `V3DutchOrder` to hash.
*   **Returns:** The EIP-712 hash of the order.

#### `cosignerDigest(V3DutchOrder memory order, bytes32 orderHash)`

*   **Visibility:** `internal`
*   **Modifiers:** `view`
*   **Description:** Gets the digest of the cosigner data.
*   **Parameters:**
    *   `order`: The V3 Dutch order.
    *   `orderHash`: The hash of the order.
*   **Returns:** The digest of the cosigner data.
