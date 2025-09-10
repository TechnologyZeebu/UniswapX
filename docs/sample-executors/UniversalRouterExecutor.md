# UniversalRouterExecutor.sol

## Contract: `UniversalRouterExecutor`

**Implements:** `IReactorCallback`, `Owned`

### Description

The `UniversalRouterExecutor` contract is a sample fill contract that uses the Universal Router to execute trades. It allows multiple whitelisted fillers to use the same executor contract.

### State Variables

*   `universalRouter` (`address public immutable`): The Universal Router contract address.
*   `whitelistedCallers` (`mapping(address => bool)`): A mapping of whitelisted filler addresses.
*   `reactor` (`IReactor public immutable`): The reactor contract address.
*   `permit2` (`IPermit2 public immutable`): The Permit2 contract address.

### Modifiers

*   `onlyWhitelistedCaller()`: Throws if the caller is not whitelisted.
*   `onlyReactor()`: Throws if `msg.sender` is not the reactor.

### Errors

*   `CallerNotWhitelisted()`: Thrown if `reactorCallback` is called with a non-whitelisted filler.
*   `MsgSenderNotReactor()`: Thrown if `reactorCallback` is called by an address other than the reactor.

### Functions

#### `constructor(address[] memory _whitelistedCallers, IReactor _reactor, address _owner, address _universalRouter, IPermit2 _permit2)`

*   **Visibility:** `public`
*   **Description:** Sets the initial whitelisted callers, reactor, owner, Universal Router, and Permit2 addresses.

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
*   **Description:** Fills UniswapX orders using the Universal Router.
*   **Parameters:**
    *   `callbackData`: The encoded callback data, which includes tokens to approve and execution data for the Universal Router.

#### `withdrawETH(address recipient)`

*   **Visibility:** `external`
*   **Modifiers:** `onlyOwner`
*   **Description:** Transfers all ETH in this contract to the recipient.

#### `withdrawERC20(ERC20 token, address to)`

*   **Visibility:** `external`
*   **Modifiers:** `onlyOwner`
*   **Description:** Transfers the entire balance of an ERC20 token in this contract to a recipient.

#### `receive()`

*   **Visibility:** `external`
*   **Modifiers:** `payable`
*   **Description:** Necessary for this contract to receive ETH.
