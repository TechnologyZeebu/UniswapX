# V2DutchOrderReactor.sol

## Contract: `V2DutchOrderReactor`

**Inherits from:** `BaseReactor`

### Description

The `V2DutchOrderReactor` contract is a reactor for settling V2 Dutch orders. It inherits from `BaseReactor` and implements the order-specific logic for V2 Dutch orders. V2 orders must be cosigned by the specified cosigner to override timings and starting values.

### Errors

*   `DeadlineBeforeEndTime()`: Thrown when an order's deadline is before its end time.
*   `InvalidCosignature()`: Thrown when an order's cosignature does not match the expected cosigner.
*   `InvalidCosignerInput()`: Thrown when an order's cosigner input is greater than the specified base input.
*   `InvalidCosignerOutput()`: Thrown when an order's cosigner output is less than the specified base output.

### Functions

#### `constructor(IPermit2 _permit2, address _protocolFeeOwner)`

*   **Visibility:** `public`
*   **Description:** Sets the `Permit2` and protocol fee owner addresses.

#### `_resolve(SignedOrder calldata signedOrder)`

*   **Visibility:** `internal`
*   **Modifiers:** `view`, `virtual`, `override`
*   **Description:** Resolves a V2 Dutch order by decoding it, validating it, and calculating the final inputs and outputs based on the decay logic.
*   **Parameters:**
    *   `signedOrder`: The signed V2 Dutch order to resolve.
*   **Returns:** A `ResolvedOrder` struct.

#### `_transferInputTokens(ResolvedOrder memory order, address to)`

*   **Visibility:** `internal`
*   **Modifiers:** `override`
*   **Description:** Transfers the input tokens for a V2 Dutch order using `Permit2`.
*   **Parameters:**
    *   `order`: The resolved order to transfer tokens for.
    *   `to`: The address to transfer the input tokens to.

#### `_updateWithCosignerAmounts(V2DutchOrder memory order)`

*   **Visibility:** `internal`
*   **Modifiers:** `pure`
*   **Description:** Updates the order with the amounts specified by the cosigner.
*   **Parameters:**
    *   `order`: The V2 Dutch order to update.

#### `_validateOrder(bytes32 orderHash, V2DutchOrder memory order)`

*   **Visibility:** `internal`
*   **Modifiers:** `pure`
*   **Description:** Validates the fields of a V2 Dutch order.
*   **Parameters:**
    *   `orderHash`: The hash of the order.
    *   `order`: The V2 Dutch order to validate.
