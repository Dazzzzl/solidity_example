// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

import "hardhat/console.sol";


contract Enum {
    enum Status {
        Pending,
        Shipped,
        Accept,
        Reject,
        Cancelled
    }

    Status public status;

    function get() public view returns (Status) {
        return status;
    }

    function set(Status _status) public {
        status = _status;
    }

    function cancel() public {
        status = Status.Cancelled;
    }

    function reset() public {
        delete status;
    }
}