# OrderQuoter.sol

## Contract: `OrderQuoter`

**Implements:** `IReactorCallback`

### Description

The `OrderQuoter` contract is a lens contract used to pre-validate and quote generic orders off-chain. It allows users to see the current input and output token amounts required to satisfy an order without actually executing it.

### Errors

*   `OrdersLengthIncorrect()`: Thrown if `reactorCallback` receives more than one order.

### Constants

*   `ORDER_INFO_OFFSET` (`uint256 private constant`): The offset in bytes into the order object to the head of the `OrderInfo` struct.
*   `RESOLVED_ORDER_MIN_LENGTH` (`uint256 private constant`): The minimum length of a `ResolvedOrder` object in bytes.

### Functions

#### `quote(bytes memory order, bytes memory sig)`

*   **Visibility:** `external`
*   **Description:** Quotes the given order, returning the `ResolvedOrder` object which defines the current input and output token amounts required to satisfy it. It also bubbles up any reverts that would occur during the processing of the order.
*   **Parameters:**
    *   `order`: The ABI-encoded order.
    *   `sig`: The order signature.
*   **Returns:** The `ResolvedOrder`.

#### `getReactor(bytes memory order)`

*   **Visibility:** `public`
*   **Modifiers:** `pure`
*   **Description:** Returns the reactor of a given order.
*   **Parameters:**
    *   `order`: The ABI-encoded order.
*   **Returns:** The reactor address.

#### `parseRevertReason(bytes memory reason)`

*   **Visibility:** `private`
*   **Modifiers:** `pure`
*   **Description:** Parses the revert reason from a failed `executeWithCallback` call. If the reason is a `ResolvedOrder`, it returns it. Otherwise, it re-reverts with the original reason.
*   **Parameters:**
    *   `reason`: The revert reason.
*   **Returns:** The `ResolvedOrder`.

#### `reactorCallback(ResolvedOrder[] memory resolvedOrders, bytes memory)`

*   **Visibility:** `external`
*   **Modifiers:** `pure`
*   **Description:** This function is called by the reactor during the `quote` call. It reverts with the resolved order as the reason, which is then caught and parsed by the `quote` function.
*   **Parameters:**
    *   `resolvedOrders`: The resolved orders.
