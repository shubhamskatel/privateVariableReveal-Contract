// SPDX-License-Identifier:MIT
pragma solidity >=0.8.0 <0.9.0;

contract Secret {
    address public owner;
    string private secretPassword;

    // Constructor
    constructor(string memory _secretPassword) {
        owner = msg.sender;
        secretPassword = _secretPassword;
    }

    // Function returns secret
    function getSecretPassword() public view returns (string memory) {
        require(owner == msg.sender, "You are not the owner!");
        return secretPassword;
    }
}
