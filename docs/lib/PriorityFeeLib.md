# PriorityFeeLib.sol

## Library: `PriorityFeeLib`

### Description

The `PriorityFeeLib` library provides helper functions for handling priority fees in priority orders. It is used to scale the input and output amounts of an order based on the current priority fee.

### Constants

*   `MPS` (`uint256 constant`): Milli-basis points, equal to 10,000,000. This is used to denominate priority fees.

### Functions

#### `scale(PriorityInput memory input, uint256 priorityFee)`

*   **Visibility:** `internal`
*   **Modifiers:** `pure`
*   **Description:** Scales an input based on the current priority fee. The amount is scaled down to favor the swapper.
*   **Parameters:**
    *   `input`: The input to scale.
    *   `priorityFee`: The current priority fee in wei.
*   **Returns:** A scaled `InputToken`.

#### `scale(PriorityOutput memory output, uint256 priorityFee)`

*   **Visibility:** `internal`
*   **Modifiers:** `pure`
*   **Description:** Scales an output based on the current priority fee. The amount is scaled up to favor the swapper.
*   **Parameters:**
    *   `output`: The output to scale.
    *   `priorityFee`: The current priority fee in wei.
*   **Returns:** A scaled `OutputToken`.

#### `scale(PriorityOutput[] memory outputs, uint256 priorityFee)`

*   **Visibility:** `internal`
*   **Modifiers:** `pure`
*   **Description:** Scales an array of outputs based on the current priority fee.
*   **Parameters:**
    *   `outputs`: The array of outputs to scale.
    *   `priorityFee`: The current priority fee in wei.
*   **Returns:** An array of scaled `OutputToken`s.
