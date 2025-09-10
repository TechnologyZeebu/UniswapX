# SwapRouter02Executor.sol

## Contract: `SwapRouter02Executor`

**Implements:** `IReactorCallback`, `Owned`

### Description

The `SwapRouter02Executor` contract is a sample fill contract that uses `SwapRouter02` to execute trades. It allows a single whitelisted filler to use the executor contract.

### State Variables

*   `swapRouter02` (`ISwapRouter02 private immutable`): The `SwapRouter02` contract address.
*   `whitelistedCaller` (`address private immutable`): The whitelisted filler address.
*   `reactor` (`IReactor private immutable`): The reactor contract address.
*   `weth` (`WETH private immutable`): The WETH contract address.

### Modifiers

*   `onlyWhitelistedCaller()`: Throws if the caller is not the whitelisted filler.
*   `onlyReactor()`: Throws if `msg.sender` is not the reactor.

### Errors

*   `CallerNotWhitelisted()`: Thrown if `reactorCallback` is called with a non-whitelisted filler.
*   `MsgSenderNotReactor()`: Thrown if `reactorCallback` is called by an address other than the reactor.

### Functions

#### `constructor(address _whitelistedCaller, IReactor _reactor, address _owner, ISwapRouter02 _swapRouter02)`

*   **Visibility:** `public`
*   **Description:** Sets the initial whitelisted caller, reactor, owner, and `SwapRouter02` addresses.

#### `execute(SignedOrder calldata order, bytes calldata callbackData)`

*   **Visibility:** `external`
*   **Modifiers:** `onlyWhitelistedCaller`
*   **Description:** Executes a single order by calling `executeWithCallback` on the reactor.

#### `executeBatch(SignedOrder[] calldata orders, bytes calldata callbackData)`

*   **Visibility:** `external`
*   **Modifiers:** `onlyWhitelistedCaller`
*   **Description:** Executes a batch of orders by calling `executeBatchWithCallback` on the reactor.

#### `reactorCallback(ResolvedOrder[] calldata, bytes calldata callbackData)`

*   **Visibility:** `external`
*   **Modifiers:** `onlyReactor`
*   **Description:** Fills UniswapX orders using `SwapRouter02`.
*   **Parameters:**
    *   `callbackData`: The encoded callback data, which includes tokens to approve and multicall data for `SwapRouter02`.

#### `multicall(ERC20[] calldata tokensToApprove, bytes[] calldata multicallData)`

*   **Visibility:** `external`
*   **Modifiers:** `onlyOwner`
*   **Description:** Can be used to convert ERC20s to ETH that remains in this contract.

#### `unwrapWETH(address recipient)`

*   **Visibility:** `external`
*   **Modifiers:** `onlyOwner`
*   **Description:** Unwraps the contract's WETH9 balance and sends it to the recipient as ETH.

#### `withdrawETH(address recipient)`

*   **Visibility:** `external`
*   **Modifiers:** `onlyOwner`
*   **Description:** Transfers all ETH in this contract to the recipient.

#### `receive()`

*   **Visibility:** `external`
*   **Modifiers:** `payable`
*   **Description:** Necessary for this contract to receive ETH when calling `unwrapWETH()`.
