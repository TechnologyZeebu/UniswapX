# CosignerLib.sol

## Library: `CosignerLib`

### Description

The `CosignerLib` library provides a helper function for verifying cosignatures on orders. A cosignature is a second signature on an order, in addition to the swapper's signature. It can be used to implement features like conditional orders or orders that can only be filled by a specific filler.

### Errors

*   `InvalidCosignature()`: Thrown when an order's cosignature does not match the expected cosigner.

### Functions

#### `verify(address cosigner, bytes32 data, bytes memory cosignature)`

*   **Visibility:** `internal`
*   **Modifiers:** `pure`
*   **Description:** Verifies that a cosignature is valid for a given cosigner and data.
*   **Parameters:**
    *   `cosigner`: The address of the cosigner.
    *   `data`: The digest of `(orderHash || cosignerData)`.
    *   `cosignature`: The cosigner's signature over the data.
