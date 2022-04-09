// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./TeamDAO.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract DaoFactory is Ownable{

    enum ProposalStatus {
        DRAFTING,
        VOTING,
        ACCEPTED,
        FINISHED
    }

    struct Proposal{
        uint pid;
        uint yesCnt;
        uint noCnt;
        ProposalStatus status;
        mapping(address => bool) voted;
        bytes32 description;
    }

    uint pCnt; // proposal count
    mapping(uint => Proposal) proposals;

    constructor(){
        pCnt = 0;
    }

    modifier validPID(uint _pid){
        require(_pid<pCnt, "INVALID_PID");
        _;
    }

    function createTeamDao(bytes32 _title, bytes32 _description, address[] memory _members) public returns(TeamDAO){
        TeamDAO newCont = new TeamDAO(address(this), _title, _description, _members);
        return newCont;
    }

    function editDaoDetails(TeamDAO _dao, bytes32 _title, bytes32 _description) public onlyOwner {
        require(_dao.admin==address(this), "NOT_ADMIN");
        _dao.editDetails(_title, _description);
    }

    function setAdmin(TeamDAO _dao, address _newAdmin) public onlyOwner {
        require(_dao.admin==address(this), "NOT_ADMIN");
        _dao.setAdmin(_newAdmin);
    }

    function addMemberTo(TeamDAO _dao, address _newMember) public onlyOwner {
        require(_dao.admin==address(this), "NOT_ADMIN");
        _dao.addMember(_newMember);
    }

    function rmMemberFrom(TeamDAO _dao, address _deserter) public onlyOwner {
        require(_dao.admin==address(this), "NOT_ADMIN");
        _dao.rmMember(_deserter);
    }

    function createNewProp(bytes32 _desc) public {
        Proposal storage newProp = proposals[pCnt];
        newProp.description = _desc;
        newProp.noCnt=0;
        newProp.yesCnt=0;
        newProp.pid=pCnt;
        newProp.status=ProposalStatus.DRAFTING;
        
        pCnt++;
    }

    function getProposalDetails(uint _pid) public view validPID(_pid) returns(uint, uint, uint, ProposalStatus, bytes32) {
        return (proposals[_pid].pid, proposals[_pid].yesCnt, proposals[_pid].noCnt, proposals[_pid].status, proposals[_pid].description);
    }

    function vote(uint _pid, bool _userVote) public validPID(_pid) {
        require(proposals[_pid].voted[msg.sender]==false, "USER_VOTED");
        require(proposals[_pid].status==ProposalStatus.VOTING, "VOTING_OFF");
        
        proposals[_pid].voted[msg.sender]=true;
        if(_userVote==true){
            proposals[_pid].yesCnt++;
        }else{
            proposals[_pid].noCnt++;
        }
    }


      
}

// BidService(ServiceContractAddress)
// GetTeamMemberAddress()
// ListProposalDetails()
// ExecuteProposal

// ServiceOwnerAcceptBid(ServiceContractAddress)