import React, { useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Write = () => {

  const [value, setValue] = useState('');

  console.log(value);
  return (
    <div className="add">
      <div className="content2">
        <input type="text" placeholder='Title' />
        <div className="editorContainer">
          <ReactQuill className="editor" theme="snow" value={value} onChange={setValue}/>
        </div>
      </div>
      <div className="menu2">
        <div className="item">
          <h1>Publish</h1>
          <span>
            <b>Status:</b>Draft
          </span>
          <span>
            <b>Visible:</b>Public
          </span>
          <input style={{display:"none"}} type="file" id='file' name='' />
          <label className='file' htmlFor="file">Upload Image</label>
          <div className="buttons">
            <button className='savebutton'>Save as a draft</button>
            <button className='updatebutton'>Update</button>
          </div>
        </div>
        <div className="item">
          <h1>Categorie</h1>
          {/* ART */}
          <div className="cat">
          <input type="radio" name='cat' value='art' id='art'/>
          <label htmlFor="art">Art</label></div>
          {/* SCIENCE */}
          <div className="cat">
          <input type="radio" name='cat' value='science' id='science'/>
          <label htmlFor="science">Science</label></div>
          {/* TECHNOLOGY */}
          <div className="cat">
          <input type="radio" name='cat' value='technology' id='technology'/>
          <label htmlFor="technology">Technology</label></div>
          {/* CINEMA */}
          <div className="cat">
          <input type="radio" name='cat' value='cinema' id='cinema'/>
          <label htmlFor="cinema">Cinema</label></div>
          {/* FOOD */}
          <div className="cat">
          <input type="radio" name='cat' value='food' id='food'/>
          <label htmlFor="food">Food</label></div>
          {/* DESIGN */}
          <div className="cat">
          <input type="radio" name='cat' value='design' id='design'/>
          <label htmlFor="design">Design</label></div>
        </div>
      </div>

    </div>
  )
}

export default Write