# DutchOrderReactor.sol

## Contract: `DutchOrderReactor`

**Inherits from:** `BaseReactor`

### Description

The `DutchOrderReactor` contract is a reactor for settling Dutch orders. It inherits from `BaseReactor` and implements the order-specific logic for Dutch orders.

### Errors

*   `DeadlineBeforeEndTime()`: Thrown when an order's deadline is before its end time.
*   `InputAndOutputDecay()`: Thrown when an order's inputs and outputs both decay.

### Functions

#### `constructor(IPermit2 _permit2, address _protocolFeeOwner)`

*   **Visibility:** `public`
*   **Description:** Sets the `Permit2` and protocol fee owner addresses.

#### `_resolve(SignedOrder calldata signedOrder)`

*   **Visibility:** `internal`
*   **Modifiers:** `view`, `virtual`, `override`
*   **Description:** Resolves a Dutch order by decoding it, validating it, and calculating the final inputs and outputs based on the decay logic.
*   **Parameters:**
    *   `signedOrder`: The signed Dutch order to resolve.
*   **Returns:** A `ResolvedOrder` struct.

#### `_transferInputTokens(ResolvedOrder memory order, address to)`

*   **Visibility:** `internal`
*   **Modifiers:** `override`
*   **Description:** Transfers the input tokens for a Dutch order using `Permit2`.
*   **Parameters:**
    *   `order`: The resolved order to transfer tokens for.
    *   `to`: The address to transfer the input tokens to.

#### `_validateOrder(DutchOrder memory order)`

*   **Visibility:** `internal`
*   **Modifiers:** `pure`
*   **Description:** Validates the fields of a Dutch order. It checks that the deadline is not before the decay end time and that inputs and outputs do not both decay.
*   **Parameters:**
    *   `order`: The Dutch order to validate.
