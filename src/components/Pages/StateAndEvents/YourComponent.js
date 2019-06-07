import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { RenderCharacter } from '../Render/YourComponent';

export class SearchCharacter extends Component {
  state = { search: '' }
  

  onInputChange = ({target}) => {
    this.setState({
      search: target.value.trim(),
    })
  }

  render() {
    const { data } = this.props;

   

    return (
      <div className="Character_Card">
        <h2>Search character by name</h2>
        <input type="text" className="search" value={this.state.search} onChange={this.onInputChange}/>
        <button className="btn-search" onClick={() => this.props.onSearch(this.state.search)}>Search</button>
        {
          this.props.data && this.props.data.length && (
            this.props.data.map(character => {
              <RenderCharacter data={character} />
            })
          )
        }
        
      </div>
    );
  };
}

SearchCharacter.propTypes = {
  data: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    species: PropTypes.string,
  }),
  onSearch: PropTypes.func.isRequired,
}
