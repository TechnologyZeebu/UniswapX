# ProtocolFees.sol

## Abstract Contract: `ProtocolFees`

**Inherits from:** `Owned`

### Description

The `ProtocolFees` contract is an abstract contract that handles the logic for protocol fees. It is inherited by `BaseReactor` and provides the functionality to inject fees into an order. The fees are determined by a `feeController` contract, which can be set by the owner.

### State Variables

*   `BPS` (`uint256 private constant`): Basis points, equal to 10,000.
*   `MAX_FEE_BPS` (`uint256 private constant`): The maximum fee in basis points, set to 5 (0.05%).
*   `feeController` (`IProtocolFeeController public`): The address of the fee controller contract.

### Errors

*   `DuplicateFeeOutput(address duplicateToken)`: Thrown if two fee outputs have the same token.
*   `FeeTooLarge(address token, uint256 amount, address recipient)`: Thrown if a given fee output is greater than `MAX_FEE_BPS` of the order outputs.
*   `InvalidFeeToken(address feeToken)`: Thrown if a fee output token does not have a corresponding non-fee output or is not the input token.
*   `InputAndOutputFees()`: Thrown if fees are taken on both inputs and outputs.

### Events

*   `ProtocolFeeControllerSet(address oldFeeController, address newFeeController)`: Emitted when the protocol fee controller is set.

### Functions

#### `constructor(address _owner)`

*   **Visibility:** `public`
*   **Description:** Sets the owner of the contract.

#### `_injectFees(ResolvedOrder memory order)`

*   **Visibility:** `internal`
*   **Modifiers:** `view`
*   **Description:** Injects fees into an order. This function modifies the order's outputs to include protocol fee outputs. It gets the fee outputs from the `feeController` and adds them to the order's outputs. It also performs several checks to ensure that the fees are valid.
*   **Parameters:**
    *   `order`: The resolved order to inject fees into.

#### `setProtocolFeeController(address _newFeeController)`

*   **Visibility:** `external`
*   **Modifiers:** `onlyOwner`
*   **Description:** Sets the protocol fee controller. Only callable by the owner.
*   **Parameters:**
    *   `_newFeeController`: The new fee controller address.
