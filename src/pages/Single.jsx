import React from 'react'
import Edit from '../img/edit.png';
import Delete from '../img/delete.png'
import { Link } from 'react-router-dom';
import Menu from '../components/Menu';


const Single = () => {
  return (
    <div className='single'>
      <div className="content1">
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeGsL4KlAQhQCZU2uryDXN_njXN_BdGeA4YydSDyTaQA2QOEusy53vFF3G2uQQRdjCWqE&usqp=CAU' alt='trees'/>
      <div className="user">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeGsL4KlAQhQCZU2uryDXN_njXN_BdGeA4YydSDyTaQA2QOEusy53vFF3G2uQQRdjCWqE&usqp=CAU" alt="trees" />
        <div className="info">
          <span>John</span>
          <p>Posted 2 days ago</p>
        </div>
        <div className="edit">
          <Link to={`/write?edit=2`}>
        <img className='edtdel' src={Edit} alt="Edit" />
        </Link>
        <img className='edtdel' src={Delete} alt="Delete" />
        </div>
      </div>
      <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit, deleniti tenetur itaque expedita aperiam accusamus delectus exercitationem aut? Voluptate quasi officia aliquid aperiam cum eveniet itaque nam aliquam quia beatae?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus tempore odio labore. Officia harum facere laudantium dicta a ullam id quod, deleniti quia eos aliquam dolore mollitia, accusantium sequi nisi?<br/><br/>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita possimus molestias odit reprehenderit quo, dolore aliquam quos nesciunt, temporibus, incidunt tenetur nihil distinctio nobis atque pariatur explicabo consequuntur. Aliquid, repellat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus corporis natus magni, error reprehenderit ex vel voluptas accusantium, ducimus deserunt quod sit ipsa modi esse. Saepe provident perferendis totam esse!<br/><br/>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos earum labore consequatur quae, ipsam esse delectus reiciendis et, adipisci quibusdam numquam qui ad reprehenderit aliquam nesciunt iusto est quidem similique!</p>
      </div>
        <Menu/>
    </div>
  );
};

export default Single