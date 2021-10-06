import React, { useState, useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'
import ProposalsList from './ProposalsList'
import ProposalDetail from './ProposalDetail'

function ProposalsContainer() {
  const [proposals, setProposals] = useState([])
  const [groups, setGroups] = useState([])
  
  useEffect(() => {
    fetch(`/proposals`, {
      credentials: 'include'
    })
      .then(res => res.json())
      .then(proposals => setProposals(proposals))
    fetch(`/groups`, {
      credentials: 'include'
    })
      .then(res => res.json())
      .then(groups => setGroups(groups))
  },[])

  const removeRsvpToProposal = (proposalId) => {
    const proposal = proposals.find(proposal => proposal.id === proposalId)
    return fetch(`/user_proposals/${proposal.user_proposal.id}`, {
      method: "DELETE",
      credentials: 'include'
    })
      .then(res => {
        if (res.ok) {
          // if the Proposal is the one we just removed an rsvp 
          // for, set its user_Proposal property in state to 
          // undefined; If not, leave the Proposal as it is
          const updatedProposals = proposals.map((proposal) => {
            if (proposal.id === proposalId) {
              return {
                ...proposal,
                user_proposal: undefined
              }
            } else {
              return proposal
            }
          })
          setProposals(updatedProposals)
        }
      })
  }

  const cancelProposal = (proposalId) => {
    return fetch(`/Proposals/${proposalId}`, {
      method: "DELETE",
      credentials: 'include'
    })
      .then(res => {
        if (res.ok) {
          const updatedProposals = proposals.filter(proposal => proposal.id !== ProposalId)
          setProposals(updatedProposals)
        }
      })
  }
  const rsvpToProposal = (proposalId) => {
    return fetch('/user_proposals', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify({
        Proposal_id: proposalId
      })
    })
      .then(res => {
        if (res.ok) {
          return res.json()
        } else {
          return res.json().then(errors => Promise.reject(errors))
        }
      })
      .then(userProposal => {
        // if the Proposal is the one we just rsvp'd to
        // add a user_Proposal property in state and set
        // it to the userProposal; if not, leave it as is
        const updatedProposals = proposals.map((proposal) => {
          if (proposal.id === proposalId) {
            return {
              ...proposal,
              user_proposal: userProposal
            }
          } else {
            return proposal
          }
        })
        setProposals(updatedProposals)
      })
  }

  const createProposal = (formData) => {
    return fetch("/proposals", {
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
      <Switch>
        <Route
          exact
          path="/proposals"
        >
          <ProposalsList
            Proposals={proposals}
            groups={groups}
            cancelProposal={cancelProposal}
            removeRsvpToProposal={removeRsvpToProposal}
            rsvpToProposal={rsvpToProposal}
            createProposal={createProposal}
          />
        </Route>
        <Route
          exact
          path="/proposals/:id"
          render={({ match }) => {
            return <ProposalDetail
              ProposalId={match.params.id}
              cancelProposal={cancelProposal}
              removeRsvpToProposal={removeRsvpToProposal}
              rsvpToProposal={rsvpToProposal}
            />
          }}
        />
      </Switch>
    </div>
  )
}

export default ProposalsContainer
