import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {

  const post = [
    {
      id:1,
      title:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus accusantium porro ea beatae unde consectetur suscipit architect",
      desc:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus accusantium porro ea beatae unde consectetur suscipit architect",
      img:"https://cdn.britannica.com/98/214598-050-9879F2FA/giant-sequoia-tree-Sequoia-National-Park-California.jpg"
    },
    {
      id:2,
      title:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus accusantium porro ea beatae unde consectetur suscipit architect",
      desc:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus accusantium porro ea beatae unde consectetur suscipit architect",
      img:"https://cdn.britannica.com/98/214598-050-9879F2FA/giant-sequoia-tree-Sequoia-National-Park-California.jpg"
    },
    {
      id:3,
      title:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus accusantium porro ea beatae unde consectetur suscipit architect",
      desc:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus accusantium porro ea beatae unde consectetur suscipit architect",
      img:"https://cdn.britannica.com/98/214598-050-9879F2FA/giant-sequoia-tree-Sequoia-National-Park-California.jpg"
    },
    {
      id:4,
      title:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus accusantium porro ea beatae unde consectetur suscipit architect",
      desc:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus accusantium porro ea beatae unde consectetur suscipit architect",
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeGsL4KlAQhQCZU2uryDXN_njXN_BdGeA4YydSDyTaQA2QOEusy53vFF3G2uQQRdjCWqE&usqp=CAU"
    },
    {
      id:5,
      title:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus accusantium porro ea beatae unde consectetur suscipit architect",
      desc:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus accusantium porro ea beatae unde consectetur suscipit architect",
      img:"https://cdn.britannica.com/98/214598-050-9879F2FA/giant-sequoia-tree-Sequoia-National-Park-California.jpg"
    },
    {
      id:6,
      title:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus accusantium porro ea beatae unde consectetur suscipit architect",
      desc:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus accusantium porro ea beatae unde consectetur suscipit architect",
      img:"https://cdn.britannica.com/98/214598-050-9879F2FA/giant-sequoia-tree-Sequoia-National-Park-California.jpg"
    }
    
  ]
  return (
    <div className='home'>
      <div className="posts">
        {post.map((post)=>(
          <div className="post" key={post.id}>
            <div className="img">
              <img src={post.img} alt="" />
            </div>
            <div className="content">
              <Link to={`/post/${post.id}`}>
                <h1 className='content-h1'>{post.title}</h1>
              </Link>
              <p className='content-p'>{post.desc}</p>
              <button className='content-button'>Read More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home