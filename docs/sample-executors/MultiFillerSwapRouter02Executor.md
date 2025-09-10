# MultiFillerSwapRouter02Executor.sol

## Contract: `MultiFillerSwapRouter02Executor`

**Implements:** `IReactorCallback`, `Owned`

### Description

The `MultiFillerSwapRouter02Executor` contract is a sample fill contract that uses `SwapRouter02` to execute trades. It allows multiple whitelisted fillers to use the same executor contract.

### State Variables

*   `swapRouter02` (`ISwapRouter02 private immutable`): The `SwapRouter02` contract address.
*   `whitelistedCallers` (`mapping(address => bool) `): A mapping of whitelisted filler addresses.
*   `reactor` (`IReactor public`): The reactor contract address.
*   `weth` (`WETH private immutable`): The WETH contract address.

### Modifiers

*   `onlyWhitelistedCaller()`: Throws if the caller is not whitelisted.
*   `onlyReactor()`: Throws if `msg.sender` is not the reactor.

### Errors

*   `CallerNotWhitelisted()`: Thrown if `reactorCallback` is called with a non-whitelisted filler.
*   `MsgSenderNotReactor()`: Thrown if `reactorCallback` is called by an address other than the reactor.

### Events

*   `ReactorChanged(address newReactor, address oldReactor)`: Emitted when the reactor contract address is changed.

### Functions

#### `constructor(address[] memory _whitelistedCallers, IReactor _reactor, address _owner, ISwapRouter02 _swapRouter02)`

*   **Visibility:** `public`
*   **Description:** Sets the initial whitelisted callers, reactor, owner, and `SwapRouter02` addresses.

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

#### `withdrawERC20(ERC20 token, address to)`

*   **Visibility:** `external`
*   **Modifiers:** `onlyOwner`
*   **Description:** Transfers the entire balance of an ERC20 token in this contract to a recipient.

#### `updateReactor(IReactor _reactor)`

*   **Visibility:** `external`
*   **Modifiers:** `onlyOwner`
*   **Description:** Updates the reactor contract address.

#### `receive()`

*   **Visibility:** `external`
*   **Modifiers:** `payable`
*   **Description:** Necessary for this contract to receive ETH when calling `unwrapWETH()`.
