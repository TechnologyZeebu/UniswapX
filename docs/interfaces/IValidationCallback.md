# IValidationCallback.sol

## Interface: `IValidationCallback`

### Description

The `IValidationCallback` interface defines the standard for a callback that can be used for custom validation of an order. A contract that implements this interface can be set as the `additionalValidationContract` in the `OrderInfo` struct.

### Functions

#### `validate(address filler, ResolvedOrder calldata resolvedOrder)`

*   **Visibility:** `external`
*   **Modifiers:** `view`
*   **Description:** This function is called by the reactor for custom validation of an order. It should revert if the validation fails.
*   **Parameters:**
    *   `filler`: The address of the filler of the order.
    *   `resolvedOrder`: The resolved order to validate.
