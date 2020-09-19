import React, { useState, useEffect} from 'react';
import axios from 'axios';
import MaterialTable from 'material-table';

function CountryList() {
    const [countries, setCountries] = useState([]);
    
    async function getCountryData() {  
        const response = await axios.get(`https://restcountries.eu/rest/v2/all`);   
        const datacountry = response.data;
        setCountries(datacountry);  
    }
 
   useEffect(() => {
        getCountryData();  
    }, []);

     
 
    return (
        <MaterialTable 
            style={{ marginLeft:'10px', 
                marginRight:'10px', 
                marginBottom:'30px', 
                fontSize:'12px', 
                padding:'3px' }}

            title="Listagem de Países"
            columns={[
                { title: 'Pais', field: 'name' },
                { title: 'Capital', field: 'capital' },
                { title: 'Região', field: 'region' },
                { title: 'Sub Região', field: 'subregion'  },
                { title: 'População', field: 'population' },
                { title: 'Área', field: 'area' },
                { title: 'Fuso Horário', field: 'timezones' },
                { title: 'Nome Nativo', field: 'nativeName' },
                { title: 'Bandeira', field: 'flag' },
                
            ]}
          data={countries}
          
          options={{
              exportButton: true,
            
            headerStyle: {
              backgroundColor: '#3f51b5',
              color: '#FFFF'
            }}
          } 
          
        />
    )

}

export default CountryList;

