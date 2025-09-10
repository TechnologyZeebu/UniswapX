# Permit2Lib.sol

## Library: `Permit2Lib`

### Description

The `Permit2Lib` library provides helper functions for handling some Permit2-specific encoding. It is used to convert a `ResolvedOrder` into the structs required by the Permit2 contract.

### Functions

#### `toPermit(ResolvedOrder memory order)`

*   **Visibility:** `internal`
*   **Modifiers:** `pure`
*   **Description:** Converts a `ResolvedOrder` into a `PermitTransferFrom` struct, which is used by the Permit2 contract to authorize a token transfer.
*   **Parameters:**
    *   `order`: The `ResolvedOrder` to convert.
*   **Returns:** A `PermitTransferFrom` struct.

#### `transferDetails(ResolvedOrder memory order, address to)`

*   **Visibility:** `internal`
*   **Modifiers:** `pure`
*   **Description:** Converts a `ResolvedOrder` into a `SignatureTransferDetails` struct, which is used by the Permit2 contract to specify the details of a token transfer.
*   **Parameters:**
    *   `order`: The `ResolvedOrder` to convert.
    *   `to`: The recipient of the token transfer.
*   **Returns:** A `SignatureTransferDetails` struct.
