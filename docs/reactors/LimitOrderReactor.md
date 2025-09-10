# LimitOrderReactor.sol

## Contract: `LimitOrderReactor`

**Inherits from:** `BaseReactor`

### Description

The `LimitOrderReactor` contract is a reactor for settling simple limit orders. It inherits from `BaseReactor` and implements the order-specific logic for limit orders.

### Functions

#### `constructor(IPermit2 _permit2, address _protocolFeeOwner)`

*   **Visibility:** `public`
*   **Description:** Sets the `Permit2` and protocol fee owner addresses.

#### `_resolve(SignedOrder calldata signedOrder)`

*   **Visibility:** `internal`
*   **Modifiers:** `pure`, `override`
*   **Description:** Resolves a limit order by decoding it and creating a `ResolvedOrder` struct.
*   **Parameters:**
    *   `signedOrder`: The signed limit order to resolve.
*   **Returns:** A `ResolvedOrder` struct.

#### `_transferInputTokens(ResolvedOrder memory order, address to)`

*   **Visibility:** `internal`
*   **Modifiers:** `override`
*   **Description:** Transfers the input tokens for a limit order using `Permit2`.
*   **Parameters:**
    *   `order`: The resolved order to transfer tokens for.
    *   `to`: The address to transfer the input tokens to.
