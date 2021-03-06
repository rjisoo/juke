import Album from '../components/Album';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    selectedAlbum: state.albums.selected
  };
};

const AlbumContainer = connect(mapStateToProps)(Album);

export default AlbumContainer;
