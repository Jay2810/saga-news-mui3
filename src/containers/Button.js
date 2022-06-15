import React from 'react';
import { connect } from 'react-redux';
import { getNewss } from '../actions'



class Button extends React.Component {

execute = ()=>{
  this.props.loadnews(document.getElementById("category").value,document.getElementById("country").value)
}


  render() {
    return (
<div>
<select id="category" name="catList" onChange={this.execute}>
  <option value="health">health</option>
  <option value="business">business</option>
  <option value="science">science</option>
  <option value="technology">technology</option>
</select>

<select id="country" name="CountryList" onChange={this.execute}>
  <option value="in">India</option>
  <option value="us">USA</option>
  <option value="de">Germany</option>
  <option value="fr">France</option>
</select>


      <button
        onClick={()=>{
          console.log(document.getElementById("category").value);
          console.log(document.getElementById("country").value);

          this.props.loadnews(document.getElementById("category").value,document.getElementById("country").value)}
        }
      >Press to see News</button>
      </div>
    );
  }

};

const mapDispatchToProps = {
  loadnews: getNewss,
};

Button = connect(
  null,
  mapDispatchToProps,
)(Button);

export default Button;
