import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function ProposalsList({ currentUser, proposals, cancelProposal, createProposal, updateProposal }) {
  const now = new Date();
  now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
  const [token, setToken] = useState('')
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  // const [location, setLocation] = useState('')
  const [startDate, setStartDate] = useState(now.toISOString().slice(0, 16))
  const [endDate, setEndDate] = useState('')

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
      start_date: startDate,
      end_date: endDate,
      user: currentUser
    })
    setToken('')
    setTitle('')
    setDescription('')
    setStartDate('')
    setEndDate('')
  }
  
  console.log(proposals)

  return (
    <div>
      <h1>Proposals</h1>
      {proposals.map(mproposal => (<p><Link to={`/api/proposals/${mproposal.id}`}>{mproposal.title}</Link> --- DAO: {mproposal.token} -- Author: {mproposal.author} </p> ))}
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
          <label htmlFor="start_date"> Start Date </label>
          <input
            type="datetime-local"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            name="start_date"
          />
        </p>
        <p>
          <label htmlFor="end_date"> End Date </label>
          <input
            type="datetime-local"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            name="end_date"
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
