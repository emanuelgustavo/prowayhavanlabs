import React, { useState, useEffect } from 'react';

import api from '../services/api';

const Index = () => {

  const [operationList, setOperationList] = useState([]);

  useEffect(() => {
    api.get('/listalloperations')
      .then(response => {
        //setOperationList(response.data)
        console.log(response);
      });    
  }, []);

  return (
    <div>
      <div>
        Header
      </div>
      <div>
        {/*
          operationList.map(operation => {
            return (
              <div>
                <p>{operation.id}</p>
              </div>
            )
          })
        */}
      </div>
    </div>
  )
};

export default Index;