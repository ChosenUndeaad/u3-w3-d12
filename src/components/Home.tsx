import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

const ENDPOINT = "https://api.spaceflightnewsapi.net/v4/articles/:id";

const Home = function () {

    const [apiResponse, setApiResponse] = useState<APIResponse | null>(null);


  const getNews = async () => {
    try {
      const response = await fetch(ENDPOINT);
      if (response.ok) {
        const data = await response.json();
        console.log("Data", data);
      } else {
        throw new Error("Errore nel recupero dei dati");
      }
    } catch (error) {
      console.log("Errore", error);
    }
  };

  useEffect(() => {
    getNews();
  }, []);

  return (
    <>
      <Container>
        <Row>
          <Col xs={12} md={6} className='justify-content-center'>
            <h1>Space News Blog</h1>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6} className='justify-content-center'></Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
