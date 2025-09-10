# ReactorEvents.sol

## Interface: `ReactorEvents`

### Description

The `ReactorEvents` interface defines the standardized events that should be emitted by all reactors in the UniswapX protocol. This interface is used to ensure that all reactors emit the same events, which is useful for off-chain indexing and for testing with tools like Forge.

### Events

#### `Fill(bytes32 indexed orderHash, address indexed filler, address indexed swapper, uint256 nonce)`

*   **Description:** Emitted when an order is filled.
*   **Parameters:**
    *   `orderHash`: The hash of the order that was filled.
    *   `filler`: The address which executed the fill.
    *   `swapper`: The swapper of the filled order.
    *   `nonce`: The nonce of the filled order.
