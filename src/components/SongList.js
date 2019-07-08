import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

class SongList extends Component {
  renderList() {
    const { songs, selectSong: selector } = this.props;

    return songs.map(song => (
      <div className="item" key={song.title}>
        <div className="right floated content">
          <button
            onClick={() => selector(song)}
            className="ui button primary"
            type="button"
          >
            Select
          </button>
        </div>

        <div className="content">{song.title}</div>
      </div>
    ));
  }

  render() {
    return <div className="ui divided list">{this.renderList()}</div>;
  }
}

const mapStateToProps = state => ({ songs: state.songs });

export default connect(
  mapStateToProps,
  { selectSong }
)(SongList);

SongList.propTypes = {
  songs: PropTypes.array,
  selectSong: PropTypes.func,
};
