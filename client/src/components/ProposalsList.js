import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function ProposalsList({ currentUser, proposals, cancelProposal, createProposal, updateProposal }) {
  const now = new Date();
  now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
  const [token, setToken] = useState('')
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  // const [location, setLocation] = useState('')
  const [startTime, setStartTime] = useState(now.toISOString().slice(0, 16))
  const [endTime, setEndTime] = useState('')

  // const cancelProposalButton = (proposal) => {
  //   if (proposal.user_is_creator) {
  //     return <button onClick={() => cancelProposal(proposal.id)}>Cancel Proposal</button>
  //   }
  // }

  const handleSubmit = (e) => {
    e.preventDefault()
    createProposal({
      token,
      title,
      description,
      start_time: startTime,
      end_time: endTime,
      user: currentUser,
    })
    setToken('')
    setTitle('')
    setDescription('')
    setStartTime('')
    setEndTime('')
  }
  
  return (
    <div>
      <h1>Proposals</h1>
      {proposals.map(proposal => (
        <p><Link to={`/api/proposals/${proposal.id}`}>{proposal.title}</Link> --- {'DAO:' && proposal.token && ' -- '}{'author:' && proposal.author} </p>
      ))}
      <h3>Add Proposal</h3>
      <form onSubmit={handleSubmit}>
        <p>
          <label htmlFor="token">DAO Token </label>
          <input
            type="text"
            value={token}
            onChange={(e) => setToken(e.target.value)}
            name="token"
          />
        </p>
        <p>
          <label htmlFor="title">Title </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            name="title"
          />
        </p>
        <p>
          <label htmlFor="description"> Description </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            name="description"
          />
        </p>
        {/* <p>
          <label htmlFor="name"> Location </label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            name="location"
          />
        </p> */}
        <p>
          <label htmlFor="start_time"> Start Time </label>
          <input
            type="datetime-local"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
            name="start_time"
          />
        </p>
        <p>
          <label htmlFor="end_time"> End Time </label>
          <input
            type="datetime-local"
            value={endTime}
            onChange={(e) => setEndTime(e.target.value)}
            name="end_time"
          />
        </p>
        {/* <p>
          <label htmlfor="group_name">Group Name </label>
          <input
            type="text"
            name="group_name"
            value={groupName}
            list="groups"
            onChange={(e) => setGroupName(e.target.value)}
          /> */}
          {/* <datalist id="groups">
            {groups.map(group => <option>{group.name}</option>)}
          </datalist> */}
        {/* </p> */}
        {" "}<button type="submit">Add Proposal</button>
      </form>
    </div>
  )
}

export default ProposalsList
