import React from 'react'

const Menu = () => {

    const posts = [
        {
          id:1,
          title:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus accusantium",
          desc:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus accusantium porro ea beatae unde consectetur suscipit architect",
          img:"https://cdn.britannica.com/98/214598-050-9879F2FA/giant-sequoia-tree-Sequoia-National-Park-California.jpg"
        },
        {
          id:2,
          title:"Lorem, ipsum dolor sit amet",
          desc:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus accusantium porro ea beatae unde consectetur suscipit architect",
          img:"https://cdn.britannica.com/98/214598-050-9879F2FA/giant-sequoia-tree-Sequoia-National-Park-California.jpg"
        },
        {
          id:3,
          title:"Lorem, ipsum dolor sit amet ",
          desc:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus accusantium porro ea beatae unde consectetur suscipit architect",
          img:"https://cdn.britannica.com/98/214598-050-9879F2FA/giant-sequoia-tree-Sequoia-National-Park-California.jpg"
        },
        {
          id:4,
          title:"Lorem, ipsum dolor sit amet ",
          desc:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus ",
          img:"https://cdn.britannica.com/98/214598-050-9879F2FA/giant-sequoia-tree-Sequoia-National-Park-California.jpg"
        },
        {
          id:5,
          title:"Lorem, ipsum dolor sit amet",
          desc:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus",
          img:"https://cdn.britannica.com/98/214598-050-9879F2FA/giant-sequoia-tree-Sequoia-National-Park-California.jpg"
        },
        {
          id:6,
          title:"Lorem, ipsum dolor  ",
          desc:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus accusantium porro ea beatae unde consectetur suscipit architect",
          img:"https://cdn.britannica.com/98/214598-050-9879F2FA/giant-sequoia-tree-Sequoia-National-Park-California.jpg"
        }
    ]

  return (
    <div className='menu'>
        <h1>Other Post you may like</h1>
      {posts.map(post=>(
        <div className='post1' key={post.id}>
            <img src={post.img} alt="" />
            <h2>{post.title}</h2>
            <button>Read More</button>
        </div>
      ))}
    </div>
  )
}

export default Menu;