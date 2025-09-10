# ExclusiveFillerValidation.sol

## Contract: `ExclusiveFillerValidation`

**Implements:** `IValidationCallback`

### Description

The `ExclusiveFillerValidation` contract is a sample validation contract that can be used to create orders that are exclusive to a single filler.

### Errors

*   `NotExclusiveFiller(address filler)`: Thrown if the filler does not have fill rights.

### Functions

#### `validate(address filler, ResolvedOrder calldata resolvedOrder)`

*   **Visibility:** `external`
*   **Modifiers:** `view`
*   **Description:** Validates that the filler has exclusive rights to fill the order. It reverts if the exclusivity period has not ended and the filler is not the exclusive filler.
*   **Parameters:**
    *   `filler`: The filler of the order.
    *   `resolvedOrder`: The order data to validate.
