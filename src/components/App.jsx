import React from 'react';
import Button from '../containers/Button';
import NewsItem from '../containers/NewsItem'
import Loading from '../containers/Loading'
import Buttonmui1 from '../containers/Buttonmui'
import ButtonAppBar from '../containers/Appbar'
let App = () => (
  <div>
    {/* <script type="text/javascript" src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit">
    </script>
    <script type="text/javascript"> 
        function googleTranslateElementInit() { 
            new google.translate.TranslateElement(
                {pageLanguage: 'en'},'google_translate_element')
        } 
    </script> */}
    <ButtonAppBar/>
    {/* <Button /> */}
    <Buttonmui1/>
    <Loading />
    <NewsItem />
  </div>
);


export default App;
