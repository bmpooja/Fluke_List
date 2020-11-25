import React,{useEffect, useState} from 'react';
import './App.css';
import axios from 'axios';
import styled from 'styled-components';


const CustomeTable = styled.div`
max-width: 500px;
border: 2px solid #333;
border-radius: 4px;
margin-bottom: 25px;
padding-right: 10px;
overflow: hidden;

@media (max-width: 500px) {
  width: 100%;
}
`;

const CustomeTr = styled.div`
box-shadow: inset 0 3px 6px -3px rgba(0, 0, 0, .2);
padding: 10px;
`;

const CustomeTd = styled.div`
  display:flex;
  background-color: #f2f2f2;
  padding: 8px;
  border: 1px solid #ccc;
  flex-direction: row;
  align-items: stretch;
`;

const CustomSpan = styled.div`
flex-direction: column;
display: flex;
padding: 7px;
font:bold;
font-weight: bold;
`;

const NameDiv = styled.div`
font-weight: normal;
`;

const CustomeImage = styled.img`
margin: 10px 30px 10px 0;
width: 50px;
object-fit: contain;
align-self: flex-start;
`;


function App() {
  const [data, setData] = useState([])
  useEffect(() => {
    const fetchData = async() => {
      const response = await axios.get("https://www.cubyt.io/data/categories")
      setData(response.data)
  }
  fetchData();
},[]);

  return ( 
      <>
      <h1> Product List</h1>
      <CustomeTable >
          {
            data.map(item=> (
              <CustomeTr>
              <CustomeTd>
                {item.image_uri ? (
                <CustomeImage src={item.image_uri}/>
                ) : <CustomeImage src={`https://react.semantic-ui.com/images/wireframe/image.png`}/>}
              <CustomSpan>
                {item.category_name}
                <NameDiv>
                  {item.display_name}
                </NameDiv>
                  {item.description} 
              </CustomSpan>
              </CustomeTd>
              </CustomeTr>
            ))
          } 
         </CustomeTable>     
      </>
  )
}

export default App;
