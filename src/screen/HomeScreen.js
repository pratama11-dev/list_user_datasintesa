import axios from "axios";
import { useEffect, useState } from 'react';
import { Card, Avatar } from 'antd';
import { EyeOutlined, EditOutlined } from '@ant-design/icons';


export default function HomeScreen() {
  const [ posts, setPosts ] = useState();

  const { Meta } = Card;

  useEffect(()=> {
    fetchData();
  },[]);

  const fetchData = async () => {
    const {data} = await axios.get("https://randomuser.me/api/?page=1&results=10");

    setPosts(data);
  }

  return (
    <div className="site-layout-content d-flex flex-wrap">
      {posts && posts.results.map((post) => (
        <>
          <div key={post.login.uuid}>
            <div className='d-flex align-self-stretch'>
              <Card
                style={{ width: 280, margin: '8px 8px' }}
                actions={[
                  <EyeOutlined key="setting" />,
                  <EditOutlined key="edit" />,
                ]}
              >
                <Meta
                  avatar={<Avatar src={post.picture.thumbnail} />}
                  title={[post.name.title + ". " + post.name.first + " " + post.name.last]}
                  description={post.email + " City : " + post.location.city + " Age : " + post.dob.age}
                />
              </Card>
            </div>
          </div>
        </>
      ))}
    </div>
  )
}
