import React, { Component } from 'react'

export class Shimmer extends Component {
  render() {
    return (
      <div className='shimmer-container justify-center mt-4 flex gap-10 flex-wrap'>
        <div className="shimmer-card  w-72 rounded-lg h-72 bg-slate-400"></div>
        <div className="shimmer-card  w-72 rounded-lg h-72 bg-slate-400"></div>
        <div className="shimmer-card  w-72 rounded-lg h-72 bg-slate-400"></div>
        <div className="shimmer-card  w-72 rounded-lg h-72 bg-slate-400"></div>
        <div className="shimmer-card  w-72 rounded-lg h-72 bg-slate-400"></div>
        <div className="shimmer-card  w-72 rounded-lg  h-72 bg-slate-400"></div>
        <div className="shimmer-card  w-72 rounded-lg  h-72 bg-slate-400"></div>
        <div className="shimmer-card  w-72 rounded-lg  h-72 bg-slate-400"></div>
        <div className="shimmer-card  w-72 rounded-lg  h-72 bg-slate-400"></div>
        <div className="shimmer-card  w-72 rounded-lg  h-72 bg-slate-400"></div>
      </div>
    )
  }
}

export default Shimmer