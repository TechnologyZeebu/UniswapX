# IProtocolFeeController.sol

## Interface: `IProtocolFeeController`

### Description

The `IProtocolFeeController` interface defines the standard for getting protocol fee outputs for a given order. A contract that implements this interface can be set as the `feeController` in the `ProtocolFees` contract.

### Functions

#### `getFeeOutputs(ResolvedOrder memory order)`

*   **Visibility:** `external`
*   **Modifiers:** `view`
*   **Description:** Gets the fee outputs for a given resolved order.
*   **Parameters:**
    *   `order`: The resolved order to get fee outputs for.
*   **Returns:** A list of `OutputToken` structs representing the fee outputs to be appended to the order.
