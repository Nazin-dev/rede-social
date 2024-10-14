import { API_URL_IMAGE } from '../../../services/apiServices';
import './SearchProfileFeed.css';
import SearchProfileItem from './SearchProfileItem';

function SearchProfileFeed({ profiles, onDeleteProfile }) {
  return (
    <>
      {profiles.map((profile, index) => (
        <SearchProfileItem
          key={index}
          userid={profile.id}
          userProfile={API_URL_IMAGE + profile.img} 
          userName={profile.fullName} 
          name={profile.username} 
          onDelete={() => onDeleteProfile(index)}
        />
      ))}
    </>
  );
}

export default SearchProfileFeed;
