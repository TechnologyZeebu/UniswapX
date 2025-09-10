# IReactor.sol

## Interface: `IReactor`

### Description

The `IReactor` interface defines the standard for order execution reactors in the UniswapX protocol. All reactor contracts must implement this interface.

### Functions

#### `execute(SignedOrder calldata order)`

*   **Visibility:** `external`
*   **Modifiers:** `payable`
*   **Description:** Executes a single order.
*   **Parameters:**
    *   `order`: The signed order to execute.

#### `executeWithCallback(SignedOrder calldata order, bytes calldata callbackData)`

*   **Visibility:** `external`
*   **Modifiers:** `payable`
*   **Description:** Executes a single order with a callback. The callback is made to the `msg.sender`.
*   **Parameters:**
    *   `order`: The signed order to execute.
    *   `callbackData`: The data to pass to the callback.

#### `executeBatch(SignedOrder[] calldata orders)`

*   **Visibility:** `external`
*   **Modifiers:** `payable`
*   **Description:** Executes a batch of orders.
*   **Parameters:**
    *   `orders`: An array of signed orders to execute.

#### `executeBatchWithCallback(SignedOrder[] calldata orders, bytes calldata callbackData)`

*   **Visibility:** `external`
*   **Modifiers:** `payable`
*   **Description:** Executes a batch of orders with a callback. The callback is made to the `msg.sender`.
*   **Parameters:**
    *   `orders`: An array of signed orders to execute.
    *   `callbackData`: The data to pass to the callback.
