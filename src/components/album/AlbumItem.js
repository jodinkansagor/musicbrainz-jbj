import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const replaceImage = (event) => {
  event.target.src = 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/eb777e7a-7d3c-487e-865a-fc83920564a1/d7kpm65-437b2b46-06cd-4a86-9041-cc8c3737c6f0.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2ViNzc3ZTdhLTdkM2MtNDg3ZS04NjVhLWZjODM5MjA1NjRhMVwvZDdrcG02NS00MzdiMmI0Ni0wNmNkLTRhODYtOTA0MS1jYzhjMzczN2M2ZjAuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.-bP80wHw6Jb8moQRsxURQxONZvAMnJ6xLDD8Es7mHps';
};


const AlbumItem = ({ albumId, albumTitle, artistName }) => (
  <>
    <Link to={`/recordings/${albumId}/${artistName}`}>
      <img src={`http://coverartarchive.org/release/${albumId}/front`} onError={replaceImage} />
      <p>{albumTitle}</p>
    </Link>
  </>
);

AlbumItem.propTypes = {
  albumId: PropTypes.string.isRequired,
  albumTitle: PropTypes.string.isRequired,
  artistName: PropTypes.string.isRequired
};

export default AlbumItem;
