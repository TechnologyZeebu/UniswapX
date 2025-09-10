# ResolvedOrderLib.sol

## Library: `ResolvedOrderLib`

### Description

The `ResolvedOrderLib` library provides a helper function for validating resolved orders.

### Errors

*   `InvalidReactor()`: Thrown when the order targets a different reactor.

### Functions

#### `validate(ResolvedOrder memory resolvedOrder, address filler)`

*   **Visibility:** `internal`
*   **Modifiers:** `view`
*   **Description:** Validates a resolved order. It checks that the order is targeting the correct reactor and calls the additional validation contract if one is specified.
*   **Parameters:**
    *   `resolvedOrder`: The resolved order to validate.
    *   `filler`: The address of the filler of the order.
