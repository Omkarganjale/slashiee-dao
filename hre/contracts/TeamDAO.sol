// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
contract TeamDAO{

    bytes32 public title;
    bytes32 public description;

    mapping(address=>bool) public members;
    address public admin;

    constructor(address _admin, bytes32 _title, bytes32 _description, address[] memory _members)  {
        title = _title;
        description = _description;
        uint sz = _members.length;
        for(uint i=0; i<sz; i++){
            members[_members[i]]=true;
        }
        setAdmin(_admin);
    }

    modifier onlyAdmin(){
        require(address(msg.sender)==admin, "NOT_ADMIN");
        _;
    }

    function editDetails(bytes32 _title, bytes32 _description) public onlyAdmin {
        title = _title;
        description = _description;
    }

    function setAdmin(address _newAdmin) public onlyAdmin {
        admin = _newAdmin;
    }

    function addMember(address _newMember) public onlyAdmin {
        members[_newMember]=true;
    }

    function rmMember(address _deserter) public onlyAdmin {
        members[_deserter]=false;
    }

}