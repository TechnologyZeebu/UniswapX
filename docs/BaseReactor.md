# BaseReactor.sol

## Abstract Contract: `BaseReactor`

**Inherits from:** `IReactor`, `ReactorEvents`, `ProtocolFees`, `ReentrancyGuard`

### Description

The `BaseReactor` contract is an abstract contract that provides the generic logic for settling off-chain signed orders. It serves as the foundation for all order reactors in the UniswapX protocol. This contract implements the `IReactor` interface and handles the core execution flow, including reentrancy protection, fee handling, and token transfers. Concrete reactor implementations must inherit from this contract and implement the order-specific logic in the `_resolve` and `_transferInputTokens` functions.

### State Variables

*   `permit2` (`IPermit2`): The Permit2 contract address used for token transfers and signature verification.

### Functions

#### `constructor(IPermit2 _permit2, address _protocolFeeOwner)`

*   **Visibility:** `public`
*   **Description:** Sets the Permit2 and protocol fee owner addresses.
*   **Parameters:**
    *   `_permit2`: The address of the Permit2 contract.
    *   `_protocolFeeOwner`: The address of the protocol fee owner.

#### `execute(SignedOrder calldata order)`

*   **Visibility:** `external`
*   **Modifiers:** `payable`, `override`, `nonReentrant`
*   **Description:** Executes a single order.

#### `executeWithCallback(SignedOrder calldata order, bytes calldata callbackData)`

*   **Visibility:** `external`
*   **Modifiers:** `payable`, `override`, `nonReentrant`
*   **Description:** Executes a single order with a callback.

#### `executeBatch(SignedOrder[] calldata orders)`

*   **Visibility:** `external`
*   **Modifiers:** `payable`, `override`, `nonReentrant`
*   **Description:** Executes a batch of orders.

#### `executeBatchWithCallback(SignedOrder[] calldata orders, bytes calldata callbackData)`

*   **Visibility:** `external`
*   **Modifiers:** `payable`, `override`, `nonReentrant`
*   **Description:** Executes a batch of orders with a callback.

#### `_prepare(ResolvedOrder[] memory orders)`

*   **Visibility:** `internal`
*   **Description:** Validates, injects fees, and transfers input tokens in preparation for an order fill. This function is called before the filler's callback and the final fill. It iterates through the resolved orders, injects protocol fees, validates the order, and transfers the input tokens from the swapper to the filler's contract (`msg.sender`).
*   **Parameters:**
    *   `orders`: The resolved orders to prepare.

#### `_fill(ResolvedOrder[] memory orders)`

*   **Visibility:** `internal`
*   **Description:** Fills a list of orders by transferring output tokens to the specified recipients. This function is called after the filler's callback (if any). It iterates through the resolved orders and transfers the output tokens from the filler's contract to the recipients. It also refunds any excess ETH to the filler.
*   **Parameters:**
    *   `orders`: The resolved orders to fill.

#### `receive()`

*   **Visibility:** `external`
*   **Modifiers:** `payable`
*   **Description:** The receive function is used to accept ETH for native output fills.

#### `_resolve(SignedOrder calldata order)`

*   **Visibility:** `internal`
*   **Modifiers:** `view`, `virtual`
*   **Description:** Resolves an order by decoding it and calculating the final inputs and outputs. This is an abstract function that must be implemented by concrete reactor contracts. It should perform any order-type-specific validation and return a generic `ResolvedOrder`.
*   **Parameters:**
    *   `order`: The signed order to resolve.
*   **Returns:**
    *   `resolvedOrder`: The resolved order with final inputs and outputs.

#### `_transferInputTokens(ResolvedOrder memory order, address to)`

*   **Visibility:** `internal`
*   **Modifiers:** `virtual`
*   **Description:** Transfers the input tokens for an order. This is an abstract function that must be implemented by concrete reactor contracts. It should handle the transfer of tokens from the swapper to the specified address.
*   **Parameters:**
    *   `order`: The resolved order to transfer tokens for.
    *   `to`: The address to transfer the input tokens to (usually the filler's contract).
