import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { RenderCharacter } from '../Render/YourComponent';

export class CharacterPolling extends Component {
  state = { characterShowedUp: {} }

  componentDidMount() {
    this.props.getCharacter();
    this.interval = setInterval(() => {
      this.props.getCharacter();
    }, 5000)
  }

  componentDidUpdate(prevProps) {
    const {data} = this.props;
    if (prevProps.data.name !== data.name) {
      const characterName = data.name;
      
      const characterShowedUp = this.state.characterShowedUp[characterName];

      
      this.setState(prevState => ({
          characterShowedUp: {
            ...prevState.characterShowedUp,
            [characterName]: (characterShowedUp || 0) + 1,
          }
      }))
      
      
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { data } = this.props;

    return (
      <div className="Character_Card">
        <h2>Poll Characters</h2>
        {
          this.state.characterShowedUp.length &&
          <ul className="list">
            {
              this.state.characterShowedUp.map(({ name, amount }) => {
                return <li key={characterName}>{`${characterShowedUp}: ${characterShowedUp[characterName]}`}</li>;
              })
            }
          </ul>
        }
        <RenderCharacter data={data} />
      </div>
    );
  };
}

CharacterPolling.propTypes = {
  data: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    species: PropTypes.string,
  }),
  getCharacter: PropTypes.func.isRequired,
}
