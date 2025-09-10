# Uint16Array.sol

## Type: `Uint16Array`

### Description

The `Uint16Array` type is a custom type that represents an array of up to 16 `uint16` values packed into a single `uint256`. This is a gas optimization technique that can be used to store small arrays more efficiently.

### Errors

*   `IndexOutOfBounds()`: Thrown when trying to access an element at an index greater than or equal to 16.
*   `InvalidArrLength()`: Thrown when trying to create a `Uint16Array` from a `uint16` array with more than 16 elements.

### Functions

#### `toUint256(uint16[] memory inputArray)`

*   **Visibility:** `public`
*   **Modifiers:** `pure`
*   **Description:** Converts a `uint16` array to a `uint256`.
*   **Parameters:**
    *   `inputArray`: The `uint16` array to convert.
*   **Returns:** The `uint256` representation of the array.

#### `fromUnderlying(uint256 value)`

*   **Visibility:** `public`
*   **Modifiers:** `pure`
*   **Description:** Converts a `uint256` to a `Uint16Array`.
*   **Parameters:**
    *   `value`: The `uint256` to convert.
*   **Returns:** The `Uint16Array` representation of the `uint256`.

#### `toUint16Array(uint16[] memory inputArray)`

*   **Visibility:** `public`
*   **Modifiers:** `pure`
*   **Description:** A helper function for creating a packed `Uint16Array` from a `uint16` array.
*   **Parameters:**
    *   `inputArray`: The `uint16` array to convert.
*   **Returns:** The `Uint16Array` representation of the array.

## Library: `Uint16ArrayLibrary`

### Description

The `Uint16ArrayLibrary` library provides a helper function for working with `Uint16Array` types.

### Functions

#### `getElement(Uint16Array packedData, uint256 n)`

*   **Visibility:** `internal`
*   **Modifiers:** `pure`
*   **Description:** Retrieves the nth `uint16` value from a packed `Uint16Array`.
*   **Parameters:**
    *   `packedData`: The `Uint16Array` to retrieve the element from.
    *   `n`: The index of the element to retrieve.
*   **Returns:** The `uint16` value at the specified index.
