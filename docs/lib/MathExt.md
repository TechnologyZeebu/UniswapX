# MathExt.sol

## Library: `MathExt`

### Description

The `MathExt` library provides extended math functions that are not available in the standard OpenZeppelin `Math` library.

### Functions

#### `sub(uint256 a, int256 b)`

*   **Visibility:** `internal`
*   **Modifiers:** `pure`
*   **Description:** Subtracts a signed integer `b` from an unsigned integer `a`.
*   **Parameters:**
    *   `a`: The unsigned integer to subtract from.
    *   `b`: The signed integer to subtract.
*   **Returns:** The result of the subtraction.

#### `boundedAdd(uint256 a, int256 b, uint256 min, uint256 max)`

*   **Visibility:** `internal`
*   **Modifiers:** `pure`
*   **Description:** Adds a signed integer `b` to an unsigned integer `a`, ensuring the result is within the specified bounds.
*   **Parameters:**
    *   `a`: The base unsigned integer.
    *   `b`: The signed integer to be added.
    *   `min`: The minimum bound for the result.
    *   `max`: The maximum bound for the result.
*   **Returns:** The result of the bounded addition.

#### `boundedSub(uint256 a, int256 b, uint256 min, uint256 max)`

*   **Visibility:** `internal`
*   **Modifiers:** `pure`
*   **Description:** Subtracts a signed integer `b` from an unsigned integer `a`, ensuring the result is within the specified bounds.
*   **Parameters:**
    *   `a`: The base unsigned integer.
    *   `b`: The signed integer to be subtracted.
    *   `min`: The minimum bound for the result.
    *   `max`: The maximum bound for the result.
*   **Returns:** The result of the bounded subtraction.

#### `sub(uint256 a, uint256 b)`

*   **Visibility:** `internal`
*   **Modifiers:** `pure`
*   **Description:** Subtracts a `uint256` value `b` from another `uint256` value `a`, returning the result as an `int256`.
*   **Parameters:**
    *   `a`: The unsigned integer to subtract from.
    *   `b`: The unsigned integer to subtract.
*   **Returns:** The result of the subtraction as a signed integer.

#### `bound(uint256 value, uint256 min, uint256 max)`

*   **Visibility:** `internal`
*   **Modifiers:** `pure`
*   **Description:** Bounds a uint value between a minimum and maximum value.
*   **Parameters:**
    *   `value`: The value to be bounded.
    *   `min`: The minimum value allowed.
    *   `max`: The maximum value allowed.
*   **Returns:** The bounded value.
