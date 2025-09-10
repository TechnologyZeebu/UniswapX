# ReactorStructs.sol

This file defines the core data structures used in the UniswapX protocol.

## Structs

### `OrderInfo`

*   **Description:** This struct contains generic information about an order. It is intended to be included as the first field in any concrete order type.
*   **Fields:**
    *   `reactor` (`IReactor`): The address of the reactor that this order is targeting. This is a critical field as it ensures that the swapper's signature commits to a specific reactor that they trust to fill their order properly.
    *   `swapper` (`address`): The address of the user who created the order. This is included to ensure that order hashes are unique by swapper.
    *   `nonce` (`uint256`): The nonce of the order, which allows for signature replay protection and cancellation.
    *   `deadline` (`uint256`): The timestamp after which this order is no longer valid.
    *   `additionalValidationContract` (`IValidationCallback`): An optional custom validation contract that can be used to add extra validation logic to the order.
    *   `additionalValidationData` (`bytes`): The encoded validation parameters for the `additionalValidationContract`.

### `InputToken`

*   **Description:** This struct represents the tokens that need to be sent from the swapper to satisfy an order.
*   **Fields:**
    *   `token` (`ERC20`): The ERC20 token to be sent.
    *   `amount` (`uint256`): The amount of the token to be sent.
    *   `maxAmount` (`uint256`): The maximum amount of the token that can be sent. This is needed for Dutch orders with decaying inputs.

### `OutputToken`

*   **Description:** This struct represents the tokens that need to be received by the recipient to satisfy an order.
*   **Fields:**
    *   `token` (`address`): The address of the token to be received.
    *   `amount` (`uint256`): The amount of the token to be received.
    *   `recipient` (`address`): The address of the recipient of the tokens.

### `ResolvedOrder`

*   **Description:** This struct represents a generic concrete order that specifies the exact tokens that need to be sent and received.
*   **Fields:**
    *   `info` (`OrderInfo`): The generic order information.
    *   `input` (`InputToken`): The input token for the order.
    *   `outputs` (`OutputToken[]`): An array of output tokens for the order.
    *   `sig` (`bytes`): The swapper's signature for the order.
    *   `hash` (`bytes32`): The hash of the order.

### `SignedOrder`

*   **Description:** This struct is an external-facing struct that includes a generic encoded order and the swapper's signature. The `order` bytes are parsed and mapped to a `ResolvedOrder` in the concrete reactor contract.
*   **Fields:**
    *   `order` (`bytes`): The encoded order.
    *   `sig` (`bytes`): The swapper's signature.
