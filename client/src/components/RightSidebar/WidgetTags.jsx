import React from 'react'

const WidgetTags = () => {
    const tags = ['c','css','express','firebase','html','java','javascript','mern','mongodb','mysql','next.js','node.js','php','python','reactjs']
  return (
    <div className='widget-tags'>
        <h4>Watched tags</h4>
        <div className='widget-tags-div'>
            {
                tags.map((tag)=>(
                    <p style={{fontSize:"13px"}} key={tag}>{tag}</p>
                ))
            }
        </div>

    </div>
   
  )
}

export default WidgetTags