import React, { useState, useEffect, useCallback } from 'react'
import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom'

function ProposalDetail({ proposalId, removeRsvpToProposal, rsvpToProposal, cancelProposal }) {
  const [proposal, setProposal] = useState(null)
  const history = useHistory();

  const fetchProposalCallback = useCallback(
    () => {
      fetch(`/proposals/${proposalId}`, {
        credentials: 'include'
      })
        .then(res => res.json())
        .then(proposal => setProposal(proposal))
    },
    [proposalId],
  )

  useEffect(() => {
    fetchProposalCallback()
  }, [fetchProposalCallback])


  const cancelProposalButton = (Proposal) => {
    if (Proposal.user_is_creator) {
      return (
        <p>
          <button
            onClick={handleCancel}>Cancel Proposal</button>
        </p>
      )
    }
  }

  const handleCancel = (e) => {
    cancelProposal(proposal.id);
    history.push('/proposals')
  }

  const rsvpButton = (proposal) => {
    if (proposal.user_Proposal) {
      return (
        <button
          onClick={() => {
            removeRsvpToProposal(proposal.id).then(() => fetchProposalCallback())
          }
        }>
          Cancel RSVP
        </button >
      )
    } else {
      return (
        <button
          onClick={() => {
            rsvpToProposal(proposal.id).then(() => fetchProposalCallback())
          }
        }>
          RSVP for Proposal
        </button>
      )
    }
  }
  
  if(!proposal) { return <div></div>}
  return (
    <div>
      <h1>{proposal.title}</h1>
      {cancelProposalButton(proposal)}
      <small>Created by {proposal.creator} for <Link to={`/groups/${proposal.group.id}`}>{proposal.group.name}</Link></small>
      <p>{proposal.description}</p>
      <p>{proposal.time}</p>
      <p>Location: {proposal.location}</p>
      <p>{rsvpButton(proposal)}</p>
      <ul>
        {proposal.attendees.map(attendee => (
          <li>{attendee.username}</li>
        ))}
      </ul>


    </div>
  )
}

export default ProposalDetail
