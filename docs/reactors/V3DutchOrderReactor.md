# V3DutchOrderReactor.sol

## Contract: `V3DutchOrderReactor`

**Inherits from:** `BaseReactor`, `BlockNumberish`

### Description

The `V3DutchOrderReactor` contract is a reactor for settling V3 Dutch orders. It inherits from `BaseReactor` and `BlockNumberish` and implements the order-specific logic for V3 Dutch orders. V3 orders must be cosigned by the specified cosigner to set the starting block and override the value.

### Errors

*   `DeadlineReached()`: Thrown when an order's deadline is passed.
*   `InvalidCosignerInput()`: Thrown when an order's cosigner input is greater than the specified base input.
*   `InvalidCosignerOutput()`: Thrown when an order's cosigner output is less than the specified base output.

### Functions

#### `constructor(IPermit2 _permit2, address _protocolFeeOwner)`

*   **Visibility:** `public`
*   **Description:** Sets the `Permit2` and protocol fee owner addresses.

#### `_resolve(SignedOrder calldata signedOrder)`

*   **Visibility:** `internal`
*   **Modifiers:** `view`, `virtual`, `override`
*   **Description:** Resolves a V3 Dutch order by decoding it, validating it, and calculating the final inputs and outputs based on the decay logic and gas price adjustment.
*   **Parameters:**
    *   `signedOrder`: The signed V3 Dutch order to resolve.
*   **Returns:** A `ResolvedOrder` struct.

#### `_transferInputTokens(ResolvedOrder memory order, address to)`

*   **Visibility:** `internal`
*   **Modifiers:** `override`
*   **Description:** Transfers the input tokens for a V3 Dutch order using `Permit2`.
*   **Parameters:**
    *   `order`: The resolved order to transfer tokens for.
    *   `to`: The address to transfer the input tokens to.

#### `_updateWithCosignerAmounts(V3DutchOrder memory order)`

*   **Visibility:** `internal`
*   **Modifiers:** `pure`
*   **Description:** Updates the order with the amounts specified by the cosigner.
*   **Parameters:**
    *   `order`: The V3 Dutch order to update.

#### `_updateWithGasAdjustment(V3DutchOrder memory order)`

*   **Visibility:** `internal`
*   **Modifiers:** `view`
*   **Description:** Updates the order with a gas adjustment based on the current `block.basefee`.
*   **Parameters:**
    *   `order`: The V3 Dutch order to update.

#### `_computeDelta(uint256 adjustmentPerGweiBaseFee, int256 gasDeltaWei)`

*   **Visibility:** `internal`
*   **Modifiers:** `pure`
*   **Description:** Computes the delta for the gas adjustment.
*   **Parameters:**
    *   `adjustmentPerGweiBaseFee`: The adjustment per gwei of base fee.
    *   `gasDeltaWei`: The delta in gas price in wei.
*   **Returns:** The computed delta.

#### `_validateOrder(bytes32 orderHash, V3DutchOrder memory order)`

*   **Visibility:** `internal`
*   **Modifiers:** `view`
*   **Description:** Validates the fields of a V3 Dutch order.
*   **Parameters:**
    *   `orderHash`: The hash of the order.
    *   `order`: The V3 Dutch order to validate.
