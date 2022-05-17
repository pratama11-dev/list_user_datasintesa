import axios from "axios";
import { useEffect, useState } from 'react';
import { Card, Avatar, Modal, Button } from 'antd';
import { MailOutlined, HomeOutlined, CalendarOutlined } from '@ant-design/icons';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import ModalScreen from '../screen/ModalScreen';


export default function HomeScreen() {
  const [ posts, setPosts ] = useState();

  const PAGE_NUMBER = 1;
  const [page, setPage] = useState(PAGE_NUMBER);

  const { Meta } = Card;

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modaldata, setModaldata] = useState([]);

  const showModal = (email, name, last_name, phone, cell, street_number, street_name, city, state, country, postcode, nat, dob) => {
    let modalData = [
      email,
      name,
      last_name,
      phone,
      cell,
      street_number,
      street_name,
      city,
      state,
      country,
      postcode,
      nat,
      dob
    ];

    setModaldata(modalData);

    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  useEffect(()=> {
    const fetchData = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(`https://randomuser.me/api/?page=${page}&results=20`);
        setLoading(false);
        setPosts(data);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }}
      fetchData();
  },[page]);

  const scrollToEnd = () => {
    setPage(page + 1);
  }

  window.onscroll = function() {
    if (Math.round(window.scrollY + window.innerHeight) >= Math.round(document.body.scrollHeight)) {
      scrollToEnd()
    }
  }

  const calculatedAge = (birthday) => {
    let today = new Date();
    let birthDate = new Date(birthday);
    let age = today.getFullYear() - birthDate.getFullYear();
    let m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age = age - 1;
    }
    return age;
  };

  const handleButtonFilter = (e) => {
    let filter = e.target.value;
    let filteredPosts = posts.results.filter(post => {
      return post.nat.toLowerCase().includes(filter.toLowerCase());
    });
    setPosts({results: filteredPosts});
  }


  return (
    <div>
      <div className="d-flex justify-content-end align-items-center">
        <p className="mb-0 mr-3">Filter Nation By : </p>
        <Button type="primary" value="GB" onClick={handleButtonFilter}>GB</Button>
      </div>
      <div className="site-layout-content d-flex flex-wrap justify-content-center">
        <Modal title="User Detail" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
          <ModalScreen
            email={modaldata[0]}
            name={modaldata[1]}
            last_name={modaldata[2]}
            phone={modaldata[3]}
            cell={modaldata[4]}
            street_number={modaldata[5]}
            street_name={modaldata[6]}
            city={modaldata[7]}
            state={modaldata[8]}
            country={modaldata[9]}
            postcode={modaldata[10]}
            nat={modaldata[11]}
            dob={calculatedAge(modaldata[12])}
          />
        </Modal>

        {loading? <LoadingBox></LoadingBox>
          :
          error?<MessageBox>{error}</MessageBox>
          :<>
          {posts && posts.results.map((post, index) => (
            <div className="d-flex" key={index}>
              <div className='d-flex align-self-stretch'>
                <Card
                  style={{
                    width: 280,
                    margin: '5px 5px',
                    borderRadius: "15px",
                    overflow: "hidden"
                  }}
                  onClick={()=>
                    showModal(
                      post.email,
                      post.name.first,
                      post.name.last,
                      post.phone,
                      post.cell,
                      post.location.street.number,
                      post.location.street.name,
                      post.location.city,
                      post.location.state,
                      post.location.country,
                      post.location.postcode,
                      post.nat,
                      post.dob.date,
                    )}
                  >
                  <Meta
                    avatar={<Avatar src={post.picture.thumbnail} size="large"/>}
                    title={[post.name.title + ". " + post.name.first + " " + post.name.last]}
                  />
                  <div className="card_body mt-8 ml-2">
                    <div className="d-flex flex-column flex-wrap text-break">
                      <div className="d-flex align-items-center text-muted">
                        <MailOutlined />
                        <p className="mb-0 ml-3">{post.email}</p>
                      </div>
                      <div className="d-flex align-items-center text-muted">
                        <HomeOutlined />
                        <p className="mb-0 ml-3">{post.location.city}</p>
                      </div>
                      <div className="d-flex align-items-center text-muted">
                        <CalendarOutlined />
                        <p className="mb-0 ml-3">{new Date(post.dob.date).toLocaleString()}</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          ))}
        </>}
      </div>
    </div>
  )
}
