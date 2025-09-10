# DutchDecayLib.sol

## Library: `DutchDecayLib`

### Description

The `DutchDecayLib` library provides helper functions for handling the decay logic for Dutch orders. It can be used to calculate the decayed amount of an input or output token at a given time.

### Errors

*   `IncorrectAmounts()`: Thrown if the decay direction is incorrect. For `DutchInput`, `startAmount` must be less than or equal to `endAmount`. For `DutchOutput`, `startAmount` must be greater than or equal to `endAmount`.
*   `EndTimeBeforeStartTime()`: Thrown if the `decayEndTime` of an order is before `decayStartTime`.

### Functions

#### `decay(uint256 startAmount, uint256 endAmount, uint256 decayStartTime, uint256 decayEndTime)`

*   **Visibility:** `internal`
*   **Modifiers:** `view`
*   **Description:** Calculates an amount using linear decay over time from `decayStartTime` to `decayEndTime`. It handles both positive and negative decay depending on `startAmount` and `endAmount`.
*   **Parameters:**
    *   `startAmount`: The amount of tokens at `decayStartTime`.
    *   `endAmount`: The amount of tokens at `decayEndTime`.
    *   `decayStartTime`: The time to start decaying linearly.
    *   `decayEndTime`: The time to stop decaying linearly.
*   **Returns:** The decayed amount.

#### `linearDecay(uint256 startPoint, uint256 endPoint, uint256 currentPoint, uint256 startAmount, uint256 endAmount)`

*   **Visibility:** `internal`
*   **Modifiers:** `pure`
*   **Description:** Returns the linear interpolation between two points. This is an overloaded function that works with `uint256` amounts.
*   **Parameters:**
    *   `startPoint`: The start of the decay.
    *   `endPoint`: The end of the decay.
    *   `currentPoint`: The current position in the decay.
    *   `startAmount`: The amount at the start of the decay.
    *   `endAmount`: The amount at the end of the decay.
*   **Returns:** The interpolated amount.

#### `linearDecay(uint256 startPoint, uint256 endPoint, uint256 currentPoint, int256 startAmount, int256 endAmount)`

*   **Visibility:** `internal`
*   **Modifiers:** `pure`
*   **Description:** Returns the linear interpolation between two points. This is an overloaded function that works with `int256` amounts to handle both positive and negative decay.
*   **Parameters:**
    *   `startPoint`: The start of the decay.
    *   `endPoint`: The end of the decay.
    *   `currentPoint`: The current position in the decay.
    *   `startAmount`: The amount at the start of the decay.
    *   `endAmount`: The amount at the end of the decay.
*   **Returns:** The interpolated amount.

#### `decay(DutchOutput memory output, uint256 decayStartTime, uint256 decayEndTime)`

*   **Visibility:** `internal`
*   **Modifiers:** `view`
*   **Description:** Returns a decayed output using the given Dutch spec and times.
*   **Parameters:**
    *   `output`: The output to decay.
    *   `decayStartTime`: The time to start decaying.
    *   `decayEndTime`: The time to end decaying.
*   **Returns:** A decayed `OutputToken`.

#### `decay(DutchOutput[] memory outputs, uint256 decayStartTime, uint256 decayEndTime)`

*   **Visibility:** `internal`
*   **Modifiers:** `view`
*   **Description:** Returns a decayed output array using the given Dutch spec and times.
*   **Parameters:**
    *   `outputs`: The output array to decay.
    *   `decayStartTime`: The time to start decaying.
    *   `decayEndTime`: The time to end decaying.
*   **Returns:** A decayed `OutputToken` array.

#### `decay(DutchInput memory input, uint256 decayStartTime, uint256 decayEndTime)`

*   **Visibility:** `internal`
*   **Modifiers:** `view`
*   **Description:** Returns a decayed input using the given Dutch spec and times.
*   **Parameters:**
    *   `input`: The input to decay.
    *   `decayStartTime`: The time to start decaying.
    *   `decayEndTime`: The time to end decaying.
*   **Returns:** A decayed `InputToken`.
