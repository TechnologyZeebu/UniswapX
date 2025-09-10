# ExclusivityLib.sol

## Library: `ExclusivityLib`

### Description

The `ExclusivityLib` library handles the logic for order exclusivity. It gives a configured filler exclusive rights to fill an order before a certain time or block number, or it enforces an override price improvement for non-exclusive fillers.

### Errors

*   `NoExclusiveOverride()`: Thrown when an order has strict exclusivity and the filler does not have it.

### Constants

*   `STRICT_EXCLUSIVITY` (`uint256 private constant`): A constant representing strict exclusivity (0 bps override).
*   `BPS` (`uint256 private constant`): Basis points, equal to 10,000.

### Functions

#### `handleExclusiveOverrideTimestamp(ResolvedOrder memory order, address exclusive, uint256 exclusivityEnd, uint256 exclusivityOverrideBps)`

*   **Visibility:** `internal`
*   **Modifiers:** `view`
*   **Description:** Applies the exclusivity override to the resolved order if necessary, based on a timestamp.
*   **Parameters:**
    *   `order`: The order to apply the exclusivity override to.
    *   `exclusive`: The exclusive filler address.
    *   `exclusivityEnd`: The exclusivity end timestamp.
    *   `exclusivityOverrideBps`: The exclusivity override in basis points.

#### `handleExclusiveOverrideBlock(ResolvedOrder memory order, address exclusive, uint256 exclusivityEnd, uint256 exclusivityOverrideBps, uint256 blockNumberish)`

*   **Visibility:** `internal`
*   **Modifiers:** `view`
*   **Description:** Applies the exclusivity override to the resolved order if necessary, based on a block number.
*   **Parameters:**
    *   `order`: The order to apply the exclusivity override to.
    *   `exclusive`: The exclusive filler address.
    *   `exclusivityEnd`: The exclusivity end block number.
    *   `exclusivityOverrideBps`: The exclusivity override in basis points.
    *   `blockNumberish`: The current block number.

#### `_handleExclusiveOverride(ResolvedOrder memory order, address exclusive, uint256 exclusivityEnd, uint256 exclusivityOverrideBps, uint256 currentPosition)`

*   **Visibility:** `internal`
*   **Modifiers:** `view`
*   **Description:** The internal function that applies the exclusivity override to the resolved order if necessary.
*   **Parameters:**
    *   `order`: The order to apply the exclusivity override to.
    *   `exclusive`: The exclusive filler address.
    *   `exclusivityEnd`: The exclusivity end timestamp or block number.
    *   `exclusivityOverrideBps`: The exclusivity override in basis points.
    *   `currentPosition`: The block timestamp or number to determine exclusivity.

#### `hasFillingRights(address exclusive, uint256 exclusivityEnd, uint256 currentPosition)`

*   **Visibility:** `internal`
*   **Modifiers:** `view`
*   **Description:** Checks if the caller currently has filling rights on the order.
*   **Parameters:**
    *   `exclusive`: The exclusive filler address.
    *   `exclusivityEnd`: The exclusivity end timestamp or block number.
    *   `currentPosition`: The timestamp or block number to determine exclusivity.
*   **Returns:** `true` if the caller has filling rights, `false` otherwise.
