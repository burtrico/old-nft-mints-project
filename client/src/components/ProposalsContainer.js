import React, { useState, useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'
import ProposalsList from './ProposalsList'
import ProposalDetail from './ProposalDetail'

function ProposalsContainer({currentUser}) {
  const [proposals, setProposals] = useState([])
  // const [votePlaced, setVotePlaced] = useState(false)
  // const [groups, setGroups] = useState([])
  
  useEffect(() => {
    fetch(`/api/proposals`, {
      credentials: 'include'
    })
      .then(res => res.json())
      .then(proposals => {
        setProposals(proposals)
      console.log(proposals)
      })
    // fetch(`/api/groups`, {
    //   credentials: 'include'
    // })
    //   .then(res => res.json())
    //   .then(groups => setGroups(groups))
  },[])

  // const removeRsvpToProposal = (proposalId) => {
  //   const proposal = proposals.find(proposal => proposal.id === proposalId)
  //   return fetch(`/api/user_proposals/${proposal.user_proposal.id}`, {
  //     method: "DELETE",
  //     credentials: 'include'
  //   })
  //     .then(res => {
  //       if (res.ok) {
  //         // if the Proposal is the one we just removed an rsvp 
  //         // for, set its user_Proposal property in state to 
  //         // undefined; If not, leave the Proposal as it is
  //         const updatedProposals = proposals.map((proposal) => {
  //           if (proposal.id === proposalId) {
  //             return {
  //               ...proposal,
  //               user_proposal: undefined
  //             }
  //           } else {
  //             return proposal
  //           }
  //         })
  //         setProposals(updatedProposals)
  //       }
  //     })
  // }

  const cancelProposal = (proposalId) => {
    return fetch(`/api/Proposals/${proposalId}`, {
      method: "DELETE",
      credentials: 'include'
    })
      .then(res => {
        if (res.ok) {
          const updatedProposals = proposals.filter(proposal => proposal.id !== proposalId)
          setProposals(updatedProposals)
        }
      })
  }

  const voteYesProposal = (proposalId) => {
    return fetch('/api/votes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify({
        user_id: currentUser.id,
        proposal_id: proposalId,
        // Need to change this later:
        token: "lyra",
        count: 17000,
        vote_to_approve: true
      })
    })
      .then(res => {
        if (res.ok) {
          return res.json()
        } else {
          return res.json().then(errors => Promise.reject(errors))
        }
      })
      .then(userVote => {
        // if the Proposal is the one we just voted on,
        // add a user_proposal property in state and set
        // it to the userProposal; if not, leave it as is
        const updatedProposals = proposals.map((proposal) => {

          if (proposal.id === proposalId) {
            return {
              ...proposal,
              vote: userVote
            }
          } else {
            return proposal
          }
        
        
      })
        // setVotePlaced(true)
        console.log(userVote)
        setProposals(updatedProposals)
      
  })
  }



  const voteNoProposal = (proposalId) => {
    return fetch('/api/votes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify({
        user_id: currentUser.id,
        proposal_id: proposalId,
        // Need to change this later:
        token: "lyra",
        count: 17000,
        vote_to_approve: false
      })
    })
      .then(res => {
        if (res.ok) {
          return res.json()
        } else {
          return res.json().then(errors => Promise.reject(errors))
        }
      })
      .then(userVote => {
        // if the Proposal is the one we just voted on,
        // add a user_proposal property in state and set
        // it to the userProposal; if not, leave it as is
        const updatedProposals = proposals.map((proposal) => {
          if (proposal.id === proposalId) {
            return {
              ...proposal,
              vote: userVote
            }
          } else {
            return proposal
          }
        })
        console.log(userVote)
        setProposals(updatedProposals)
      })
  }

  const createProposal = (formData) => {
    return fetch("/api/proposals", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      credentials: 'include',
      body: JSON.stringify(formData)
    })
      .then(res => {
        if (res.ok) {
          return res.json()
        } else {
          return res.json().then(errors => Promise.reject(errors))
        }
      })
      .then(proposal => {
        setProposals(proposals.concat(proposal))
      })
  }

  return (
    <div>
      {/* <Switch> */}
        <Route
          exact
          path="/api/proposals"
        >
          <ProposalsList
            Proposals={proposals}
            currentUser={currentUser}
            cancelProposal={cancelProposal}
            // removeRsvpToProposal={removeRsvpToProposal}
            createProposal={createProposal}
            updateProposal={createProposal}
          />
        </Route>
        <Route
          exact
          path="/api/proposals/:id"
          render={({ match }) => {
            return <ProposalDetail
              currentUser={currentUser}
              ProposalId={match.params.id}
              cancelProposal={cancelProposal}
              voteYesProposal={voteYesProposal}
              voteNoProposal={voteNoProposal}
            />
          }}
        />
      {/* </Switch> */}
    </div>
  )
}

export default ProposalsContainer
