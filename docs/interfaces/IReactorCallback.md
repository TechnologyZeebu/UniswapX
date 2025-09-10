# IReactorCallback.sol

## Interface: `IReactorCallback`

### Description

The `IReactorCallback` interface defines the standard for a callback that can be executed by a reactor during the execution of an order. This allows fillers to implement custom logic that is executed after the input tokens have been transferred but before the output tokens are transferred.

### Functions

#### `reactorCallback(ResolvedOrder[] memory resolvedOrders, bytes memory callbackData)`

*   **Visibility:** `external`
*   **Description:** This function is called by the reactor during the execution of an order. It is called after the input tokens have been transferred to the `msg.sender` of the `executeWithCallback` call. The implementing contract is responsible for ensuring that it has approved the reactor to spend the output tokens.
*   **Parameters:**
    *   `resolvedOrders`: An array of resolved orders that are being executed.
    *   `callbackData`: The callback data that was specified for the order execution.
