# NonlinearDutchDecayLib.sol

## Library: `NonlinearDutchDecayLib`

### Description

The `NonlinearDutchDecayLib` library provides helper functions for handling the decay logic for V3 Dutch orders with non-linear decay curves. It can be used to calculate the decayed amount of an input or output token at a given block number.

### Errors

*   `InvalidDecayCurve()`: Thrown when the decay curve is invalid (e.g., more than 16 relative amounts).

### Structs

#### `DecayParams`

*   **Description:** This struct holds the parameters for a decay calculation.
*   **Fields:**
    *   `curve` (`NonlinearDutchDecay`): The non-linear decay curve definition.
    *   `startAmount` (`uint256`): The initial amount at the start of the decay.
    *   `decayStartBlock` (`uint256`): The absolute block number when the decay begins.
    *   `blockNumberish` (`uint256`): The current block number.
    *   `minAmount` (`uint256`): The minimum amount to decay to.
    *   `maxAmount` (`uint256`): The maximum amount to decay to.
    *   `decayFunc` (`function(uint256, uint256, uint256, int256, int256) internal pure returns (int256)`): The decay function to use.

### Functions

#### `decay(DecayParams memory params)`

*   **Visibility:** `internal`
*   **Modifiers:** `pure`
*   **Description:** Calculates the decayed amount based on the current block and the defined curve.
*   **Parameters:**
    *   `params`: The decay parameters.
*   **Returns:** The decayed amount.

#### `locateCurvePosition(NonlinearDutchDecay memory curve, uint16 currentRelativeBlock)`

*   **Visibility:** `internal`
*   **Modifiers:** `pure`
*   **Description:** Locates the current position on the decay curve based on the elapsed blocks.
*   **Parameters:**
    *   `curve`: The non-linear decay curve definition.
    *   `currentRelativeBlock`: The number of blocks elapsed since `decayStartBlock`.
*   **Returns:**
    *   `startPoint`: The relative block number of the previous curve point.
    *   `endPoint`: The relative block number of the next curve point.
    *   `startAmount`: The relative change from the initial amount at the previous curve point.
    *   `endAmount`: The relative change from the initial amount at the next curve point.

#### `decay(V3DutchOutput memory output, uint256 decayStartBlock, uint256 blockNumberish)`

*   **Visibility:** `internal`
*   **Modifiers:** `pure`
*   **Description:** Returns a decayed output using the given V3 Dutch spec and blocks.
*   **Parameters:**
    *   `output`: The V3 output to decay.
    *   `decayStartBlock`: The block to start decaying.
    *   `blockNumberish`: The block number to decay to.
*   **Returns:** A decayed `OutputToken`.

#### `decay(V3DutchOutput[] memory outputs, uint256 decayStartBlock, uint256 blockNumberish)`

*   **Visibility:** `internal`
*   **Modifiers:** `pure`
*   **Description:** Returns a decayed output array using the given V3 Dutch spec and blocks.
*   **Parameters:**
    *   `outputs`: The V3 output array to decay.
    *   `decayStartBlock`: The block to start decaying.
    *   `blockNumberish`: The block number to decay to.
*   **Returns:** A decayed `OutputToken` array.

#### `decay(V3DutchInput memory input, uint256 decayStartBlock, uint256 blockNumberish)`

*   **Visibility:** `internal`
*   **Modifiers:** `pure`
*   **Description:** Returns a decayed input using the given V3 Dutch spec and times.
*   **Parameters:**
    *   `input`: The V3 input to decay.
    *   `decayStartBlock`: The block to start decaying.
    *   `blockNumberish`: The block number to decay to.
*   **Returns:** A decayed `InputToken`.

#### `v3LinearInputDecay(uint256 startPoint, uint256 endPoint, uint256 currentPoint, int256 startAmount, int256 endAmount)`

*   **Visibility:** `internal`
*   **Modifiers:** `pure`
*   **Description:** Returns the linear interpolation between two points for a V3 input, rounding in favor of the swapper.
*   **Parameters:**
    *   `startPoint`: The start of the decay.
    *   `endPoint`: The end of the decay.
    *   `currentPoint`: The current position in the decay.
    *   `startAmount`: The amount at the start of the decay.
    *   `endAmount`: The amount at the end of the decay.
*   **Returns:** The interpolated amount.

#### `v3LinearOutputDecay(uint256 startPoint, uint256 endPoint, uint256 currentPoint, int256 startAmount, int256 endAmount)`

*   **Visibility:** `internal`
*   **Modifiers:** `pure`
*   **Description:** Returns the linear interpolation between two points for a V3 output, rounding in favor of the swapper.
*   **Parameters:**
    *   `startPoint`: The start of the decay.
    *   `endPoint`: The end of the decay.
    *   `currentPoint`: The current position in the decay.
    *   `startAmount`: The amount at the start of the decay.
    *   `endAmount`: The amount at the end of the decay.
*   **Returns:** The interpolated amount.
