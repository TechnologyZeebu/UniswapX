# CurrencyLibrary.sol

## Library: `CurrencyLibrary`

### Description

The `CurrencyLibrary` library provides helper functions for handling both native ETH and ERC20 tokens. It is used to abstract away the differences between handling these two types of currencies.

### Constants

*   `NATIVE` (`address constant`): A constant representing the address for native ETH (0x00...).

### Errors

*   `NativeTransferFailed()`: Thrown when a native ETH transfer fails.

### Functions

#### `balanceOf(address currency, address addr)`

*   **Visibility:** `internal`
*   **Modifiers:** `view`
*   **Description:** Gets the balance of a currency for a given address.
*   **Parameters:**
    *   `currency`: The currency to get the balance of.
    *   `addr`: The address to get the balance of.
*   **Returns:** The balance of the currency for the address.

#### `transferFill(address currency, address recipient, uint256 amount)`

*   **Visibility:** `internal`
*   **Description:** Transfers a currency from the caller to a recipient. For native ETH, it transfers from the contract's balance. For ERC20s, it transfers from the `msg.sender`.
*   **Parameters:**
    *   `currency`: The currency to transfer.
    *   `recipient`: The recipient of the currency.
    *   `amount`: The amount of currency to transfer.

#### `transferNative(address recipient, uint256 amount)`

*   **Visibility:** `internal`
*   **Description:** Transfers native ETH to a recipient.
*   **Parameters:**
    *   `recipient`: The recipient of the currency.
    *   `amount`: The amount of currency to transfer.

#### `isNative(address currency)`

*   **Visibility:** `internal`
*   **Modifiers:** `pure`
*   **Description:** Checks if a currency is native ETH.
*   **Parameters:**
    *   `currency`: The currency to check.
*   **Returns:** `true` if the currency is native ETH, `false` otherwise.
