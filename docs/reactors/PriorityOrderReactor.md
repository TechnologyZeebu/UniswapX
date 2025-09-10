# PriorityOrderReactor.sol

## Contract: `PriorityOrderReactor`

**Inherits from:** `BaseReactor`

### Description

The `PriorityOrderReactor` contract is a reactor for settling priority orders. It is designed to be used on chains that use priority fee transaction ordering. It inherits from `BaseReactor` and implements the order-specific logic for priority orders.

### Errors

*   `InvalidDeadline()`: Thrown when an order's deadline is in the past.
*   `OrderNotFillable()`: Thrown when an order's `auctionStartBlock` is in the future.
*   `OrderAlreadyFilled()`: Thrown when an order's nonce has already been used.
*   `InputOutputScaling()`: Thrown when an order's input and outputs both scale with priority fee.
*   `InvalidGasPrice()`: Thrown when `tx.gasprice` is less than `block.basefee`.

### Functions

#### `constructor(IPermit2 _permit2, address _protocolFeeOwner)`

*   **Visibility:** `public`
*   **Description:** Sets the `Permit2` and protocol fee owner addresses.

#### `_resolve(SignedOrder calldata signedOrder)`

*   **Visibility:** `internal`
*   **Modifiers:** `view`, `override`
*   **Description:** Resolves a priority order by decoding it, validating it, and calculating the final inputs and outputs based on the priority fee.
*   **Parameters:**
    *   `signedOrder`: The signed priority order to resolve.
*   **Returns:** A `ResolvedOrder` struct.

#### `_transferInputTokens(ResolvedOrder memory order, address to)`

*   **Visibility:** `internal`
*   **Modifiers:** `override`
*   **Description:** Transfers the input tokens for a priority order using `Permit2`.
*   **Parameters:**
    *   `order`: The resolved order to transfer tokens for.
    *   `to`: The address to transfer the input tokens to.

#### `_validateOrder(bytes32 orderHash, PriorityOrder memory order)`

*   **Visibility:** `internal`
*   **Modifiers:** `view`
*   **Description:** Validates the fields of a priority order.
*   **Parameters:**
    *   `orderHash`: The hash of the order.
    *   `order`: The priority order to validate.

#### `_getPriorityFee(uint256 baselinePriorityFeeWei)`

*   **Visibility:** `internal`
*   **Modifiers:** `view`
*   **Description:** Resolves the priority fee for the current transaction.
*   **Parameters:**
    *   `baselinePriorityFeeWei`: The baseline priority fee to be subtracted from the calculated priority fee.
*   **Returns:** The resolved priority fee.

#### `_checkPermit2Nonce(address swapper, uint256 nonce)`

*   **Visibility:** `internal`
*   **Modifiers:** `view`
*   **Description:** Checks if an order has already been filled by checking the nonce with Permit2.
*   **Parameters:**
    *   `swapper`: The address of the swapper.
    *   `nonce`: The nonce associated with the order.
